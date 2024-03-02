import React from "react";
import {
  BannerContainer,
  FeedContainer,
  GalleryContainer,
  HomeContainer,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { useUser } from "../../stores/User";
import { useLoading } from "../../stores/Loading";
import { LoadingComponent } from "../../Organisms/LoadingComponent";
import { View } from "native-base";
import { Banner } from "../../Molecules/BannerContainer";

export function HomeStructure({ navigation }: any) {
  const { isLoading } = useLoading(state => state);
  const { users } = useUser((state) => state);

  return (
    <HomeContainer>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <FeedContainer>
        <GalleryContainer>
          {isLoading ? <LoadingComponent /> :
            <Gallery items={users || []} navigation={navigation} />
          }
        </GalleryContainer>
      </FeedContainer>
    </HomeContainer>
  );
}
