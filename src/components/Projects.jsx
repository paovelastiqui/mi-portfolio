import { useState } from 'react';
import { Project } from "./Project"

export const Projects = () => {

	const [items, setItems] = useState([
		{
			id: 1,
			titulo: "ANALIA PEREYRA",
			subtitulo: "Landing Page",
			tecnologias:["HTML", "SASS"],
			tecno1: "HTML",
			tecno4: "SASS",
			portada: "../../public/img/projects/analia-pereyra.PNG",
			codigo: "https://github.com/paovelastiqui/analia-pereyra",
			deploy: "https://paovelastiqui.github.io/analia-pereyra/"
		},
		{
			id: 2,
			titulo: "FUNKOSHOP",
			subtitulo: "E-Commerce",
			tecnologias:["HTML", "CSS", "JavaScript"],
			tecno1: "HTML",
			tecno2: "CSS",
			tecno3: "JavaScript",
			portada: "../../public/img/projects/funkoshop.PNG",
			codigo: "https://github.com/paovelastiqui/funkoshop",
			deploy: "https://paovelastiqui.github.io/funkoshop/"
		},
		{
			id: 3,
			titulo: "WORLD TRAVEL",
			subtitulo: "Landing Page",
			tecnologias:["HTML", "Tailwind"],
			tecno1: "HTML",
			tecno5: "Tailwind",
			portada: "../../public/img/projects/world-travel.PNG",
			codigo: "https://github.com/paovelastiqui/world-travel",
			deploy: "https://paovelastiqui.github.io/world-travel/public/"
		},
		{
			id: 4,
			titulo: "DECO HOME",
			subtitulo: "E-Commerce",
			tecnologias:["HTML", "Tailwind", "React JS"],
			tecno1: "HTML",
			tecno5: "Tailwind",
			tecno6: "React JS",
			portada: "../../public/img/projects/deco-home.PNG",
			codigo: "https://github.com/paovelastiqui/deco-home",
			deploy: "https://deco-home-velastiqui.vercel.app/"
		},
		{
			id: 5,
			titulo: "BLOCKFLIX",
			subtitulo: "E-Commerce",
			tecnologias:["HTML", "CSS", "React JS"],
			tecno1: "HTML",
			tecno2: "CSS",
			tecno6: "React JS",
			portada: "../../public/img/projects/blockflix.PNG",
			codigo: "https://github.com/paovelastiqui/Blockflix",
			deploy: "https://blockflix.vercel.app/"
		},
		{
			id: 6,
			titulo: "BY EVA MAKE UPp",
			subtitulo: "Landing Page",
			tecnologias:["HTML", "SASS"],
			tecno1: "HTML",
			tecno4: "SASS",
			portada: "../../public/img/projects/byevamakeup.PNG",
			codigo: "https://github.com/paovelastiqui/byEvaMakeUp",
			deploy: "https://paovelastiqui.github.io/byEvaMakeUp/"
		}
	]);

	// let ocultarButton = document.querySelectorAll('.btn');
    // ocultarButton.forEach(function(element) {
    //     if (element.textContent === '') {
    //         element.style.display = 'none';
    //     }
    // })

	return (
		<section className="projects" id="projects">
			<div className="projects__title">
				<h1>PROYECTOS</h1>    
			</div>
			<div className="projects__container">
				{items.map((item) => {
					return <Project 
						key={item.id}
						titulo={item.titulo} 
						subtitulo={item.subtitulo}
						tecnologias={item.tecnologias}
						tecno1={item.tecno1}
						tecno2={item.tecno2} 
						tecno3={item.tecno3} 
						tecno4={item.tecno4} 
						tecno5={item.tecno5} 
						tecno6={item.tecno6} 
						portada={item.portada} 
						codigo={item.codigo} 
						deploy={item.deploy} />
				})}	
			</div>
		</section>
	)
}