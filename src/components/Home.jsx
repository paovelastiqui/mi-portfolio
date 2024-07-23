import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
	return (
		<div className="home" id="home">
			<div className="home__container">
				<div className="home__container__title">
					<p>PAOLA</p>
					<p>VELASTIQUI<span className="point">.</span></p>
					<span className="subtitle">Front End Developer</span>
				</div>
				<div className="home__container__button">
					<a href="https://www.linkedin.com/in/paovelastiqui/" target="_blank" rel="noopener noreferrer">
						<button className="corner-button">
							<span className="icon-text"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</span>
							<span className="icon"><FontAwesomeIcon icon={faLinkedin} /></span>
						</button>
					</a>
					<a href="https://github.com/paovelastiqui" target="_blank" rel="noopener noreferrer">
						<button className="corner-button">
							<span className="icon-text"><FontAwesomeIcon icon={faGithub} />GitHub</span>
							<span className="icon"><FontAwesomeIcon icon={faGithub} /></span> 
						</button>
					</a>
					<a href="mailto:paovelastiqui@gmail.com" target="_blank" rel="noopener noreferrer">
						<button className="corner-button">
							<span className="icon-text"><FontAwesomeIcon icon={faEnvelope} />Email</span>
							<span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
						</button>
					</a>
				</div>	
			</div>
			
		</div>
	)
}