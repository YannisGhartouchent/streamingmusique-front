import React from "react";
import {Button} from "@mantine/core";

export const ButtonSecondaire: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <Button variant="filled" color="rgba(235, 31, 18, 1)" size="xs" radius="md">
                {children}
            </Button>;
        </>
    )
}
