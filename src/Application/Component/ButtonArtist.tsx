import React from "react";
import { NavLink } from "react-router-dom"; 

export const ButtonArtist: React.FC = () => {
  return (
    <div className="flex space-x-4 ml-3 mt-2">
      <div className="flex flex-col">
        <div
          role="button"
          tabIndex={0}
          className="w-24 h-24 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src="./src/Application/Component/images/tupac.jpg"
            alt="Artiste"
            className="w-full h-full object-cover"
          />
        </div>

        
        <NavLink
          to="/artist/artist-name"
          className="text-white font-bold text-sm hover:underline"
          active ClassName="text-white font-bold"
        >
          Nom de l'Artiste
        </NavLink>
      </div>

    
      <div className="flex flex-col">
        <div
          role="button"
          tabIndex={0}
          className="w-24 h-24 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src="./src/Application/Component/images/tupac.jpg"
            alt="Artiste"
            className="w-full h-full object-cover"
          />
        </div>

        <NavLink
          to="/artist/another-artist"
          className="text-white font-bold text-sm hover:underline"
          active ClassName="text-white font-bold"
        >
          Nom de l'Artiste
        </NavLink>
      </div>

      {/* Ajoutez d'autres éléments de la même manière */}
      <div className="flex flex-col">
        <div
          role="button"
          tabIndex={0}
          className="w-24 h-24 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src="./src/Application/Component/images/tupac.jpg"
            alt="Artiste"
            className="w-full h-full object-cover"
          />
        </div>

        <NavLink
          to="/artist/third-artist"
          className="text-white  font-bold text-sm hover:underline"
          active ClassName="text-white font-bold"
        >
          Nom de l'Artiste
        </NavLink>
      </div>
    </div>
  );
};
