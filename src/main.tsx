import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider theme={theme} >
          <App />
      </MantineProvider>
  </React.StrictMode>,
)
