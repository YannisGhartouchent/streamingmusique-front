
import React from "react";
import {Button} from "@mantine/core";
import {ApoPropsType} from "../Type/ApoType.ts";

export const ButtonProfil: React.FC<ApoPropsType> = ({children, onClickButton}) => {
    return (
        <>
            <Button onClick={onClickButton} variant="filled" color="black" size="xs" radius="lg">
                {children}
                Profil
            </Button>
        </>
    )
}
