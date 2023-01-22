import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import typical from './img/typical.png';

export const Scene6TypicalDay: React.FC = () => {
	const frame = useCurrentFrame();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 175px;
		text-align: center;
	`;

	const dayOpacity = interpolate(frame, [90, 100], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const dayTranslate = interpolate(frame, [90, 100], [-30, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const slideTranslate = interpolate(frame, [540, 560], [0, -100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					gap: '70px',
					transform: `translateX(${slideTranslate}%)`,
				}}
			>
				<Title style={{paddingTop: '50px'}}>The Typical Office Work Day</Title>
				<img
					src={typical}
					style={{
						width: '90%',
						margin: '0 auto',
						border: '12px black solid',
						opacity: dayOpacity,
						transform: `translateY(${dayTranslate}px)`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
