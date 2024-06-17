
import { Certifications } from "./Certifications";

export const About = () => {

	return (
		<section className="about" id="about">
			<div className="about__body">
				<div className="about__body__text">
					<h1>SOBRE MI</h1>
					<h2>¡Hola! Soy Paola Velastiqui 👋</h2>
					<p>Soy estudiante de programación en C.F.P. Nº 36 (con orientación en Python) y desarrolladora web que cuenta con conocimientos en HTML, CSS, JavaScript, Bootstrap, SASS, Tailwind, React JS, GIT, GitHub, Express y Node JS.</p>
					<p>Soy muy buena trabajando en equipo. Además, cuento con buena comunicación y rápida adaptación al entorno.</p>
					<button><a className="about-cv" href="https://drive.google.com/file/d/1C3BtnLpObe9CiPpodH1eqRaQ5vgNEh2V/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Descargar CV</a></button>
				</div>
				<div className="about__body__certifications">
					<div className="table">
						<h1>CERTIFICACIONES</h1>
						<Certifications/>
					</div>
				</div>
			</div>
		</section>
	)
}