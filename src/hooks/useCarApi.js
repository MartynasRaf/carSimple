//Used only for GET request
import { useState, useEffect } from 'react';
import CarsAPI from '../api/CarsAPI';

export default (directory, variablesArray) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await CarsAPI.get(`/${directory}`, {
					auth: {
						username: 'Martynas',
						password: 'test', // Test login
					},
				});
				setData(response.data);
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		getData();
	}, [...variablesArray]);

	return [data];
};
