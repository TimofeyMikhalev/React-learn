import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import BIO from './BIO.jsx'
import Regestration from './Regestracia.jsx'

const root = createRoot(document.getElementById('root'))
const rootTwo = createRoot(document.getElementById('rootTwo'))
const rootThree = createRoot(document.getElementById('rootThree'))

// root.render(
//   <App />
// )

// rootTwo.render(
//   <BIO />
// )

rootThree.render(
  <Regestration />
)