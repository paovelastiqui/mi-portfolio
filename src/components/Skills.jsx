import { useState } from 'react';

export const Skills = () => {

	const [data, setData] = useState({
		HTML: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/html5.svg?alt=media&token=2c34feae-6cf5-48da-af8b-e81ef49e388b',
		CSS: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/css.svg?alt=media&token=03ca95d9-fc06-4d27-9313-9d2cfafb3eeb',
		JavaScript: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/javascript.svg?alt=media&token=3632bc8b-48bd-417a-aa93-72d0f0a38c45',
		TypeScript: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/typescript.svg?alt=media&token=7f94a762-8046-4a52-b0bf-92510c8dcd4b',
		Bootstrap: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/bootstrap.svg?alt=media&token=c6ceb7aa-c696-4423-9da1-8b70d5b8aa25',
		SASS: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/sass.svg?alt=media&token=dcd8016d-a78a-440b-85b4-8b1e97185330',
		Tailwind: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/tailwindcss.svg?alt=media&token=ad2556ff-77ba-4a1c-a7d8-c6486956c165',
		Git: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/git.svg?alt=media&token=65d45953-40d7-45a3-b7fd-5f97154185fb',
		GitHub: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/github.svg?alt=media&token=43eba374-6ae4-48ea-a6a4-faea508c77e7',
		React: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/react.svg?alt=media&token=a4cc31b9-d7b1-4c01-94ba-bb84db7a7a83',
		EJS: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/ejs.svg?alt=media&token=e79d3a8d-adfd-4951-a0b1-a93af6bda35a',
		MySQL: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/mysql.svg?alt=media&token=c81bd1f8-2714-4e82-be76-d194413b1366',
		NodeJS: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9212.appspot.com/o/nodejs.svg?alt=media&token=19db64f5-e02f-4de5-bafb-8308bcaa7bff'
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