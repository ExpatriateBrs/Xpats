import React from "react";
import {
  DataContainer,
  DescripitionText,
  DescriptionContainer,
  ImageContainer,
  LabelContainer,
  LabelText,
  ServiceBadge,
  ServiceBadgeContainer,
  ServicesBadgesContainer,
  ValueText,
  WhatsappArea,
  WhatsappButton,
  WhatsappNumber,
} from "./styles";
import { UserImageArea } from "../UserImageArea";
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";
import { Linking } from "react-native";

function UserContainerData({ state }: any) {

  const sendWppMessage = (number: string) => {
    const url =
      `whatsapp://send?text=GET_SERVICES_APP: Olá, gostaria de contratar seus serviços&phone=${number}`;
    Linking.openURL(url)
      .then(data => {
        console.log('opened');
      })
      .catch(err => console.log('err', err));
  };

  return (
    <DataContainer>
      <ImageContainer>

        <UserImageArea user={state} />
      </ImageContainer>
      <LabelContainer>
        <LabelText>Nome:</LabelText>
        <ValueText>{state.displayName}</ValueText>
      </LabelContainer>

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
        {state?.services?.map((service, index) => {
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
      <WhatsappArea>
        <WhatsappButton onPress={() => sendWppMessage(state.phoneNumber)}>
          <FontAwesome name="whatsapp" size={32} color={colors.whitePrimary} />
          <WhatsappNumber>
            Whatsapp
          </WhatsappNumber>
        </WhatsappButton>
      </WhatsappArea>

    </DataContainer>

  );
}

export default UserContainerData;