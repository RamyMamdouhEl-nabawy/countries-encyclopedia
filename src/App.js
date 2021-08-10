import { useState } from 'react';
import {
	BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import Home from './components/common/home';
import CountryInformation from './components/common/countryInformation';

import './App.scss';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	// dark mode switcher.
	const handleDarkMode = () => {
		darkMode === true ? setDarkMode(false) : setDarkMode(true);
	}

	return (
		<div className={`countries-container ${darkMode === true ? 'dark-mode' : ''}`}>
			<Router>
				<div className={`row py-4 g-0 countries-container__header ${darkMode === true ? 'country-header__dark-mode' : ''}`}>
					<div className="col-6 ps-2 ps-md-4">
						What in the world?
					</div>
					<div className="col-6 pe-2 pe-md-4 text-end">
						<div onClick={handleDarkMode} className="country-header__icon-color pointer">
							<FontAwesomeIcon icon={faMoon} className="me-2" />
							Dark Mode
						</div>
					</div>
				</div>

				<div className="container App">
					<Switch>
						<Route exact path="/countries-encyclopedia/">
							<Home />
						</Route>
						<Route exact path="/countries-encyclopedia/country-details">
							<CountryInformation />
						</Route>
					</Switch>
				</div>
			</Router>
		</div >
	);
}

export default App;
