import React from "react";
import {Button} from "@mantine/core";
import {ApoPropsType} from "../Type/ApoType.ts";

export const ButtonPrimary: React.FC<ApoPropsType> = ({
    children,
    onClickButton,
    mt,
    w,
    m,
    variant = "filled",
    c,
    leftSection,
    rightSection,
    style
}) => {
    return (
        <>
            <Button
                leftSection={leftSection}
                rightSection={rightSection}
                onClick={onClickButton}
                className={"hover:bg-[#282626]"}
                variant={variant}
                color="rgba(0, 0, 0, 1)"
                size= "sm"
                radius="md"
                mt={mt}
                w={w}
                m={m}
                c={c}
                style={style}
            >
                {children}
            </Button>
        </>
    )
}
