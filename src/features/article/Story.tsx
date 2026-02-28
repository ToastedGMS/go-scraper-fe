import Article from './Article';
import type StoryData from './types/StoryData';

export default function Story(prop: StoryData) {
	return (
		<section className="mb-12">
			<h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900 border-l-4 border-blue-600 pl-4">
				{prop.headline}
			</h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{prop.article?.map((element, index) => (
					<Article key={index} {...element} />
				))}
			</div>
		</section>
	);
}
