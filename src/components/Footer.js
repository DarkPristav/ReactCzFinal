import './Footer.css'
import { NavLink } from "react-router-dom"

const Footer = () => {
    return <div className='footer'>
        <NavLink to="/"><p className='footer__p'>PETYUSYA</p></NavLink>
    </div>
}

export default Footer