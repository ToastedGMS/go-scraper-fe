import Story from './features/article/Story';
import type StoryData from './features/article/types/StoryData';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (): Promise<StoryData[]> => {
	const response = await fetch('http://localhost:8080/search?query=epstein');
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};

export default function App() {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['stories'],
		queryFn: fetchData,
	});

	return (
		<div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{isLoading ? (
					<div className="flex h-64 items-center justify-center">
						<p className="text-lg font-medium text-slate-500 animate-pulse">
							Loading latest stories...
						</p>
					</div>
				) : isError ? (
					<div className="flex h-64 items-center justify-center">
						<p className="text-lg font-medium text-red-500">
							Error:{' '}
							{error instanceof Error ? error.message : 'Failed to fetch'}
						</p>
					</div>
				) : (
					<div className="space-y-8">
						{data?.map((story, index) => (
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
