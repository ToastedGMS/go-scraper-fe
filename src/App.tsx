import { useState } from 'react';
import Story from './features/article/Story';
import type StoryData from './features/article/types/StoryData';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (query: string): Promise<StoryData[]> => {
	const response = await fetch(`http://localhost:8080/search?query=${query}`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};

export default function App() {
	const [searchInput, setSearchInput] = useState('gatinhos');
	const [activeQuery, setActiveQuery] = useState('gatinhos');

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['stories', activeQuery],
		queryFn: () => fetchData(activeQuery),
	});

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		setActiveQuery(searchInput);
	};

	return (
		<div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<form
					onSubmit={handleSearch}
					className="mb-12 flex justify-center gap-4"
				>
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="Search stories..."
						className="w-full max-w-md rounded-lg border border-slate-200 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
					>
						Search
					</button>
				</form>

				{isLoading ? (
					<div className="flex h-64 items-center justify-center">
						<p className="text-lg font-medium text-slate-500 animate-pulse">
							Loading stories for "{activeQuery}"...
						</p>
					</div>
				) : isError ? (
					<div className="flex h-64 items-center justify-center text-center">
						<p className="text-lg font-medium text-red-500">
							Error:{' '}
							{error instanceof Error ? error.message : 'Failed to fetch'}
						</p>
					</div>
				) : (
					<div className="space-y-8">
						{data?.length === 0 ? (
							<p className="text-center text-slate-500">
								No results found for "{activeQuery}".
							</p>
						) : (
							data?.map((story, index) => (
								<Story
									key={index}
									headline={story.headline}
									article={story.article}
								/>
							))
						)}
					</div>
				)}
			</div>
		</div>
	);
}
