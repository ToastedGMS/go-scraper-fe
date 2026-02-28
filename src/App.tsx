import { useEffect, useState } from 'react';
import Story from './features/article/Story';
import type StoryData from './features/article/types/StoryData';

function App() {
	const [data, setData] = useState<StoryData[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'http://localhost:8080/search?query=epstein',
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
			setData(result);
		};

		fetchData();
	}, []);
	return (
		<>
			{data === null ? (
				<p>Loading...</p>
			) : (
				<div>
					{data.map((story, index) => (
						<Story
							key={index}
							headline={story.headline}
							article={story.article}
						/>
					))}
				</div>
			)}
		</>
	);
}

export default App;
