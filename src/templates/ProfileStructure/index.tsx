import React, { memo, useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {
  ButtonSave,
  ButtonSaveContainer,
  CancelButton,
  CancelText,
  CheckBoxContainer,
  ContentContainer,
  CountriesListContainer,
  CountryButtonSelect,
  CountryContainer,
  CountryItem,
  DataContainer,
  DescripitionInput,
  DescripitionText,
  DescriptionContainer,
  EditImageButton,
  EditProfileDataButton,
  ExitButton,
  ExitButtonContainer,
  ExitText,
  ImageContainer,
  ImageProfile,
  InputCellphone,
  InputCountry,
  InputName,
  LabelContainer,
  LabelText,
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
import { getCountries, getLocalCountries } from "../../services/getCountries";
import * as ImageManipulator from 'expo-image-manipulator';
import { Banner } from "../../Molecules/BannerContainer";

const COUNTRIES = ['Brasil', 'Argentina', 'Chile', 'Colombia', 'Uruguai', 'Paraguai']

const suggestions = COUNTRIES.map(country => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function ProfileStructure({ navigation }: any) {
  const services = ['servico 1', 'servico 2', 'servico 3', 'servico 1', 'servico 2', 'servico 3', 'servico 1', 'servico 2', 'servico 3']
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
  });

  const [isEditing, setIsEditing] = useState(false);
  const [searchingCountry, setSearchingCountry] = useState(false);
  const [servicesAutoFocus, setServicesAutoFocus] = useState(false);
  const [servicesList, setServicesList] = useState<string[]>(user.services || state.services || []);
  const [serviceInput, setServiceInput] = useState<string>('');
  const [countryInput, setCountryInput] = useState<string>(state.country);
  const [countruiesList, setCountriesList] = useState<any[]>([]);

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

  const getCountrySearched = (country: string) => {
    if (!!country.length && country !== ' - ') {
      let countries = getLocalCountries(country);
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
    })
    setServicesList(user.services || state.services || [])
    setIsEditing(false)
  }

  useEffect(() => {
    if (!!state.photoURL && user.photoURL !== state.photoURL) {

      saveUser()
    }
  }
    , [state.photoURL])

  useEffect(() => {
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
    })
    setCountryInput(user.country || "")
    setServicesList(user.services || [])
  }, [user])


  useEffect(() => {
    getCountrySearched(countryInput)
  }, [countryInput])


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
                <LabelText>Domicílio:</LabelText>
                <ValueText>{state.country}</ValueText>
              </LabelContainer>
              <LabelContainer>
                <LabelText>Serviços:</LabelText>
              </LabelContainer>
              <ServicesBadgesContainer>
                {state.services.map((service, index) => {
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
              <DataContainer>
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

                  <InputCountry
                    placeholder="País de Domicílio"
                    onChangeText={(text: string) => {
                      setCountryInput(text)
                    }}
                    value={countryInput === ' - ' ? '' : countryInput}
                    onFocus={() => {
                      setSearchingCountry(true)
                      disableButtons()
                    }}
                    onBlur={() => {
                      if (countruiesList.find(country => country.toLowerCase() === countryInput.toLowerCase())) {
                        setState({ ...state, country: countryInput });
                        setSearchingCountry(false)
                      }
                      enableButtons()
                    }}
                  />

                  {searchingCountry && countryInput && countryInput !== " - " ?
                    <CountriesListContainer
                      key={countruiesList.length}
                    >
                      {countruiesList?.map((country, index) => {
                        console.log('country item', country)
                        return <CountryButtonSelect onPress={() => {
                          setState({ ...state, country: country });

                          setCountryInput(country)
                          console.log('country', country)
                          setSearchingCountry(false)
                        }} >
                          <CountryItem >{country}</CountryItem>
                        </CountryButtonSelect>
                      })}
                    </CountriesListContainer>
                    :
                    (
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
                    )}
                </CountryContainer>
              </DataContainer>
            )}
        </ContentContainer>
      </>
    </PageContainer>
  );
}

export default memo(ProfileStructure);