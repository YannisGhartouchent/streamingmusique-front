import React from "react";
import { ButtonCover } from "../../Component/ButtonCover";
import { ButtonArtist } from "../../Component/ButtonArtist";
import { ButtonTrack } from "../../Component/ButtonTrack";
import { BlackSquare } from "../../Component/BlackSquare";

export const DashboardPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[90vh] py-10">
      {/* Contenu au-dessus du carré noir */}
      <h1 className="text-white text-xl z-10">Écoutée(s) dernièrement</h1>
      <div className="mt-4 z-10">
        <ButtonTrack />
      </div>

      <h1 className="text-white text-xl mt-7 z-10">Dernières sorties</h1>
      <div className="mt-4 z-10">
        <ButtonCover />
      </div>

      <h1 className="text-white text-xl mt-7 z-10">Artistes populaires</h1>
      <div className="mt-4 z-10">
        <ButtonArtist />
      </div>
      <BlackSquare />
    </div>
  );
};

export default DashboardPage;
