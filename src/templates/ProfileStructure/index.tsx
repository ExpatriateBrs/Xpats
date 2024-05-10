import React, { memo, useEffect, useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  ButtonSave,
  ButtonSaveContainer,
  CancelButton,
  CancelText,
  CheckBoxContainer,
  ContentContainer,
  CountryContainer,
  DataContainer,
  DataEditContainer,
  DescripitionInput,
  DescripitionText,
  DescriptionContainer,
  EditImageButton,
  EditProfileDataButton,
  ExitButton,
  ExitButtonContainer,
  ExitText,
  GetLocationText,
  ImageContainer,
  ImageProfile,
  InputCellphone,
  InputName,
  LabelContainer,
  LabelText,
  LinkGetLocation,
  NameEditContainer,
  SaveText,
  SectionSeparator,
  ServiceBadge,
  ServiceBadgeContainer,
  ServiceBadgeInput,
  ServiceBadgeInputText,
  ServicesBadgesContainer,
  ServicesMultiValueInput,
  ValueText,
} from "./styles";
import { PageContainer } from "../../Molecules/PageContainer";
import { useUser } from "../../stores/User";
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";
import { CheckboxArea } from "../../Molecules/CheckboxArea";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { setPhotoURL } from "../../functions/setPhoto";
import { UserModel } from "../../stores/User/types";
import * as ImageManipulator from 'expo-image-manipulator';
import { Banner } from "../../Molecules/BannerContainer";
import * as Location from 'expo-location'
import Geocoder from 'react-native-geocoding';
import { jwtDecode } from 'jwt-decode';
import { ActivityIndicator } from "react-native-paper";
import "core-js/stable/atob";
import { JWTTokenType } from "./types";
import { CategoriesDropdown } from "../../Molecules/CategoriesDropdown";
import { categoriesFormatted } from "../../categories";

