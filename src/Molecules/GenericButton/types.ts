import { ReactElement } from "react";

export interface GenericButtonProps {
    children?: ReactElement
    content?: string
    onPress: () => void
    color?: string
    backgroundColor?: string
    border?: string
}

