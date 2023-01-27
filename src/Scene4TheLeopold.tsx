import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import leopold from './img/aldo-leopold.png';
import leopoldLand from './img/leopold.png';

export const Scene4TheLeopold: React.FC = () => {
	const frame = useCurrentFrame();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const opacity1 = interpolate(frame, [55, 56], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [60, 61], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const leopoldSlide = interpolate(frame, [120, 130], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const landOpacity = interpolate(frame, [200, 220], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						top: '40px',
					}}
				>
					<Title
						style={{
							position: 'absolute',
							top: '25px',
							transform: 'translateX(-50%)',
							fontSize: '250px',
							left: '50%',
							width: '100%',
							letterSpacing: '.01em',
						}}
					>
						<span style={{opacity: opacity1}}>The</span>{' '}
						<span style={{opacity: opacity2}}>Leopold</span>
					</Title>
				</div>
				<img
					src={leopold}
					style={{
						width: '700px',
						position: 'absolute',
						bottom: 0,
						right: 0,
						transform: `translateX(${leopoldSlide}%)`,
					}}
				/>
				<img
					src={leopoldLand}
					style={{
						position: 'relative',
						zIndex: '10',
						opacity: landOpacity,
						transform: 'translateY(-25px)',
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
