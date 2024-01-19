import {NavItem, NavLink} from "reactstrap";
import { Link } from 'react-router-dom';

const AdminNavMenu = () => {
    return (<>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/admin">
                Gegevens
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} className="text-light" to="/chatIndex">
                Chat
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} id='signOut' className="text-light"  to="/" onClick={this.uitloggen}>
                Logout
            </NavLink>
        </NavItem>
    </>)
}

export default AdminNavMenu;