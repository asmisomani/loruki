import {NavLink} from 'react-router-dom'
function Nav(){
    return <nav>
        <h2>Loruki.</h2>
        <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/features" activeClassName="active">Features</NavLink></li>
            <li><NavLink to="/docs" activeClassName="active">Docs</NavLink></li>
        </ul>
    </nav>
}
export default Nav