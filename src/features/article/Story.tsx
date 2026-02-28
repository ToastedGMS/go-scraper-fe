import Article from './Article';
import type StoryData from './types/StoryData';

export default function Story(prop: StoryData) {
	return (
		<>
			<div>
				<h2>{prop.headline}</h2>
				<div>
					{prop.article &&
						prop.article.length > 0 &&
						prop.article.map((element, index) => {
							return <Article key={index} {...element} />;
						})}
				</div>
			</div>
		</>
	);
}
