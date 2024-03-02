import React from "react";
import {
  Image,
} from "native-base";
import { UserImageAreaProps } from "./types";
import {
  AspectRadioView,
} from "./styles";
import { setPhotoURL } from "../../functions/setPhoto";

export const UserImageArea = ({
  user,
}: UserImageAreaProps) => {
  return (
    <AspectRadioView >
      <Image
        source={setPhotoURL(user)}
        size="container"
        resizeMode="contain"
        width={170}
        height={120}
        style={{
          aspectRatio: 1.5,
          resizeMode: "stretch",
        }}
        alt="image"
      />
    </AspectRadioView>

  );
};
