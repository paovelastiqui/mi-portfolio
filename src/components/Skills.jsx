import { useState } from 'react';

export const Skills = () => {

	const [data, setData] = useState({
		HTML: '../../public/img/skills/html5.svg',
		CSS: '../../public/img/skills/css.svg',
		JavaScript: '../../public/img/skills/javascript.svg',
		TypeScript: '../../public/img/skills/typescript.svg',
		Bootstrap: '../../public/img/skills/bootstrap.svg',
		SASS: '../../public/img/skills/sass.svg',
		Tailwind: '../../public/img/skills/tailwindcss.svg',
		Git: '../../public/img/skills/git.svg',
		GitHub: '../../public/img/skills/github.svg',
		React: '../../public/img/skills/react.svg',
		EJS: '../../public/img/skills/ejs.svg',
		MySQL: '../../public/img/skills/mysql.svg',
		NodeJS: '../../public/img/skills/nodejs.svg'
	});

	return (
		<section className="skills">
			<div className="skills__title">
				<h1>SKILLS</h1>
			</div>

			<div className="skills__logos">
				<div className="skills__logos__slider">
					{Object.keys(data).map((title) => (
						<div className="skill" key={title}>
							<img src={data[title]} alt={title} />
							<p>{title}</p>
						</div>
					))}
				</div>
				<div className="skills__logos__slider">
					{Object.keys(data).map((title) => (
						<div className="skill" key={title}>
							<img src={data[title]} alt={title} />
							<p>{title}</p>
						</div>
					))}
				</div>
			</div>			
		</section>
	)
}