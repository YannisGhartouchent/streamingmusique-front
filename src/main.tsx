import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createTheme, MantineProvider} from "@mantine/core";
import {RouterProvider} from "react-router-dom";
import {browserRouter} from "./Infrastructure/Router.tsx";

const theme = createTheme({
    colors: {
        'dark': [
            "#0A0A0A",
            "#141414",
            "#1F1F1F",
            "#292929",
            "#333333",
            "#3D3D3D",
            "#474747",
            "#515151",
            "#5B5B5B",
            "#656565",
        ]
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider theme={theme} >
          <RouterProvider router={browserRouter} />
      </MantineProvider>
  </React.StrictMode>,
)
