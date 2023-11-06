import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Styles
import './style.css'
import './contactUs.css'
import './playMsuic.css'
import './search.css'
import './burgerMenu.css'
import './searchshow.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    )
    

