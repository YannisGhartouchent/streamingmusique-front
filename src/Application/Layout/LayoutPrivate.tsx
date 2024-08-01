import React from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mantine/core";

export const LayoutPrivate: React.FC = () => {
    return (
        <Box h={"100%"} style={{backgroundColor: "#464646"}}>
            <Outlet/>
        </Box>
    )
}
