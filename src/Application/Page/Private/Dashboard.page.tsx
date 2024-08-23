import React from 'react';
import { Box, Paper, Text, Title, NavLink, Flex } from '@mantine/core';
import { RiHome2Fill } from "react-icons/ri";

const DashboardPage: React.FC = () => {
  return (
    <Box
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
        <Paper shadow="md" p="lg" style={{ width: 300, textAlign: 'center' }}>
               <Title order={3} mb="sm">Menu de navigation </Title>

                <Flex w={"100%"} align={"baseline"} mt={"xs"}>
                        <Text>ACCEUIL</Text>
                        { <NavLink
                        leftSection={<RiHome2Fill />}
                            bg={"transparent"}
                            c={"#ff0000"}
                            fw={"bold"}
                            href={"/Dashboard"}
                            label={"Acceuil"}
                            w={"fit-content"}
                            mt="xs"
                         /> }
                </Flex>
        </Paper>
    </Box>
  );
};


export default DashboardPage