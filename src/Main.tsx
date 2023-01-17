import {Sequence} from 'remotion';
import {Narration} from './Narration';
import {Scene1Intro} from './Scene1Intro';
import {Scene2Office} from './Scene2Office';
import {Scene3DeepWork} from './Scene3DeepWork';
import {Scene4TheLeopold} from './Scene4TheLeopold';
import {Scene5Changes} from './Scene5Changes';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={10260}>
				<Narration />
			</Sequence>
			<Sequence from={0} durationInFrames={350}>
				<Scene1Intro />
			</Sequence>
			<Sequence from={340} durationInFrames={220}>
				<Scene2Office />
			</Sequence>
			<Sequence from={560} durationInFrames={340}>
				<Scene3DeepWork />
			</Sequence>
			<Sequence from={900} durationInFrames={280}>
				<Scene4TheLeopold />
			</Sequence>
			<Sequence from={1180} durationInFrames={1000}>
				<Scene5Changes />
			</Sequence>
		</>
	);
};
