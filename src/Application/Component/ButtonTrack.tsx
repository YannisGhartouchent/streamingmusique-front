import React from "react";

export const ButtonTrack: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {/* Premier bouton */}
      <button className="bg-black text-white font-bold py-2 px-2 w-40 h-12 rounded-md flex items-center transition duration-300">
        {/* Image à gauche */}
        <img
          src="./src/Application/Component/images/Gospel.jpg"
          alt="Cover Track"
          className="w-10 h-10 rounded-md" // Ajustez la taille de l'image
        />
        {/* Texte du bouton */}
        <span className="ml-5">Track</span>
      </button>

      {/* Deuxième bouton */}
      <button className="bg-black text-white font-bold py-2 px-2 w-40 h-12 rounded-md flex items-center transition duration-300">
        {/* Image à gauche */}
        <img
          src="./src/Application/Component/images/Gospel.jpg"
          alt="Cover Track"
          className="w-10 h-10 rounded-md" // Ajustez la taille de l'image
        />
        {/* Texte du bouton */}
        <span className="ml-5">Track</span>
      </button>
    </div>
  );
};
