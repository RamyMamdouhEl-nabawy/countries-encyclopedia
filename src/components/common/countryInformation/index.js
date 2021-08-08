import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from '../../../axios';

import BackButton from '../../reusable-components/backButton';

import './styles.scss';

const CountryInformation = (props) => {
	const [sideBorders, setSideBorders] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null)
	const location = useLocation();
	const countryData = location.state.country;

	useEffect(() => {
		// Getting selected country information from route location.
		setSelectedCountry(countryData);
	}, [countryData])

	useEffect(() => {
		const countryBorders = async () => {
			const bordersNames = [];
			if (selectedCountry) {
				const borders = selectedCountry.borders;
				// Iterating over borders code to get border countries names.
				for (let index = 0; index < borders.length; index++) {
					const border = borders[index];
					// Calling countries borders API to get name.
					const sideBorder = await Axios.get(`alpha/${border}`);
					bordersNames.push(sideBorder.data.name)
				}
				setSideBorders(bordersNames);
			}
		};
		countryBorders()
	}, [selectedCountry])

	return (
		<div className="country-info">
			<div className="row my-4">
				<div className="col-12 text-start">
					<BackButton />
				</div>
			</div>

			<section className="col-12 row g-0">
				<div className="col-md-5 col-12">
					<img className="country-info__flag" src={selectedCountry && selectedCountry.flag} alt="country-name" />
				</div>
				<div className="col-md-7 col-12 country-info__details">
					<div className="my-3 my-md-5 ms-md-5">
						<h2 className="fw-bold">{selectedCountry && selectedCountry.name}</h2>

						<div className="country-info__sub-details row">
							<div className="col-12 col-md-6">
								<p>
									<span className="fw-bold">NativeName: </span> <span> {selectedCountry && selectedCountry.nativeName} </span>
								</p>
								<p>
									<span className="fw-bold">Population: </span> <span> {selectedCountry && selectedCountry.population} </span>
								</p>
								<p>
									<span className="fw-bold">Region: </span> <span> {selectedCountry && selectedCountry.region} </span>
								</p>
								<p>
									<span className="fw-bold">Sub Region: </span>	<span>	{selectedCountry && selectedCountry.subregion}	</span>
								</p>
								<p>
									<span className="fw-bold">Capital: </span> <span>	{selectedCountry && selectedCountry.capital} </span>
								</p>
							</div>
							<div className="col-12 col-md-6">
								<p>
									<span className="fw-bold">Top Level Domain: </span>
									{selectedCountry && selectedCountry.topLevelDomain && selectedCountry.topLevelDomain.map((domain, idx) => {
										return (
											< span key={idx} >
												{domain}
											</span>)
									})}
								</p>
								<p>
									<span className="fw-bold">Currencies: </span>
									{selectedCountry && selectedCountry.currencies && selectedCountry.currencies.map((currency, idx) => {
										return (
											<span key={idx}>
												{currency.name}
											</span>
										)
									})}
								</p>
								<p>
									<span className="fw-bold">Languages: </span>
									{selectedCountry && selectedCountry.languages && selectedCountry.languages.map((lang, idx) => {
										return (
											<span className="mx-1" key={idx}>
												{lang.name},
											</span>
										)
									})}
								</p>
							</div>

						</div>

						<div className="country-info__borders row my-2">
							<div className="col-12">
								<span className="me-2">
									Border Countries:
								</span>
								{sideBorders.length !== 0 ? sideBorders.map((border, index) => (
									<span key={index} className="badge text-dark country-info__border-badge mx-1">{border}</span>
								)) : <span className="alert-secondary text-center">No Borders Found</span>}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div >
	);
}

export default CountryInformation;