import {Composition, Still} from 'remotion';
import {Narration} from './Narration';
import {Main} from './Main';
import {Scene1Intro} from './Scene1Intro';
import {Thumbnail} from './Thumbnail';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Narration"
				component={Narration}
				durationInFrames={10260}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Scene1Intro"
				component={Scene1Intro}
				durationInFrames={350}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={10600}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Still id="Thumbnail" component={Thumbnail} width={1920} height={1080} />
		</>
	);
};
