import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import office from './img/open-office.jpg';
import wfh from './img/wfh.jpg';

export const Scene2Office: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();

	const imageSlide = interpolate(frame, [0, 300], [width / 12, -width / 12]);

	const officeOpacity = interpolate(frame, [210, 230], [0, 1]);

	return (
		<>
			<AbsoluteFill
				style={{
					transform: `scale(1.25) translateX(${imageSlide}px)`,
				}}
			>
				<img src={wfh} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.25) translateX(${imageSlide}px)`,
					opacity: officeOpacity,
				}}
			>
				<img src={office} />
			</AbsoluteFill>
		</>
	);
};
