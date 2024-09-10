import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../Application/Page/Public/Home.page.tsx";
import {LayoutPublic} from "../Application/Layout/LayoutPublic.tsx";
import {RegisterPage} from "../Application/Page/Public/Register.page.tsx";
import {LayoutPrivate} from "../Application/Layout/LayoutPrivate.tsx";
import {DashboardPage} from "../Application/Page/Private/Dashboard.page.tsx";
import {LibraryPage} from "../Application/Page/Private/Library.page.tsx";



export const browserRouter = createBrowserRouter([
    // partie public
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "register",
                element: <RegisterPage />
            }
        ]
    },
    
    // partie private
    {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: "library",
                element: <LibraryPage />
            },
        
            
]
    }
])
