import { NavLink } from 'react-router-dom';
import './styles.css';
import { ReactComponent as BookIcon } from 'assets/images/books-stack-of-three-svgrepo-com.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="menu-icon">
                    <BookIcon className="bookicon" />
                    <NavLink to="/">
                        <h1>Biblioteca</h1>
                    </NavLink>

                </div>
                <div className="main-menu-container">
                    <ul className="navbar-nav main-menu">
                        <li><NavLink to="/">Cadastrar</NavLink></li>
                        <li><NavLink to="/catalogo">Catálogo</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;