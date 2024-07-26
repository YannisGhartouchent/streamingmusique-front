import React from "react";

export const ButtonExterne: React.FC<{children: React.ReactNode}> = ({children}) => {
return (
 <>
            <button
                className="bg-stone-700 text-white font-extrabold py-2 px-10 rounded-full font-raleway ring ring-white"
            >
                {children}
            </button>
        </>

)

}
