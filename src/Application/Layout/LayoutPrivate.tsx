import React from "react";
import {Outlet} from "react-router-dom";
import {AppShell} from "@mantine/core";

export const LayoutPrivate: React.FC = () => {
    return (
        <AppShell
            h={"100%"}
            style={{backgroundColor: "#464646"}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                
            }}
            footer={{
                height: 100,
            }}
        >
            <AppShell.Navbar
                style={{backgroundColor: "#cb0000", border: "none"}}
                
            >
                <p>je suis le menu lateral</p>
                {/*  TODO : mettre les liens  */}
            </AppShell.Navbar>
            
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
            
            <AppShell.Footer
                zIndex={999999}
                style={{backgroundColor: "#000000", border: "none", color: "#ffffff"}}
            >
                <p>je suis le lecteur</p>
            {/*  TODO : lecteur  */}
            </AppShell.Footer>
        </AppShell>
    )
}
