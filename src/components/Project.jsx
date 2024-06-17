import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';


export const Project = (props) => {

    let ocultarButton = document.querySelectorAll('.btn');
    ocultarButton.forEach(function(element) {
        if (element.textContent === '') {
            element.style.display = 'none';
        }
    })

	// let coloresBtn = document.querySelectorAll('.btn');
	// coloresBtn.forEach(function(element) {
	//     if (element.textContent === 'HTML') {
	//     	element.style.background = $color-red;
	//     } else if (element.textContent === 'CSS') {
	//     	element.style.background = $color-blue;
	//     } else if (element.textContent === 'JavaScript') {
	//     	element.style.background = $color-green;
	//     } else {
	//     	element.style.display = 'none';
	//     } 
	// })

	return (		
		<div className="item">
			<h2>{props.titulo}</h2>
			<p>{props.subtitulo}</p>
			<div className="item__btn">
				{/* <button className="btn">{props.tecnologias}</button> */}
				<button className="btn btn-red">{props.tecno1}</button>
				<button className="btn btn-blue">{props.tecno2}</button>
                <button className="btn btn-green">{props.tecno3}</button>
				<button className="btn btn-pink">{props.tecno4}</button>
                <button className="btn btn-yellow">{props.tecno5}</button>
				<button className="btn btn-violet">{props.tecno6}</button>
			</div>
			<img src={props.portada} alt={props.titulo} />
			<div className="item__code">
				<a href={props.codigo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} />Código</a>
				<a href={props.deploy} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Deploy</a>
			</div>
		</div>
	)
}