import React from "react";
import { Outlet } from "react-router-dom";
import { AppShell, Box, Paper, Title, NavLink, Flex } from "@mantine/core";
import { RiHome2Fill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { LuLibrary } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io"; // Import direct de l'icône
import { FaUserFriends } from "react-icons/fa"; // Correct importation
import { VscAccount } from "react-icons/vsc"; // Correct importation
import { LogoNoir } from "../../Application/Component/LogoNoir";
import { ButtonSecondaire } from "../Component/ButtonSecondaire";

export const LayoutPrivate: React.FC = () => {
  return (
    <AppShell
      h={"100%"}
      style={{ backgroundColor: "#464646" }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      footer={{
        height: 100,
      }}
    >
      <AppShell.Navbar style={{ backgroundColor: "#cb0000", border: "none" }}>
        {/* Liens de navigation */}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f0f0",
            flexDirection: "column",
          }}
        >
          {/* Ajouter les NavLinks avec des bordures */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* NavLink Activity avec bordure */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: '2px solid black', // Bordure noire
                borderRadius: '30px', // Coins arrondis
              }}
            >
              <FaUserFriends size={30} />
            </div>

            {/* NavLink Compte avec bordure */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: '2px solid black', // Bordure noire
                borderRadius: '30px', // Coins arrondis
              }}
            >
              <VscAccount size={30} />
            </div>

            {/* NavLink Notifications avec bordure */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: '2px solid black', // Bordure noire
                borderRadius: '30px', // Coins arrondis
              }}
            >
              <IoIosNotifications size={30} />
            </div>
          </div>

          <Paper
            p="lg"
            style={{
              width: "100%",
              height: "50vh",
              borderRadius: 20,
              textAlign: "center",
              backgroundColor: "#EB1F12",
            }}
          >
            <Title order={3} mb="sm"></Title>

            <Flex
              direction="column"
              w={"100%"}
              align={"center"}
              justify={"center"}
              mt="xs"
              gap="sm"
            >
              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                ></label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-6 h-6 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-xs rounded-full dark:border-black dark:placeholder-black dark:text-white"
                    placeholder="Que voulez-vous écouter ?"
                    required
                  />
                </div>
              </form>
              <NavLink
                leftSection={<RiHome2Fill />}
                c={"#000000"}
                fw={"bold"}
                href={"/Menu Latéral"}
                label={"ACCUEIL"}
                w={"fit-content"}
                mt="xs"
              />
              <NavLink
                leftSection={<TiMessages />}
                c={"#000000"}
                fw={"bold"}
                href={"/Menu Latéral"}
                label={"DISCUSSIONS DE GROUPE"}
                w={"fit-content"}
                mt="xs"
              />
              <NavLink
                leftSection={<LuLibrary />}
                c={"#000000"}
                fw={"bold"}
                href={"/Menu Latéral"}
                label={"BIBLIOTHÈQUE"}
                w={"fit-content"}
                mt="xs"
              />

              <div>
                <LogoNoir />
              </div>
            </Flex>
          </Paper>

          {/* Bouton placé sous Paper */}
          <div style={{ marginTop: "30px" }}>
            <ButtonSecondaire />
          </div>
        </Box>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer
        zIndex={999999}
        style={{ backgroundColor: "#000000", border: "none", color: "#ffffff" }}
      >
        <p>Je suis le lecteur</p>
      </AppShell.Footer>
    </AppShell>
  );
};