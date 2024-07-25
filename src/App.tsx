import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ButtonPrimary} from "./Application/Component/ButtonPrimary.tsx";

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
      <button className="bg-stone-700 text-white font-extrabold py-2 px-10 rounded-full font-raleway ring ring-white">Connexion avec Google</button>
      <button className="bg-stone-700 text-white font-extrabold py-2 px-10 rounded-full font-raleway ring ring-white">Connexion avec Apple</button>
      <button className="bg-stone-700 text-white font-extrabold py-2 px-10 rounded-full font-raleway ring ring-white">Connexion avec Facebook</button>
      <button className="bg-red-700 text-black font-extrabold py-2 px-10 rounded-full font-raleway">PREMIUM</button>
    </>
  )
}



export default App
