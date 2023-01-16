import {Composition} from 'remotion';
import {Narration} from './Narration';
import {Main} from './Main';
import {Scene1Intro} from './Scene1Intro';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Narration"
				component={Narration}
				durationInFrames={6930}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Scene1Intro"
				component={Scene1Intro}
				durationInFrames={6930}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={6930}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
