import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ButtonPrimary} from "./Application/Component/ButtonPrimary.tsx";
import { ButtonSecondaire } from './Application/Component/ButtonSecondaire.tsx';
import { ButtonExterne } from './Application/Component/ButtonExterne.tsx';


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

       <ButtonExterne>
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
