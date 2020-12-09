import { useState, useEffect } from 'react';
import CarsAPI from '../api/CarsAPI';

export default (directory, variablesArray, carsToLoad) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			// Getting top stories
			try {
				const response = await CarsApi.get(`/${directory}`);
				setData(response.data);
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		getData();
	}, [...variablesArray]);

	return [data.slice(0, carsToLoad)];
};
