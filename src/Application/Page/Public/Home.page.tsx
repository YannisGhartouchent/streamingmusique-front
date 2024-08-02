import {Logo} from "../../Component/Logo.tsx";
import { Checkbox, Flex, Input, Divider, NavLink, Paper, Text, useMantineTheme } from "@mantine/core";
import {ButtonPrimary} from "../../Component/ButtonPrimary.tsx";
import {useState} from "react";
import {FcGoogle} from "react-icons/fc";

export const HomePage: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conditionChecked, setConditionChecked] = useState(false)
    const [conditionError, setConditionError] = useState(false)
    
    
    const colorPaper = useMantineTheme().colors.dark[2]
    
    const handlerLogin = () => {
        if(conditionChecked){
            // faire appelle api au back pour la connexion
            const userConnection = {
                email: email,
                password: password
            }
            console.log("userConnection", userConnection)
            return
        }
        setConditionError(true)
        // sinon afficher meessage d'erreur pour les conditions general
    }
    
    return (
        <>
            <Flex direction={"column"} align={"center"} justify={"center"} w={"100%"} h={"100%"}>
                <Logo/>
                <Paper
                    mt={50}
                    style={{backgroundColor: colorPaper, display: "flex", flexDirection: "column", alignItems: "center"}}
                    pt={20}
                    pb={20}
                    pl={20}
                    pr={20}
                    w={"450px"}
                    radius={"md"}
                >
                    <Flex direction={"column"} w={"60%"} justify={"center"}>
                        <Input.Wrapper label={"Adresse E-mail"}>
                            <Input
                                value={email}
                                placeholder={"Adresse E-mail"}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper label={"Mot de passe"} mt="md">
                            <Input
                                value={password}
                                placeholder={"Mot de passe"}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                        </Input.Wrapper>
                        <Checkbox
                            label="J'accèpte les conditions générales"
                            mt="lg"
                            checked={conditionChecked}
                            onChange={() => setConditionChecked(!conditionChecked)}
                        />
                        {conditionError && <Text>Vous devez accepter les conditions générales</Text>}
                        <ButtonPrimary
                            onClickButton={handlerLogin}
                            w={"50%"}
                            mt={30}
                            m={"auto"}
                        >
                            Se connecter
                        </ButtonPrimary>
                    </Flex>
                    <Flex w={"100%"} align={"baseline"} mt={"xs"}>
                        <Text>Tu n'as pas encore de compte APOLLON ?</Text>
                        <NavLink
                            bg={"transparent"}
                            c={"#ff0000"}
                            fw={"bold"}
                            href={"/register"}
                            label={"Inscription"}
                            w={"fit-content"}
                            mt="xs"
                        />
                    </Flex>
                    
                    <Divider size={"xl"} my="md" bg={"white"} />
                    
                    <ButtonPrimary
                        leftSection={<FcGoogle />}
                        variant={"outline"}
                        style={{border: "1px solid #fff"}}
                        c={"white"}
                        onClickButton={handlerLogin}
                        w={"70%"}
                        mt={30}
                        m={"auto"}
                    >
                        Google
                    </ButtonPrimary>
                    <ButtonPrimary
                        onClickButton={handlerLogin}
                        w={"50%"}
                        mt={30}
                        m={"auto"}
                    >
                        Se connecter
                    </ButtonPrimary>
                    <ButtonPrimary
                        onClickButton={handlerLogin}
                        w={"50%"}
                        mt={30}
                        m={"auto"}
                    >
                        Se connecter
                    </ButtonPrimary>
                </Paper>
            </Flex>
        </>
    )
}