function ProfileStructure({ navigation }: any) {
  const [disabledButtons, setDisabledButtons] = React.useState(false);

  const { user, setUser } = useUser(state => state)

  const [state, setState] = useState({
    displayName: user.displayName || " - ",
    phoneNumber: user.phoneNumber || " - ",
    country: user.country || " - ",
    description: user.description || " - ",
    services: user.services || [],
    isProfessional: user.isProfessional || false,
    photoURL: user.photoURL || "",
    email: user.email || "",
    uid: user.uid || "",
    id: user.id || "",
    city: user.city || '',
    category: user.category || ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [searchingCategory, setSearchingCategory] = useState(false);
  const [servicesAutoFocus, setServicesAutoFocus] = useState(false);
  const [servicesList, setServicesList] = useState<string[]>(user.services || state.services || []);
  const [serviceInput, setServiceInput] = useState<string>('');
  const [categoryInput, setCategoryInput] = useState<string>(state.category);
  const [countruiesList, setCountriesList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  const setServices =
    (settingFocus: boolean = true) => {
      if (!!serviceInput) {
        const newServices: string[] = [...servicesList, serviceInput]
        setServicesList(newServices);
        setServiceInput('')
        setState({ ...state, services: newServices })
      }
      setServicesAutoFocus(settingFocus)

    }

  const onRemoveService = (service: string) => {
    const newServices = servicesList.filter(item => item !== service)
    setServicesList(servicesList.filter(item => item !== service))
    setState({ ...state, services: newServices })
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 1],
      quality: 0.7,
      base64: true,


    });

    if (!result.canceled) {
      let image = result.assets[0]

      const resizedImage = await ImageManipulator.manipulateAsync(
        image.uri,
        [{ resize: { width: 200 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
      );


      const newState = { ...state, photoURL: "data:image/jpeg;base64," + resizedImage.base64 }
      setState(newState);

    }
  };

  const saveUser = async () => {
    try {

      console.log('state', state.category)
      const docRef = await updateDoc(doc(db, "users", user.id), state);
      console.log("Document updated with ID: ", docRef);
      setUser(state)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    finally {
      setIsEditing(false)
    }
  }

  const getCategorySearched = (category: string) => {
    if (!!category.length && category !== ' - ') {
      let countries = categoriesFormatted//getLocalCategories(category);
      console.log('countries', countries)
      setCountriesList(countries)
    }

  }

  const disableButtons = () => {
    setDisabledButtons(true)
  }

  const enableButtons = () => {
    setDisabledButtons(false)
  }

  const resetState = () => {
    setState({
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      country: user.country,
      description: user.description,
      services: user.services,
      isProfessional: user.isProfessional,
      photoURL: user.photoURL,
      email: user.email,
      uid: user.uid,
      id: user.id,
      city: user.city || '',
      category: user.category || '',
    })
    setServicesList(user.services || state.services || [])
    setIsEditing(false)
  }

  const onViewDetailsInvoicesState = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
  }

  async function getPosition(): Promise<any> {

    return new Promise((resolve, reject) => {

      onViewDetailsInvoicesState().then(() => {

        Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest }).then((position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          let key = ''
          try {
            const keyEncoded = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJBSXphU3lBcS1fT0xaUTUyLWpURDlmYTNEQm9SaFd1YWxYb1RVZEUiLCJpYXQiOjE3MTIyNDU5ODN9.W66amtSAcl3xpIc4V_8zFkQa_gKQuijLzXSqvYnQ9aQ'
            const keyObjectDecoded = jwtDecode<JWTTokenType>(keyEncoded)
            key = keyObjectDecoded.key


          } catch (e) {
            console.log('error decode', e)
          }

          Geocoder.init(key);

          Geocoder.from({
            lat: latitude,
            lng: longitude
          })
            .then(json => {
              var compoundCode = json['plus_code']['compound_code'];
              const cityDatas = compoundCode.split(',')[0].split(' ');
              let city = ''
              cityDatas.forEach((i, idx) => {
                if (idx !== 0) {
                  city += i + ' '
                }
              })
              const country = compoundCode.split(',')[2].split(' ')[1];
              setState({ ...state, country, city })

            })
            .catch(error => {
              console.log('error loc 1', error)

            }
            );
          return resolve(position);
        }).catch((error) => {
          console.log('error loc 2', error)
          return reject(error);
        }
        )

        setIsLoading(false)

      })
    })
  }

  useEffect(() => {
    getPosition().then((position) => {
      console.log('position', position)
    }
    ).catch((error) => {
      console.log('error', error)
    });
  }, []);

  useEffect(() => {
    if (!!state.photoURL && user.photoURL !== state.photoURL) {

      saveUser()
    }
  }
    , [state.photoURL])

  useEffect(() => {
    if (!isEditing) {
      setState({
        displayName: user.displayName || " - ",
        phoneNumber: user.phoneNumber || " - ",
        country: user.country || " - ",
        description: user.description || " - ",
        services: user.services || [],
        isProfessional: user.isProfessional || false,
        photoURL: user.photoURL || "",
        email: user.email || "",
        uid: user.uid || "",
        id: user.id || "",
        city: user.city || '',
        category: user.category || ''
      })
      setCategoryInput(user.category || "")
      setServicesList(user.services || [])
    }
  }, [user, state.displayName])

  return (
    <PageContainer>
      <>
        <ContentContainer >
          <ImageContainer>
            <ImageProfile source={setPhotoURL(state as UserModel)} />
            <EditImageButton onPress={pickImage}>
              <MaterialIcons name="mode-edit" size={24} color={colors.blueSecondary} />
            </EditImageButton>
          </ImageContainer>
          <SectionSeparator />
          {!isEditing ?
            <DataContainer>
              <LabelContainer>
                <LabelText>Nome:</LabelText>
                <ValueText>{state.displayName}</ValueText>
              </LabelContainer>
              <NameEditContainer>

                <EditProfileDataButton onPress={() => setIsEditing(true)}>
                  <MaterialIcons name="mode-edit" size={24} color={colors.blueSecondary} />
                </EditProfileDataButton>
              </NameEditContainer>
              <LabelContainer>
                <LabelText>Telefone:</LabelText>
                <ValueText>{state.phoneNumber}</ValueText>
              </LabelContainer>
              <LabelContainer>
                <LabelText>País:</LabelText>
                <ValueText>{state.country}</ValueText>
              </LabelContainer>
              <LabelContainer>
                <LabelText>Domicílio:</LabelText>
                <ValueText>{state.city}</ValueText>
              </LabelContainer>
              <LabelContainer>
                <LabelText>Categoria:</LabelText>
                <ValueText>{state.category}</ValueText>
              </LabelContainer>
              <LabelContainer>
                <LabelText>Serviços:</LabelText>
              </LabelContainer>
              <ServicesBadgesContainer>
                {state.services?.map((service, index) => {
                  return <ServiceBadgeContainer>

                    <ServiceBadge key={index}>{service}</ServiceBadge>
                  </ServiceBadgeContainer>
                })
                }
              </ServicesBadgesContainer>
              <DescriptionContainer>
                <LabelContainer>
                  <LabelText>Descrição:</LabelText>
                </LabelContainer>
                <DescripitionText>{state.description}</DescripitionText>
              </DescriptionContainer>

              <ExitButtonContainer>
                <ExitButton onPress={() => {
                  setUser({})
                  AsyncStorage.multiRemove(['@user', '@uid'])
                }}>
                  <ExitText>Sair</ExitText>
                  <MaterialIcons name="logout" size={24} color={colors.bluePrimary} />
                </ExitButton>
              </ExitButtonContainer>
              <Banner />
            </DataContainer>
            :
            (
              <DataEditContainer>
                <InputName
                  placeholder="Nome"
                  onChangeText={(text: string) => setState({ ...state, displayName: text })}
                  value={state.displayName === ' - ' ? '' : state.displayName}
                  onFocus={disableButtons}
                  onBlur={enableButtons}
                />

                <InputCellphone
                  placeholder="Telefone"
                  keyboardType={'numeric'}
                  onChangeText={(text: string) => setState({ ...state, phoneNumber: text })}
                  value={state.phoneNumber === ' - ' ? '' : state.phoneNumber}
                  onFocus={disableButtons}
                  onBlur={enableButtons}
                />

                <CountryContainer  >

                  <LabelContainer>
                    <LabelText>País:</LabelText>
                    <ValueText>{state.country}</ValueText>
                  </LabelContainer>
                  <LabelContainer>
                    <LabelText>Domicílio:</LabelText>
                    <ValueText>{state.city}</ValueText>
                  </LabelContainer>

                  {!isLoading ? <LinkGetLocation onPress={() => {
                    setIsLoading(true)
                    getPosition()
                      .then((position) => { })
                      .catch((error) => {
                        console.log('error', error)
                      }
                      )
                  }}>

                    <GetLocationText>Obter localização</GetLocationText>
                    <MaterialCommunityIcons name="target" size={24} color={colors.blueSecondary} />
                  </LinkGetLocation>
                    :
                    <ActivityIndicator size="small" color={colors.bluePrimary} />
                  }



                  <CategoriesDropdown setIsFocus={setIsFocus} setCategory={setCategoryInput} isFocus={isFocus} data={categoriesFormatted} value={categoryInput} onChange={(value) => {
                    setState({ ...state, category: value });
                  }}
                    customStyle={{ width: '80%', backgroundColor: colors.graySecondary, color: colors.blackPrimary, borderWidth: 0 }}
                    placeholderStyle={{ color: colors.blackPrimary }}
                    selectedTextStyle={{ color: colors.blackPrimary }}
                  />
                  <>
                    <ServicesMultiValueInput
                      key={servicesList.length}
                      placeholder="Serviços"
                      onChangeText={(text: string) => setServiceInput(text)}
                      value={serviceInput}
                      onSubmitEditing={() => setServices()}
                      onBlur={() => {
                        setServices(false);
                        enableButtons()
                      }}
                      onFocus={disableButtons}
                      autoFocus={servicesAutoFocus}
                    />

                    <ServicesBadgesContainer>
                      {servicesList.map((service, index) => {
                        return <ServiceBadgeInput key={index}
                          onPress={() => onRemoveService(service)
                          }
                        >
                          <ServiceBadgeInputText>
                            {service}
                          </ServiceBadgeInputText>
                          <SimpleLineIcons name="close" size={18} color={colors.blueSecondary} />
                        </ServiceBadgeInput>
                      })}
                    </ServicesBadgesContainer>

                    <DescripitionInput
                      placeholder="Descrição"
                      onChangeText={(text: string) => setState({ ...state, description: text })}
                      value={state.description === ' - ' ? '' : state.description}
                      multiline
                      onFocus={disableButtons}
                      onBlur={enableButtons}

                    />

                    <CheckBoxContainer>

                      <CheckboxArea isSelected={state.isProfessional} onPress={() => setState({ ...state, isProfessional: !state.isProfessional })} labelContent="Sou um prestador de serviço" />
                    </CheckBoxContainer>

                    <ButtonSaveContainer>
                      <CancelButton onPress={resetState} disabled={disabledButtons} >
                        <CancelText>Cancelar</CancelText>
                        <MaterialIcons name="cancel" size={24} color={colors.bluePrimary} />
                      </CancelButton>
                      <ButtonSave onPress={saveUser} disabled={disabledButtons}>
                        <SaveText>Salvar</SaveText>
                        <MaterialIcons name="save" size={24} color={colors.yellowPrimary} />
                      </ButtonSave>
                    </ButtonSaveContainer>


                  </>

                </CountryContainer>
              </DataEditContainer>
            )}
        </ContentContainer>
      </>
    </PageContainer>
  );
}

export default memo(ProfileStructure);