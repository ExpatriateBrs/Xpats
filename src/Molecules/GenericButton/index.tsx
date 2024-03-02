import React from "react";
import { ButtonGeneric, ButtonGenericContainer, GenericText } from "./styles";
import { GenericButtonProps } from "./types";
import { colors } from "../../Styles/theme";

export const GenericButton = ({ children, content, onPress, backgroundColor, color, border  }: GenericButtonProps) => {

    return (
        <ButtonGenericContainer>
            <ButtonGeneric backgroundColor={backgroundColor} border={border} onPress={onPress} >
                {children || <GenericText color={color} >{content}</GenericText>}
            </ButtonGeneric>
        </ButtonGenericContainer>
    )
}