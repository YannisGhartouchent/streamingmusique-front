import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../Application/Page/Public/Home.page.tsx";
import {LayoutPublic} from "../Application/Layout/LayoutPublic.tsx";
import {RegisterPage} from "../Application/Page/Public/Register.page.tsx";

export const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            }
        ]
    }
])
