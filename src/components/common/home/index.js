import React, { useEffect, useState } from 'react';
import Axios from '../../../axios';
import Select from 'react-select'

import CountryCard from '../../reusable-components/countryCard';

import './styles.scss';

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [filteredcountries, setFilteredCountries] = useState([]);

	const options = [
		{ value: 'Africa', label: 'Africa' },
		{ value: 'Americas', label: 'America' },
		{ value: 'Asia', label: 'Asia' },
		{ value: 'Europe', label: 'Europe' },
		{ value: 'Oceania', label: 'Oceania' }
	]
	// Changing react select styles using style object.
	const regionDDLStyles = {
		indicatorSeparator: styles => ({ ...styles, display: 'none' })
	}

	useEffect(() => {
		getCountries()
	}, []);

	// function for getting all countries.
	const getCountries = async () => {
		const result = await Axios.get('all');
		setCountries(result.data);
		setFilteredCountries(result.data);
	}

	// function for getting filtering countries based on user input value.
	const handleSearch = (e) => {
		const txt = e.target.value.toLowerCase();
		const searchedCountries = countries.filter(Country => Country.name.toLowerCase().includes(txt));
		searchedCountries.length !== 0 ?
			setFilteredCountries(searchedCountries) : setFilteredCountries(countries);
	}

	// function for getting countries based on region.
	const handleRegionSelection = async (selectedOption) => {
		const selectedRegion = selectedOption.value;
		const regionCountries = await Axios.get(`region/${selectedRegion}`);
		regionCountries.length !== 0 ? setFilteredCountries(regionCountries.data) : setFilteredCountries(countries)
	}

	return (
		<section>
			<section className="row g-0 country-encyclopedia__controls">
				<div className="col-12 col-md-6 py-1">
					<input type="text" className="form-control country-encyclopedia__search-box" onChange={event => handleSearch(event)} placeholder={`Search for a country...`} />
				</div>

				<div className="col-12 col-md-6 py-1 text-end">
					<Select
						className="basic-single"
						classNamePrefix="react-select"
						name="countriesRegion"
						placeholder="filter By Region"
						options={options}
						onChange={handleRegionSelection}
						styles={regionDDLStyles} />
				</div>
			</section>

			<section className="row">
				{filteredcountries.map((country) => (
					<div className="col-12 col-md-3" key={country.alpha2Code}>
						<CountryCard country={country}></CountryCard>
					</div>
				)
				)}
			</section>
		</section >
	);
}

export default Home;