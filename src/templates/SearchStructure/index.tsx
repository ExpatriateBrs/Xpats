import React, { useEffect } from "react";
import {
  FeedContainer,
  GalleryContainer,
  SearchContainer,
  InputContainer,
  InputCheckBox,
  InputCheckBoxContainer,
  InputCheckBoxLabel,
  DropdownInputCategory,
  DropdownInputCategoryLabel,
  CleanDropdownButton,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { colors } from "../../Styles/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { GenericInput } from "../../Molecules/GenericInput";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Banner } from "../../Molecules/BannerContainer";
import { MaxAdContentRating, MobileAds } from "react-native-google-mobile-ads";
import { StyleSheet, TextInput } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'
import { categoriesFormatted } from "../../categories";
import { CategoriesDropdown } from "../../Molecules/CategoriesDropdown";

export function SearchStructure({ navigation }: any) {
  const { users } = useUser((state) => state);
  const [search, setSearch] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<any[]>(users.filter((user, index) => index < 10) || []);
  const { user, setUser } = useUser(state => state)
  const [nationality, setNationality] = React.useState<string>('');
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState<string>('');

  const getFilter = () => {
    let usersAux = users.filter((userList, index) =>
    (userList.displayName.toLowerCase().includes(search.toLowerCase()) ||
      userList.services.join().toLowerCase().includes(search.toLowerCase()))
    )
    if (!!nationality) usersAux = usersAux.filter(userList => userList?.city === nationality)
    usersAux = usersAux.filter((userList, index) => index < 10)
    setSearchResult(usersAux);

    if (!!category) {
      usersAux = usersAux.filter(userList => userList.category === category)
      usersAux = usersAux.filter((userList, index) => index < 10)
      setSearchResult(usersAux)
    }
  }

  useEffect(() => {
    getFilter()
  }, [search, nationality, category])

  useEffect(() => {
    setNationality('')
  }, [user])

  MobileAds()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: true,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: true,

      // An array of test device IDs to allow.
      testDeviceIdentifiers: ['2077ef9a63d2b398840261c8221a0c9b', 'EMULATOR']
    })
    .then(() => {
      // Request config successfully set!
      console.log('Request config successfully set!')
    });


  MobileAds()
    .initialize()
    .then(adapterStatuses => {
      console.log('adapterStatuses', adapterStatuses)
    });


  return (
    <SearchContainer>
      <InputContainer>
        <Banner />
        <GenericInput placeholder="Buscar" onChangeText={(e: string) => setSearch(e)} value={search} />
        <DropdownInputCategory>
          
          <CategoriesDropdown setIsFocus={setIsFocus} setCategory={setCategory} isFocus={isFocus} data={categoriesFormatted} value={category} />
          <CleanDropdownButton onPress={() => {
            setCategory('')
          }}>
            <DropdownInputCategoryLabel>Limpar categoria</DropdownInputCategoryLabel>
          </CleanDropdownButton>

        </DropdownInputCategory>
        <InputCheckBoxContainer onPress={() => {
          if (!!nationality) setNationality("")
          else setNationality(user.country)
        }}>
          <InputCheckBox isSelected={nationality}  >
            {nationality && <MaterialIcons name="done" size={18} color={colors.blueSecondary} />}
          </InputCheckBox>

          <InputCheckBoxLabel>Mesma cidade de domicílio</InputCheckBoxLabel>
        </InputCheckBoxContainer>


      </InputContainer>
      <FeedContainer>
        <GalleryContainer >
          <Gallery items={searchResult} navigation={navigation} maxHeight={heightPercentageToDP('65%')} />
        </GalleryContainer>
      </FeedContainer>
    </SearchContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '85%',
    backgroundColor: colors.bluePrimary,
    color: colors.whitePrimary,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.whitePrimary,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.whitePrimary,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});