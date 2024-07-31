import {ButtonPrimary} from "./Application/Component/ButtonPrimary.tsx";
import { ButtonSecondaire } from './Application/Component/ButtonSecondaire.tsx';
import { ButtonExterne } from './Application/Component/ButtonExterne.tsx';
import { InputEmail } from "./Application/Component/InputEmail.tsx";
import {FcGoogle} from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './App.css';
import {Logo} from "./Application/Component/Logo.tsx"; // Assurez-vous d'avoir un fichier CSS pour les styles globaux

function App() {

  return (


    
    <>
        <Logo w={"200"} h={"167"} />
        <InputEmail>
        Adresse Email
        </InputEmail>
        <ButtonPrimary>
            Se connecter
        </ButtonPrimary>
        <ButtonPrimary>
            S'inscrire
        </ButtonPrimary>
        <ButtonPrimary>
            Préférences
        </ButtonPrimary>

        <ButtonSecondaire>
            PREMIUM
        </ButtonSecondaire>

       <ButtonExterne iconLeft={<FcGoogle />}>
            Connexion avec Google
      </ButtonExterne>
       <ButtonExterne iconLeft={<FaApple />}>
            Connexion avec Apple
      </ButtonExterne>
       <ButtonExterne iconLeft={<FaFacebook />}>
            Connexion avec Facebook
      </ButtonExterne>
    </>
  )
}



export default App
