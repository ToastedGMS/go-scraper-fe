import { useEffect, useState } from 'react';
import Story from './features/article/Story';
import type StoryData from './features/article/types/StoryData';

export default function App() {
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
		<div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{data === null ? (
					<div className="flex h-64 items-center justify-center">
						<p className="text-lg font-medium text-slate-500 animate-pulse">
							Loading latest stories...
						</p>
					</div>
				) : (
					<div className="space-y-8">
						{data.map((story, index) => (
							<Story
								key={index}
								headline={story.headline}
								article={story.article}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
