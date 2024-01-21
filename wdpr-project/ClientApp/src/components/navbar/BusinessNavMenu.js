import {NavItem, NavLink} from "reactstrap";
import { Link } from 'react-router-dom';

const BusinessNavMenu = () => {
    return (<>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/business/onderzoek">
                Onderzoeken
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/chatIndex">
                Chat
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/business/profile">
                Mijn gegevens
            </NavLink>
        </NavItem> 
        <NavItem>
            <NavLink tag={Link} id='signOut' className="text-light"  to="/" onClick={this.uitloggen}>
                Logout
            </NavLink>
        </NavItem>
    </>)
}

export default BusinessNavMenu;