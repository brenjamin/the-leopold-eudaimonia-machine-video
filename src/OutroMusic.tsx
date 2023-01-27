import {
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useVideoConfig,
} from 'remotion';
export const OutroMusic: React.FC = () => {
	const {fps} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Audio
				volume={(f) =>
					interpolate(
						f,
						[0, fps * 36, fps * 36.1, fps * 61, fps * 66],
						[0.1, 0.1, 0.5, 0.5, 0],
						{extrapolateLeft: 'clamp'}
					)
				}
				loop
				src={staticFile('outro.mp3')}
			/>
			;
		</AbsoluteFill>
	);
};
