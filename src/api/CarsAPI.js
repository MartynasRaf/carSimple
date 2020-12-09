import axios from 'axios';

export default axios.create({
	baseURL: 'https://hacker-news.firebaseio.com/v0', // TODO: Change URL to our cloud
});

/*
USAGE (NOT SPECIFIC FOR THIS PROJECT!!!!!!):

	const [storiesIds] = useHNApi('newstories', [], 100);

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
