import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

// Back button component for navigating back in browser.
const BackButton = (props) => {
	let history = useHistory();

	return (
		<button className="text-start back-btn" onClick={() => { history.goBack() }}>
			<FontAwesomeIcon icon={faLongArrowAltLeft} />
			<span className="ms-2">
				Back
			</span>
		</button>
	);
}

export default BackButton;