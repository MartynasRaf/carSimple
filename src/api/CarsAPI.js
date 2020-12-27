import axios from 'axios';

export default axios.create({
	baseURL: 'https://car-shopping-engine.azurewebsites.net',
});

/*
USAGE (NOT SPECIFIC FOR THIS PROJECT!!!!!!):

	const [storiesIds] = useCarApi('newstories', [], 100);

///////////////////////////////////

	useEffect(() => {
		const getStory = async () => {
			try {
				if (componentIsMounted) {
					const response = await news.get(`/item/${id.item}.json`);
					setStory(response.data);
				}
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		getStory();

		return () => {
			componentIsMounted.current = false;
		};
	}, []);


*/
