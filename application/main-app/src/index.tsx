import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import theme from './app/chakra_global/theme'
import { ColorModeScript } from '@chakra-ui/react'
import './app/chakra_global/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
