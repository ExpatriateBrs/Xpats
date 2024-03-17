import React, { useEffect } from "react";
import {
  FeedContainer,
  GalleryContainer,
  SearchContainer,
  InputContainer,
  InputCheckBox,
  InputCheckBoxContainer,
  InputCheckBoxLabel,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { colors } from "../../Styles/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { GenericInput } from "../../Molecules/GenericInput";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Banner } from "../../Molecules/BannerContainer";
import { MaxAdContentRating, MobileAds } from "react-native-google-mobile-ads";

export function SearchStructure({ navigation }: any) {
  const { users } = useUser((state) => state);
  const [search, setSearch] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<any[]>(users.filter((user, index) => index < 10) || []);
  const { user, setUser } = useUser(state => state)
  const [nationality, setNationality] = React.useState<string>(user?.country || "");

  const getFilter = () => {
    let usersAux = users.filter((userList, index) =>
    (userList.displayName.toLowerCase().includes(search.toLowerCase()) ||
      userList.services.join().toLowerCase().includes(search.toLowerCase()))
    )
    if (!!nationality) usersAux = usersAux.filter(userList => userList.country === nationality)
    usersAux = usersAux.filter((userList, index) => index < 10)
    setSearchResult(usersAux);
  }

  useEffect(() => {
    getFilter()
  }, [search, nationality])

  useEffect(() => {
    setNationality(user.country)
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
        <GenericInput placeholder="Buscar" onChangeText={(e: string) => setSearch(e)} value={search} />
        <Banner />
        <InputCheckBoxContainer onPress={() => {
          if (!!nationality) setNationality("")
          else setNationality(user.country)
        }}>
          <InputCheckBox isSelected={nationality}  >
            {nationality && <MaterialIcons name="done" size={18} color={colors.blueSecondary} />}
          </InputCheckBox>

          <InputCheckBoxLabel>Mesmo país de domicílio</InputCheckBoxLabel>
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
