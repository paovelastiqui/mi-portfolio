export const Projects = () => {
	return (
		<section className="projects" id="projects">
			<div className="projects__title">
				<h1>PROYECTOS</h1>    
			</div>
			<div className="projects__container">
				<div className="item">
					<h2>ANALIA PEREYRA</h2>
					<p>Landing page</p>
					<div className="item__btn">
						<button className="btn-red">HTML</button>
						<button className="btn-pink">SASS</button>
					</div>
					<img src="img/projects/analia-pereyra.PNG" alt="analia-pereyra" />
					<div className="item__code">
						<button><a href="https://github.com/paovelastiqui/analia-pereyra" target="_blank" rel="noopener noreferrer">Código</a></button>
						<button><a href="https://paovelastiqui.github.io/analia-pereyra/" target="_blank" rel="noopener noreferrer">Deploy</a></button>
					</div>
				</div>
				<div className="item">
					<h2>FUNKOSHOP</h2>
					<p>E-commerce</p>
					<div className="item__btn">
						<button className="btn-red">HTML</button>
						<button className="btn-blue">CSS</button>
						<button className="btn-yellow">JavaScript</button>
					</div>
					<img src="img/projects/funkoshop.PNG" alt="funkoshop" />
					<div className="item__code">
						<button><a href="https://github.com/paovelastiqui/funkoshop" target="_blank" rel="noopener noreferrer">Código</a></button>
						<button><a href="https://paovelastiqui.github.io/funkoshop/" target="_blank" rel="noopener noreferrer">Deploy</a></button>
					</div>
				</div> 
				<div className="item">
					<h2>WORLD TRAVEL</h2>
					<p>Landing page</p>
					<div className="item__btn">
						<button className="btn-red">HTML</button>
						<button className="btn-green">Tailwind</button>
					</div>
					<img src="img/projects/world-travel.PNG" alt="world travel" />
					<div className="item__code">
						<button><a href="https://github.com/paovelastiqui/world-travel" target="_blank" rel="noopener noreferrer">Código</a></button>
						<button><a href="https://paovelastiqui.github.io/world-travel/public/" target="_blank" rel="noopener noreferrer">Deploy</a></button>
					</div>
				</div>
				<div className="item">
					<h2>DECO HOME</h2>
					<p>E-commerce</p>
					<div className="item__btn">
						<button className="btn-red">HTML</button>
						<button className="btn-green">Tailwind</button>
						<button className="btn-violet">React JS</button>
					</div>
					<img src="img/projects/deco-home.PNG" alt="deco-home" />
					<div className="item__code">
						<button><a href="https://github.com/paovelastiqui/deco-home" target="_blank" rel="noopener noreferrer">Código</a></button>
						<button><a href="https://deco-home-velastiqui.vercel.app/" target="_blank" rel="noopener noreferrer">Deploy</a></button>
					</div>
				</div>
			</div>
    </section>
	)
}