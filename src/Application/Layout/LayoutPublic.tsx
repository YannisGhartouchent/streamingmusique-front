import React from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mantine/core";

export const LayoutPublic: React.FC = () => {
    return (
        <Box h={"100%"} c={"white"} style={{backgroundColor: "#000"}}>
            <Outlet/>
        </Box>
    )
}
