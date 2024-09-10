import React from "react";
import { NavLink } from "@mantine/core";
import { FaUserFriends } from "react-icons/fa";

export const ActivityNavLink: React.FC = () => {
  return (
    <NavLink
      leftSection={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #000000', // Bordure autour de l'icône
            backgroundColor: '#ffffff', // Fond du cercle
            marginRight: '10px' // Espacement entre l'icône et le texte
          }}
        >
          < FaUserFriends size={30} />
        </div>
      } // Icône avec bordure
      href={"/activités"} // Lien vers la page de notifications
      w={"fit-content"} // Largeur ajustée au contenu
      mt="xs" // Marge au-dessus
      style={{ 
        borderRadius: '8px', // Arrondi des coins
        padding: '8px', // Espacement interne
        textDecoration: 'none', // Supprimer la décoration par défaut du lien
        display: 'flex',
        alignItems: 'center'
      }}
    />
  );
};

export { FaUserFriends };

