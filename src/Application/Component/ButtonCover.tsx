import React from "react";
import { NavLink } from "react-router-dom"; 
export const ButtonCover: React.FC = () => {
  return (
    <div className="flex space-x-4 ml-3 mt-2">
      <div className="flex flex-col">
        <div
          role="button"
          tabIndex={0}
          className="w-24 h-24  overflow-hidden cursor-pointer"
        >
          <img
            src="./src/Application/Component/images/CoverTrack.jpg"
            alt="Cover Track"
            className="w-full h-full object-cover"
          />
        </div>
        
        <NavLink
          to="/album/album-name"
          className="text-white text-sm font-bold mt-2 hover:underline"
          activeClassName="text-white font-bold"
        >
          Nom de l'album
        </NavLink>
        
        <NavLink
          to="/artist/artist-name"
          className="text-gray-400 text-sm hover:underline"
          activeClassName="text-white font-bold"
        >
          Nom de l'Artiste
        </NavLink>
      </div>

      
      <div className="flex flex-col">
        <div
          role="button"
          tabIndex={0}
          className="w-24 h-24  overflow-hidden cursor-pointer"
        >
          <img
            src="./src/Application/Component/images/CoverTrack.jpg"
            alt="Cover Track"
            className="w-full h-full object-cover"
          />
        </div>
        <NavLink
          to="/album/another-album"
          className="text-white text-sm font-bold mt-2 hover:underline"
          activeClassName="text-white font-bold"
        >
          Nom de l'album
        </NavLink>
        <NavLink
          to="/artist/another-artist"
          className="text-gray-400 text-sm hover:underline"
          activeClassName="text-white font-bold"
        >
          Nom de l'Artiste
        </NavLink>
      </div>

      {/* Ajoutez d'autres éléments de la même manière */}
      <div className="flex flex-col">
        <div
          role="button"
          tabIndex={0}
          className="w-24 h-24 overflow-hidden cursor-pointer"
        >
          <img
            src="./src/Application/Component/images/CoverTrack.jpg"
            alt="Cover Track"
            className="w-full h-full object-cover"
          />
        </div>
        <NavLink
          to="/album/third-album"
          className="text-white text-sm font-bold mt-2 hover:underline"
          activeClassName="text-white font-bold"
        >
          Nom de l'album
        </NavLink>
        <NavLink
          to="/artist/third-artist"
          className="text-gray-400 text-sm hover:underline"
          activeClassName="text-white font-bold"
        >
          Nom de l'Artiste
        </NavLink>
      </div>
    </div>
  );
};
