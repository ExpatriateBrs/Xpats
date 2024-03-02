import React, { useState } from "react";
import { colors } from "../../Styles/theme";
import { IconDiv, InputGeneric, InputGenericContainer } from "./styles";
import { GenericInputProps } from "./types";
import { MaterialIcons } from '@expo/vector-icons';

export const GenericInput = ({ placeholder, placeholderTextColor, onChangeText, value, secureTextEntry, marginTop, keyboardType = 'default', rightIcon }: GenericInputProps) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [secureTextEntryState, setSecureTextEntryState] = useState<boolean>(!!secureTextEntry);

    return (
        <InputGenericContainer>
            <InputGeneric
                placeholder={placeholder}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor || colors.whitePrimary}
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={secureTextEntryState}
                marginTop={marginTop}

            />
            {!!rightIcon && <IconDiv onPress={() => setSecureTextEntryState(!secureTextEntryState)}>
                <MaterialIcons name={!secureTextEntryState ? "visibility" : 'visibility-off'} size={24} color={isFocused ? colors.yellowPrimary : colors.whitePrimary} />
            </IconDiv>}


        </InputGenericContainer>
    )
}