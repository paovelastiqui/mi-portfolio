import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Email from '../assets/icons/email.svg'

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
				<a href="https://www.linkedin.com/in/paovelastiqui/">
					<button className="corner-button">
						<span><img src={Linkedin} alt="" />LinkedIn</span>
					</button>
				</a>
				<a href="https://github.com/paovelastiqui">
					<button className="corner-button">
						<span><img src={Github} alt="" />GitHub</span>
					</button>
				</a>
				<a href="#home">
					<button className="corner-button">
						<span><img src={Email} alt="" />Email</span>
					</button>
				</a>
			</div>
		</div>
	)
}