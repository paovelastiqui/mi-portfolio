import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// import { useState } from "react";
// import { MagicCard } from "react-magic-motion";
// import "react-magic-motion/card.css";


export const Project = (props) => {

	const [isOpen, setIsOpen] = useState(false);

    // let ocultarButton = document.querySelectorAll('.btn');
    // ocultarButton.forEach(function(element) {
    //     if (element.textContent === '') {
    //         element.style.display = 'none';
    //     }
    // })

	return (		
		// <div className="item">
		// 	<h2>{props.titulo}</h2>
		// 	<h3>{props.subtitulo}</h3>
		// 	<p className="btn">{props.tecnologias}</p>
		// 	<img src={props.portada} alt={props.titulo} />
		// 	<div className="item__code">
		// 		<a href={props.codigo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} />Código</a>
		// 		<a href={props.deploy} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Deploy</a>
		// 	</div>
		// </div>

		<motion.div className="item" 
			Layout 
			transition={{ layout: {duration: 1, type: "spring" }}}
			onClick={() => setIsOpen(!isOpen)}>
			<motion.h2 Layout="position">{props.titulo}</motion.h2>
			<motion.h3>{props.subtitulo}</motion.h3>
			<motion.p className="btn">{props.tecnologias}</motion.p>
			<motion.img src={props.portada} alt={props.titulo} />
			{isOpen && (
				<motion.p className="item__descrip">{props.descripcion}</motion.p>	
			)}
			<motion.div className="item__code">
				<a href={props.codigo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} />Código</a>
				<a href={props.deploy} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Deploy</a>
			</motion.div>
		</motion.div>
	)
}