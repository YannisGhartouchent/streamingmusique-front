import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <button className="bg-black text-white font-extrabold py-2 px-10 rounded-full font-raleway">Se Connecter</button>
      <button className="bg-black  text-white font-extrabold py-2 px-10 rounded-full font-raleway">S'inscrire</button>
      <button className="bg-stone-800 text-white font-extrabold py-2 px-10 rounded-full font-raleway">Connexion avec Google</button>
      <button className="bg-stone-800 text-white font-extrabold py-2 px-10 rounded-full font-raleway">Connexion avec Apple</button>
      <button className="bg-stone-800 text-white font-extrabold py-2 px-10 rounded-full font-raleway">Connexion avec Facebook</button>
      <button className="bg-black text-white font-extrabold py-2 px-10 rounded-full font-raleway">Préférence</button>
      <button className="bg-red-700 text-black font-extrabold py-2 px-10 rounded-full font-raleway">PREMIUM</button>
      </>
  
  )
}



export default App
