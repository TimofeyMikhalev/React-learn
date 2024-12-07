import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import BIO from './BIO.jsx'

const root = createRoot(document.getElementById('root'))
const rootTwo = createRoot(document.getElementById('rootTwo'))

// root.render(
//   <App />
// )

rootTwo.render(
  <BIO />
)
