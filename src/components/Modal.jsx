import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const Modal = () => {
	return (
		<div className="open">
            <div className="modal">
                <div className="modal__close"><FontAwesomeIcon icon={faCircleXmark} /></div>
                <div className="modal__info">
                    <div className="modal__info__video">VIDEO</div>
                    <div className="modal__info__data">
                        <h2>TITULO</h2>
                        <p>SUBTITULO</p>
                        <p>DESCRIPCION</p>
                        <div className="code">
                            <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} />Código</a>
                            <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Deploy</a>   
                        </div>
                    </div>
                </div>    
            </div>
		</div>
	)
}