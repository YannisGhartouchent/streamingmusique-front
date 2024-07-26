import React from "react";

export const ButtonSecondaire: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <button
                className="bg-red-700 text-black font-extrabold py-2 px-10 rounded-full font-raleway">
            
                {children}
            </button>
        </>
    )
}
