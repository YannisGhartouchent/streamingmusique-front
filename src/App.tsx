import {ButtonPrimary} from "./Application/Component/ButtonPrimary.tsx";
import { ButtonSecondaire } from './Application/Component/ButtonSecondaire.tsx';
import { ButtonExterne } from './Application/Component/ButtonExterne.tsx';
import {FcGoogle} from "react-icons/fc";


function App() {

  return (
    <>
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
       <ButtonExterne>
            Connexion avec Apple
      </ButtonExterne>
       <ButtonExterne>
            Connexion avec Facebook
      </ButtonExterne>
    </>
  )
}



export default App
