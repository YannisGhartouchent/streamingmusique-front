import {Logo} from "../../Component/Logo.tsx";
import { Checkbox, Flex, Input, NavLink, Paper, Text, useMantineTheme } from "@mantine/core";
import {ButtonPrimary} from "../../Component/ButtonPrimary.tsx";
import {useState} from "react";
    
export const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conditionChecked, setConditionChecked] = useState(false)
    const [conditionError, setConditionError] = useState(false)
    

    const colorPaper = useMantineTheme().colors.dark[2]
    
    const handlerLogin = () => {
        if(conditionChecked){
            // faire appelle api au back pour la connexion
            const userRegister = {
                email: email,
                password: password
            }
            console.log("userRegister", userRegister)
            return
        }
        setConditionError(true)
        // sinon afficher message d'erreur pour les conditions general
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
                        <Input.Wrapper label={"Nom de l'utilisateur"} mt="md">
                            <Input
                                value={password}
                                placeholder={"Nom de l'utilisateur"}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper label={"Date de naissance"} mt="md">
                            <Input
                            type="date" 
                            value={password}
                            placeholder={"Date de naissance"}
                             onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                        </Input.Wrapper>
                        <Checkbox
                            label="J’accepte de recevoir des actualités d’APOLLON"
                            className= {"text-nowrap"}
                            mt="xl"
                            checked={conditionChecked}
                            onChange={() => setConditionChecked(!conditionChecked)}
                        />
                        {conditionError && <Text></Text>}
                        <ButtonPrimary
                            onClickButton={handlerLogin}
                            w={"50%"}
                            mt={30}
                            m={"auto"}
                        >
                            S'inscrire
                        </ButtonPrimary>
                    </Flex>
              </Paper>
            </Flex>
        </> 
    )
}
 