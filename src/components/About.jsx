import Check from '../assets/icons/check.png';

export const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__body">
				<div className="about__body__text">
					<h1>SOBRE MI</h1>
					<h2>¡Hola! Soy Paola Velastiqui 👋</h2>
					<p>Soy estudiante de programación en C.F.P. Nº 36 y desarrolladora web que cuenta con conocimientos en HTML, CSS, JavaScript, Bootstrap, SASS, Tailwind, React JS, GIT, GitHub, Express y Node JS.</p>
					<p>Durante 10 años me desarrolle en el área de Ingeniería Civil y actualmente busco seguir introduciendome en el mundo It y poder continuar capacitandome y perfeccionandome como desarrolladora front-end.</p>
					<p>Soy muy buena trabajando en equipo dado que durante años trabajé en una área donde el trabajo en equipo era fundamental. Además, cuento con buena comunicación y rápida adaptación al entorno.</p>
					<button><a className="about-cv" href="downloads/CV Velastiqui Paola.pdf">Descargar CV</a></button>
				</div>
				<div className="about__body__certifications">
					<div className="table">
						<h1>CERTIFICACIONES</h1>
						<div className="table__row">
							<div className="table__row__data">
								<div className="data"><p>2024</p></div>
								<div className="image"><img src="img/institutos/coderhouse.png" alt="coderhouse" /></div>
							</div>
							<div className="table__row__description">
								<div className="certificado"><p>REACT JS</p></div>
								<div className="instituto"><p>CODERHOUSE</p></div>          
							</div>
						</div> 
						<div className="table__row">
							<div className="table__row__data">
								<div className="data"><p>2023</p></div>
								<div className="image"><img src="img/institutos/codo.png" alt="codo a codo" /></div>
							</div>
							<div className="table__row__description">
								<div className="certificado"><p>FULL STACK - Node JS</p></div>
								<div className="instituto"><p>CODO A CODO 4.0</p></div>
							</div>
						</div>                 
						<div className="table__row">
							<div className="table__row__data">
								<div className="data"><p>2023</p></div>
								<div className="image"><img src="img/institutos/coderhouse.png" alt="coderhouse" /></div>
							</div>
							<div className="table__row__description">
								<div className="certificado"><p>DESARROLLO WEB <a href="downloads/Desarrollo.png"><img src={Check} alt="Certificado" /></a></p></div>
								<div className="instituto"><p>CODERHOUSE</p></div>
							</div>
						</div> 
						<div className="table__row">
							<div className="table__row__data">
								<div className="data"><p>2023</p></div>
								<div className="image"><img src="img/institutos/todocode.png" alt="todocode" /></div>
							</div>
							<div className="table__row__description">
								<div className="certificado"><p>GIT Y GITHUB <a href="downloads/git-github.png"><img src={Check} alt="Certificado" /></a></p></div>
								<div className="instituto"><p>TODOCODE</p></div>
							</div>
						</div>         
						<div className="table__row">
							<div className="table__row__data">
								<div className="data"><p>2023</p></div>
								<div className="image"><img src="img/institutos/todocode.png" alt="todocode" /></div>
							</div>
							<div className="table__row__description">
								<div className="certificado"><p>INTROD. A LA PROGRAMACIÓN <a href="downloads/programacion.png"><img src={Check} alt="Certificado" /></a></p></div>
								<div className="instituto"><p>TODOCODE</p></div>
							</div>
						</div> 
						<div className="table__row">
							<div className="table__row__data">
								<div className="data"><p>2023</p></div>
								<div className="image"><img src="img/institutos/ba.PNG" alt="ba multiplica" /></div>
							</div>
							<div className="table__row__description">
								<div className="certificado"><p>DISEÑO DIGITAL <a href="downloads/Diseño.pdf"><img src={Check} alt="Certificado" /></a></p></div>
								<div className="instituto"><p>BA MULTIPLICA 2.0</p></div>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</section>
	)
}