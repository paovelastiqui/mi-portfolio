import { useEffect, useState } from 'react';
import { setTheme } from '../utils/Themes';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export const Toggle = () => {

    //Toggle de modo oscuro
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="toggle"> 
            <div id="toggle" className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </div> 
            <div className="sun" data-isOn={isOn}>
                <FontAwesomeIcon icon={faSun} />    
            </div>
            
        </div>
    )
}

//const de motion
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};