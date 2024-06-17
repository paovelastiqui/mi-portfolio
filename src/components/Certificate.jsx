import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Certificate = (props) => {

	return (
		<a className="table__row" href={props.certificado} target="_blank" rel="noopener noreferrer">
			<div className="table__row__data">
				<div className="data"><p>{props.año}</p></div>
				<div className="image"><img src={props.logo} alt={props.instituto} /></div>
			</div>
			<div className="table__row__description">
				<div className="certificado"><p>{props.titulo}<FontAwesomeIcon icon={faDownload} /></p></div>
				<div className="instituto"><p>{props.instituto}</p></div>          
			</div>
		</a> 
	)
}