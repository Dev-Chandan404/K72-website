import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavContext from './context/NavContext.jsx'
import Stairs from './components/common/Stairs.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavContext>
      <Stairs>
        <App />
      </Stairs>
    </NavContext>
  </BrowserRouter>
)