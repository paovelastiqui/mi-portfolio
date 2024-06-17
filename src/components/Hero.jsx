import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
	return (
		<div className="home" id="home">
			<div className="home__container">
				<div className="home__container__1col">
					<p><span className="span-4">CONST </span><span className="span-6">DEV </span><span className="span-3">= </span><span className="span-2">{'{'}</span></p>
				</div>
				<div className="home__container__2col">
					<div />
					<div>
					<p><span className="span-5">nombre: </span><span className="span-1">"Paola Velastiqui",</span></p>
					</div>
				</div>
				<div className="home__container__2col">
					<div />
					<div>
					<p><span className="span-5">tarea: </span><span className="span-1">"Front End Developer"</span></p>
					</div>
				</div>
				<div className="home__container__1col">
					<p><span className="span-2">{'}'}</span><span className="span-3">;</span></p>
				</div>
			</div>
			<div className="home__button">
				<a href="https://www.linkedin.com/in/paovelastiqui/" target="_blank" rel="noopener noreferrer">
					<button className="corner-button">
						<span><FontAwesomeIcon icon={faLinkedin} />LinkedIn</span>
					</button>
				</a>
				<a href="https://github.com/paovelastiqui" target="_blank" rel="noopener noreferrer">
					<button className="corner-button">
						<span><FontAwesomeIcon icon={faGithub} />GitHub</span> 
					</button>
				</a>
				<a href="#home" target="_blank" rel="noopener noreferrer">
					<button className="corner-button">
						<span><FontAwesomeIcon icon={faEnvelope} />Email</span>
					</button>
				</a>
			</div>
		</div>
	)
}