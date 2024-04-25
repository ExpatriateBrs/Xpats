import React from "react";
import {
  Center,
  Stack,
} from "native-base";
import { ProfessionalItemCardProps } from "./types";
import {
  DescriptionText,
  Heading,
  Section,
  CardContainer,
  CategoryText,
  CategoryContainer,
  CenterCustom,
  CenterText
} from "./styles";
import { getEllipsisText } from "../../functions/getEllipsisText";
import { View } from "react-native";
import { Services } from "../Services";
import { colors } from "../../Styles/theme";
import { UserImageArea } from "../../Organisms/UserImageArea";
import { useProfessional } from "../../stores/ProfessionalDetails";

export const ProfessionalItemCard = ({
  description,
  id,
  user,
  name,
  services,
  city,
  category,
  country,
  navigation
}: ProfessionalItemCardProps) => {
  const { setProfessional } = useProfessional(state => state)
  return (
    <CardContainer onPress={() => {
      setProfessional(user)
      navigation.navigate('DetailsScreen', { uid: id });
    }}>
      <View>
        <View>
          <UserImageArea user={user} />
          {/* {city && <Center
            bg={colors.yellowPrimary}
            position="absolute"
            bottom="5"
            px="5"
            py="0.8"
            fontFamily={'mono'}
          > */}
            {/* {city && (city.split(' ').length > 1 ? city.split(' ').map((word, index) => {
              if (index < 3) {
                return word[0].toUpperCase()
              }

              return ''


            }).join('') : city?.slice(0, 3)).toUpperCase() + ' - '}{country.slice(0, 2).toUpperCase()} */}
            {/* {getEllipsisText(city?.toUpperCase(), 12)}
          </Center>} */}
          {city && <CenterCustom>
            <CenterText>
              {getEllipsisText((city ||  "")?.toUpperCase(), 12)}

            </CenterText>
            {/* <CenterText>
            {country.slice(0, 2).toUpperCase()}

            </CenterText> */}
          </CenterCustom>}
          <Center
            bg={colors.yellowPrimary}
            position="absolute"
            bottom="-2"
            px="5"
            py="0.8"
            fontFamily={'mono'}
          >
           
            {country.slice(0, 2).toUpperCase()}
          </Center>
          
        </View>

        <Stack paddingY="4" paddingX="4" space={3}>
          <Stack space={2}>
            <Section heightPercentage="5%">
              <Heading>{getEllipsisText(name, 12)}</Heading>
            </Section>
            <Section heightPercentage="5%" >

              {category && <CategoryContainer>
                <CategoryText>{getEllipsisText(category || "", 12)}</CategoryText>

              </CategoryContainer>}
            </Section>

            <Section heightPercentage="5%">
              <Services services={services} limit={4} />
            </Section>
          </Stack>
          <Section>
            <DescriptionText>
              {getEllipsisText(description, 60)}
            </DescriptionText>
          </Section>
        </Stack>
      </View>
    </CardContainer>
  );
};
