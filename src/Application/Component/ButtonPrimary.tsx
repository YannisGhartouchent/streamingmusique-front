import React from "react";
import {Button} from "@mantine/core";
import {ApoPropsType} from "../Type/ApoType.ts";

export const ButtonPrimary: React.FC<ApoPropsType> = ({
    children,
    onClickButton
}) => {
    return (
        <>
            <Button
                onClick={onClickButton}
                className={"hover:bg-[#282626]"}
                variant="filled"
                color="rgba(0, 0, 0, 1)"
                size= "xs"
                radius="md"
            >
                {children}
            </Button>
        </>
    )
}
