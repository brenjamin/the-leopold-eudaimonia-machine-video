import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import styled from 'styled-components';
import design from './img/design.svg';

export const Scene13Questions: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const slowSpin = interpolate(frame, [0, 180], [0, 360]);
	const fastSpin = interpolate(frame, [0, 90], [0, 360]);
	const reverseSpin = interpolate(frame, [0, 45], [0, -360]);

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 80px;
		text-align: center;
	`;

	const slideOut = interpolate(frame, [260, 290], [0, -100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const question1Translate = interpolate(frame, [20, 30], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const question1Opacity = interpolate(frame, [20, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const question2Translate = interpolate(frame, [95, 105], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const question2Opacity = interpolate(frame, [95, 105], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill style={{transform: `translateX(${slideOut}%)`}}>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--yellow)',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '20px',
							flexDirection: 'column',
							opacity: question1Opacity,
							transform: `translateY(${question1Translate}px)`,
						}}
					>
						<AltTitle
							style={{
								width: '80%',
							}}
						>
							<span style={{fontSize: '100px'}}>💼</span>
							<br />
							Would you have enjoyed going to work at the Leopold?
						</AltTitle>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
							gap: '20px',
							opacity: question2Opacity,
							transform: `translateY(${question2Translate}px)`,
						}}
					>
						<AltTitle
							style={{
								width: '80%',
							}}
						>
							<span style={{fontSize: '100px'}}>🏢</span>
							<br />
							Could modern offices benefit from a more intentional design?
						</AltTitle>
					</div>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
