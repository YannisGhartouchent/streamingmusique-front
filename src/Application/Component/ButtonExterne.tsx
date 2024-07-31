import React from "react";
import { Button } from "@mantine/core";


export const ButtonExterne: React.FC<{
    children: React.ReactNode,
    iconLeft?: React.ReactNode,
    iconRight?: React.ReactNode,
}> = ({
    children,
    iconLeft,
    iconRight,
}) => {
    return (
        <>
            <Button
                leftSection={iconLeft}
                rightSection={iconRight}
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
