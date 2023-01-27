import {Sequence} from 'remotion';
import {Narration} from './Narration';
import {Scene1Intro} from './Scene1Intro';
import {Scene2Office} from './Scene2Office';
import {Scene3DeepWork} from './Scene3DeepWork';
import {Scene4TheLeopold} from './Scene4TheLeopold';
import {Scene5Changes} from './Scene5Changes';
import {Scene6TypicalDay} from './Scene6TypicalDay';
import {Scene7LeopoldDay} from './Scene7LeopoldDay';
import {Scene8Diagrams} from './Scene8Diagrams';
import {Scene9Effacement} from './Scene9Effacement';
import {Scene10ThresholdDiagram} from './Scene10ThresholdDiagram';
import {Scene11KeyofDeepWork} from './Scene11KeyofDeepWork';
import {Scene12LeopoldOutro} from './Scene12TheLeopoldOutro';
import {Scene13Questions} from './Scene13Questions';
import {Scene14Outro} from './Scene14Outro';
import {OutroMusic} from './OutroMusic';

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
			<Sequence from={1180} durationInFrames={1740}>
				<Scene5Changes />
			</Sequence>
			<Sequence from={2920} durationInFrames={560}>
				<Scene6TypicalDay />
			</Sequence>
			<Sequence from={3460} durationInFrames={1000}>
				<Scene7LeopoldDay />
			</Sequence>
			<Sequence from={4460} durationInFrames={1880}>
				<Scene8Diagrams />
			</Sequence>
			<Sequence from={6340} durationInFrames={470}>
				<Scene9Effacement />
			</Sequence>
			<Sequence from={6810} durationInFrames={1160}>
				<Scene10ThresholdDiagram />
			</Sequence>
			<Sequence from={7970} durationInFrames={650}>
				<Scene11KeyofDeepWork />
			</Sequence>
			<Sequence from={8600} durationInFrames={2000}>
				<OutroMusic />
			</Sequence>
			<Sequence from={8600} durationInFrames={815}>
				<Scene12LeopoldOutro />
			</Sequence>
			<Sequence from={9415} durationInFrames={290}>
				<Scene13Questions />
			</Sequence>
			<Sequence from={9675} durationInFrames={925}>
				<Scene14Outro />
			</Sequence>
		</>
	);
};
