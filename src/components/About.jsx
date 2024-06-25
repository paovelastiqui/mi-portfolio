import { Certifications } from "./Certifications";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const About = () => {

	return (
		<section className="about" id="about">
			<div className="about__body">
				<div className="about__body__text">
					<h1>SOBRE MI<span className="point">.</span></h1>
					<h2>¡Hola! Soy Paola Velastiqui 👋</h2>
					<p>Soy estudiante de programación en C.F.P. Nº 36 (con orientación en Python) y desarrolladora web que cuenta con conocimientos en HTML, CSS, JavaScript, Bootstrap, SASS, Tailwind, React JS, GIT, GitHub, Express y Node JS.</p>
					<p>Soy muy buena trabajando en equipo. Además, cuento con buena comunicación y rápida adaptación al entorno.</p>
					<a href="https://drive.google.com/file/d/1C3BtnLpObe9CiPpodH1eqRaQ5vgNEh2V/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
						<button className="corner-button">
							<span>Descargar CV<FontAwesomeIcon icon={faDownload} /></span>
						</button>
					</a>
				</div>
				<div className="about__body__certifications">
					<div className="table">
						<h2>CERTIFICACIONES</h2>
						<Certifications/>
					</div>
				</div>
			</div>
		</section>
	)
}