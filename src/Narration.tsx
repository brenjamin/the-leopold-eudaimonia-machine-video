import {AbsoluteFill, staticFile, Audio} from 'remotion';
export const Narration: React.FC = () => {
	return (
		<AbsoluteFill>
			<Audio src={staticFile('the-leopold.wav')} />;
		</AbsoluteFill>
	);
};
