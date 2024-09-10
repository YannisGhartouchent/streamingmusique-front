import React from "react";
import {Button} from "@mantine/core";
import {ApoPropsType} from "../Type/ApoType.ts";

export const ButtonSecondaire: React.FC<ApoPropsType> = ({children, onClickButton}) => {
    return (
        <>
            <Button onClick={onClickButton} variant="filled" color="black" size="md" radius="lg">
                {children}
                Préférences
            </Button>
        </>
    )
}
