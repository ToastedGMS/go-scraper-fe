import type CardData from './types/CardData';

export default function Article(prop: CardData) {
	return (
		<div
			onClick={() => window.open(`${prop.URL}`, '_blank')}
			className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg hover:-translate-y-1"
		>
			<div className="aspect-video w-full overflow-hidden bg-slate-100">
				<img
					src={prop.Img}
					alt={prop.Title}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<div className="p-4">
				<div className="flex items-center justify-between gap-2 mb-2">
					<span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
						{prop.Source}
					</span>
					<span className="text-xs text-slate-500">{prop.Date}</span>
				</div>
				<p className="font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600">
					{prop.Title}
				</p>
			</div>
		</div>
	);
}
