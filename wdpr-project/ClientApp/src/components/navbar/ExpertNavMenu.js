import {NavItem, NavLink} from "reactstrap";
import { Link } from 'react-router-dom';

const uitloggen = () => {
    localStorage.removeItem("token");
    this.setState({
        toegang: localStorage.getItem("toegang"),
    });
    window.location.reload();
}

const ExpertNavMenu = () => {
    return (<>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/expert/onderzoek">
                Onderzoeken
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/chatIndex">
                Chat
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/expert/profile">
                Mijn gegevens
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} id='signOut' className="text-light"  to="/" onClick={uitloggen}>
                Logout
            </NavLink>
        </NavItem>
    </>)
}

export default ExpertNavMenu;