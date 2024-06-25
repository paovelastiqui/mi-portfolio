import { useState } from 'react';
import { Project } from "./Project"

export const Projects = () => {

	const [items, setItems] = useState([
		{
			id: 1,
			titulo: "ANALIA PEREYRA",
			subtitulo: "Landing Page",
			tecnologias: "HTML - SASS",
			// tecno1: "HTML",
			// tecno4: "SASS",
			portada: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/project-analia-pereyra.PNG?alt=media&token=9f287672-8903-485f-a1eb-e3743fcfbad6",
			codigo: "https://github.com/paovelastiqui/analia-pereyra",
			deploy: "https://paovelastiqui.github.io/analia-pereyra/",
			descripcion: "Proyecto realizado durante el curso de Desarrollo Web de Coderhouse, en el cual se utilizó HTML, CSS y SASS. Se trata de una landing page para una persona profesional en la rama de la psicopedagogía, donde puede mostrar la rama en la cual se desarrolla y los tratamientos que ofrece. Además cuenta con una sección con material descargable de libre acceso."
		},
		{
			id: 2,
			titulo: "FUNKOSHOP",
			subtitulo: "E-Commerce",
			tecnologias:"HTML - CSS - JavaScript",
			// tecno1: "HTML",
			// tecno2: "CSS",
			// tecno3: "JavaScript",
			portada: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/project-funkoshop.PNG?alt=media&token=5431ff76-bce6-4658-8501-566ad3f034d2",
			codigo: "https://github.com/paovelastiqui/funkoshop",
			deploy: "https://paovelastiqui.github.io/funkoshop/",
			descripcion: "La presente página es una e-commerce de muñecos Funko desarrollada a modo de proyecto final dentro del curso Full Stack con orientación en Node JS del Programa Codo a Codo 4.0."
		},
		{
			id: 3,
			titulo: "WORLD TRAVEL",
			subtitulo: "Landing Page",
			tecnologias:"HTML - Tailwind",
			// tecno1: "HTML",
			// tecno5: "Tailwind",
			portada: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/project-world-travel.PNG?alt=media&token=e3293eee-b147-4618-94c8-e2f21fc0df4a",
			codigo: "https://github.com/paovelastiqui/world-travel",
			deploy: "https://paovelastiqui.github.io/world-travel/public/",
			descripcion: "WorldTravel es una página para una agencia de viajes. Es un diseño completamente responsivo que cuanta con dos modos, modo claro y modo oscuro."
		},
		{
			id: 4,
			titulo: "DECO HOME",
			subtitulo: "E-Commerce",
			tecnologias:"HTML - Tailwind - React JS",
			// tecno1: "HTML",
			// tecno5: "Tailwind",
			// tecno6: "React JS",
			portada: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/project-deco-home.PNG?alt=media&token=d650e602-5c17-482a-9c34-738eb68b7e77",
			codigo: "https://github.com/paovelastiqui/deco-home",
			deploy: "https://deco-home-velastiqui.vercel.app/",
			descripcion: "DecoHome es un E-commerce de productos para la decoración de interiores del hogar. Proyecto realizado para el curso de React Js en Coderhouse."
		},
		{
			id: 5,
			titulo: "BLOCKFLIX",
			subtitulo: "E-Commerce",
			tecnologias:"HTML - CSS - React JS",
			// tecno1: "HTML",
			// tecno2: "CSS",
			// tecno6: "React JS",
			portada: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/project-blockflix.PNG?alt=media&token=2fe581eb-359c-40ed-8f65-add6570809bf",
			codigo: "https://github.com/paovelastiqui/Blockflix",
			deploy: "https://blockflix.vercel.app/",
			descripcion: "Proyecto creado durante el curso de React Js de Codo a Codo 4.0, donde elaboramos una e-commerce de alquiler de películas."
		},
		{
			id: 6,
			titulo: "BY EVA MAKE UP",
			subtitulo: "Landing Page",
			tecnologias:"HTML - SASS",
			// tecno1: "HTML",
			// tecno4: "SASS",
			portada: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/project-byevamakeup.PNG?alt=media&token=a484aa1f-d03f-4763-b187-7490cdfc30ec",
			codigo: "https://github.com/paovelastiqui/byEvaMakeUp",
			deploy: "https://paovelastiqui.github.io/byEvaMakeUp/",
			descripcion: "loren ipsum"
		}
	]);

	return (
		<section className="projects" id="projects">
			<div className="projects__title">
				<h1>PROYECTOS<span className="point">.</span></h1>    
			</div>
			<div className="projects__container">
				{items.map((item) => {
					return <Project 
						key={item.id}
						titulo={item.titulo} 
						subtitulo={item.subtitulo}
						tecnologias={item.tecnologias}
						// tecno1={item.tecno1}
						// tecno2={item.tecno2} 
						// tecno3={item.tecno3} 
						// tecno4={item.tecno4} 
						// tecno5={item.tecno5} 
						// tecno6={item.tecno6} 
						portada={item.portada} 
						codigo={item.codigo} 
						deploy={item.deploy}
						descripcion={item.descripcion} />
				})}	
			</div>
		</section>
	)
}