import { useHistory } from 'react-router-dom';
import './styles.scss';

const CountryCard = (props) => {
	const history = useHistory();
	const { country } = props;

	const handleClick = (country) => {
		//passing country object to details page. 
		history.push(`/country-details/`, { country })
	}

	return (
		<div>
			<div className="card my-3 country-card" onClick={() => handleClick(country)}>
				<img src={country.flag} className="country-card__img card-img-top" alt={country.name} />
				<div className="card-body text-start">
					<h5 className="card-title">{country.name}</h5>
					<div className="card-text">Population: {country.population}</div>
					<div className="card-text">Region: {country.region}</div>
					<div className="card-text">Capital: {country.capital}</div>
				</div>
			</div>
		</div>
	);
}

export default CountryCard;
