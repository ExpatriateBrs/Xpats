import React, { useEffect } from "react";
import {
  BannerContainer,
} from "./styles";
import { useUser } from "../../stores/User";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
import { verifyPlatform } from "../../functions/verifyPlatform";

// const adUnitId = __DEV__ ? TestIds.BANNER : verifyPlatform();
//TODO when commit -> uncomment this line
const adUnitId = verifyPlatform({type: 'banner'});

export function Banner() {
  return (
    <BannerContainer>
      <BannerAd unitId={adUnitId} size="BANNER"

        onAdFailedToLoad={(error) => {
          console.log(error);

        }
        }
      />
    </BannerContainer>

  );
}
