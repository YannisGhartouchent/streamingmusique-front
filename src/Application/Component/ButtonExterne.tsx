import React from "react";
import { Button } from "@mantine/core";
import {ApoPropsType} from "../Type/ApoType.ts";


export const ButtonExterne: React.FC<ApoPropsType> = ({
    children,
    leftSection,
    rightSection,
    onClickButton
}) => {
    return (
        <>
            <Button
                onClick={onClickButton}
                leftSection={leftSection}
                rightSection={rightSection}
                className={"hover:bg-[#000000]"}
                color={"rgba(40, 38, 38, 1)"}
                c={"white"}
                variant="filled"
                size="xs"
                radius="md"
                style={{borderColor: "white"}}
            >
                {children}
            </Button>;
        </>
    )
}
