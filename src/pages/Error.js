import { NavLink } from "react-router-dom"
import './Error.css'

const Error = () => {
  return <section className="error">
        <h2>404</h2>
        <p className="error__p">Stránka nenalezena</p>
        <NavLink to="/"><p className="error__link">Zpět na úvodní stranu</p></NavLink>
    </section>
}

export default Error