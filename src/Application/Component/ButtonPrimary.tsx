import React from "react";
import {Button} from "@mantine/core";

export const ButtonPrimary: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <Button
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
