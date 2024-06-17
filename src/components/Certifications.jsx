import { useState } from 'react';
import { Certificate } from "./Certificate";

export const Certifications = () => {

	const [certs, setCerts] = useState([
		{
			id: 1,
			año: 2023,
			logo: "../img/institutos/ba.PNG",
			titulo: "DISEÑO DIGITAL",
			instituto: "BA MULTIPLICA 2.0",
			certificado: "https://drive.google.com/file/d/1BRnfTrBmzXLBNX5-bB8ciFOWI5qDwcia/view?usp=drive_link"
		},
		{
			id: 2,
			año: 2023,
			logo: "../img/institutos/todocode.png",
			titulo: "TODOCODE",
			instituto: "INTROD. A LA PROGRAMACIÓN ",
			certificado: "https://drive.google.com/file/d/1UFPNLm7JW-osHTznCQrp26V7Zaw0GrJI/view?usp=drive_link"
		},
		{
			id: 3,
			año: 2023,
			logo: "../img/institutos/todocode.png",
			titulo: "TODOCODE",
			instituto: "GIT Y GITHUB",
			certificado: "https://drive.google.com/file/d/1xpbu-QnJFy7thiiEciBk149WOFTa0eP_/view?usp=drive_link"
		},
		{
			id: 4,
			año: 2023,
			logo: "../img/institutos/coderhouse.png",
			titulo: "CODERHOUSE",
			instituto: "DESARROLLO WEB",
			certificado: "https://drive.google.com/file/d/1JmiJm6upGDd9PTFfuUDoqK_JP1Or92Z-/view?usp=drive_link"
		},
		{
			id: 5,
			año: 2023,
			logo: "../img/institutos/codo.png",
			titulo: "FULL STACK - Node JS",
			instituto: "CODO A CODO 4.0",
			certificado: "https://drive.google.com/file/d/1vCUzq-4JSH-na2S74GSRjGlkQtBkQ8OE/view?usp=drive_link"
		},
		{
			id: 6,
			año: 2024,
			logo: "../img/institutos/coderhouse.png",
			titulo: "CODERHOUSE",
			instituto: "REACT JS",
			certificado: "https://drive.google.com/file/d/1SFr21TE64-9xIDcPm1MbgNuYtL72Hcbx/view?usp=drive_link"
		}
	]);

	return (			
			<div>
				{certs.map((cert) => {
					return <Certificate 
						key={cert.id}
						año={cert.año} 
						logo={cert.logo} 
						titulo={cert.titulo} 
						instituto={cert.instituto} 
						certificado={cert.certificado} />
				})}	
			</div>
	)
}