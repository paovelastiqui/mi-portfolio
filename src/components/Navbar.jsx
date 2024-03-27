import Home from '../assets/icons/home.svg';
import User from '../assets/icons/user.svg';
import Folder from '../assets/icons/folder.svg';

export const Navbar = () => {
	return (
		<nav className="menu">
            <div className="menu__container">
                <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                <label className="menu-open-button" htmlFor="menu-open">
                    <span className="hamburger hamburger-1" />
                    <span className="hamburger hamburger-2" />
                    <span className="hamburger hamburger-3" />
                </label>
                <a href="#home" className="menu-item"><img src={Home} alt="" /></a>
                <a href="#about" className="menu-item"><img src={User} alt="" /></a>
                <a href="#projects" className="menu-item"><img src={Folder} alt="" /></a>
                {/* <a href="#contact" className="menu-item"><i className="ti ti-mail" /></a> */}
            </div>
        </nav>
	)
}