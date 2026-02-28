import type CardData from './types/CardData';

export default function Article(prop: CardData) {
	return (
		<div onClick={() => window.open(`${prop.URL}`, '_blank')}>
			<p>{prop.Title}</p>
			<p>{prop.Date}</p>
			<p>{prop.Source}</p>
			<img src={prop.Img} alt={prop.Title} />
		</div>
	);
}
