import React from "react";

export const ButtonPrimary: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <button
                className="bg-black text-white font-extrabold py-2 px-10 rounded-full font-raleway"
            >
                {children}
            </button>
        </>
    )
}
