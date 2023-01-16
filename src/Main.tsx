import {Sequence} from 'remotion';
import {Narration} from './Narration';
import {Scene1Intro} from './Scene1Intro';
import {Scene2Office} from './Scene2Office';
import {Scene3DeepWork} from './Scene3DeepWork';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={6930}>
				<Narration />
			</Sequence>
			<Sequence from={0} durationInFrames={400}>
				<Scene1Intro />
			</Sequence>
			<Sequence from={400} durationInFrames={420}>
				<Scene2Office />
			</Sequence>
			<Sequence from={820} durationInFrames={420}>
				<Scene3DeepWork />
			</Sequence>
		</>
	);
};
