import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import leopoldPlanFull from './img/leopold-plan-full.png';
import leopoldDay from './img/leopold-day.png';
import leopoldConstruction from './img/leopold-construction.jpg';
import focus from './img/focus-diagram.png';
import circulation from './img/circulation-diagram.png';
import thresholds from './img/thresholds-diagram.png';

export const Scene12LeopoldOutro: React.FC = () => {
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

	const fullOpacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const slideProgress = interpolate(frame, [0, 400], [30, -61], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cancelOpacity = interpolate(frame, [410, 430], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const imageScale = interpolate(frame, [410, 430], [1, 1.3], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const imageY = interpolate(
		frame,
		[410, 430, 490, 560],
		[0, -80, -80, -1000],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const diagramsProgress = interpolate(frame, [490, 700], [140, -50], {
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					opacity: fullOpacity,
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
						opacity: cancelOpacity,
					}}
				>
					The Leopold
				</Title>
				<div
					style={{
						height: '100%',
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '200%',
						gap: '100px',
						transform: `translateX(${slideProgress}%) translateY(100px)`,
					}}
				>
					<div
						style={{
							border: '12px solid black',
							backgroundColor: 'white',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '650px',
							position: 'relative',
							padding: '20px 0',
							opacity: cancelOpacity,
						}}
					>
						<img
							src={leopoldPlanFull}
							style={{
								maxHeight: '100%',
							}}
						/>
					</div>
					<div
						style={{
							border: '12px solid black',
							backgroundColor: '#dd021c',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '650px',
							position: 'relative',
							padding: '20px 0',
							opacity: cancelOpacity,
						}}
					>
						<img
							src={leopoldDay}
							style={{
								maxHeight: '100%',
							}}
						/>
					</div>
					<div
						style={{
							border: '12px solid black',
							backgroundColor: '#dd021c',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '650px',
							position: 'relative',
							flexShrink: 0,
							transform: `scale(${imageScale}) translateY(${imageY}px)`,
						}}
					>
						<img
							src={leopoldConstruction}
							style={{
								maxHeight: '100%',
							}}
						/>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					opacity: fullOpacity,
					justifyContent: 'space-evenly',
					alignItems: 'center',
					transform: `translateY(${diagramsProgress}%)`,
					gap: '80px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<Title style={{fontSize: '160px'}}>Focus</Title>
					<div
						style={{
							border: '12px solid black',
							padding: '40px',
							backgroundColor: 'white',
							width: '90%',
						}}
					>
						<img src={focus} />
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<Title style={{fontSize: '160px'}}>Circulation</Title>
					<div
						style={{
							border: '12px solid black',
							padding: '40px',
							backgroundColor: 'white',
							width: '90%',
						}}
					>
						<img src={circulation} />
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<Title style={{fontSize: '160px'}}>Thresholds</Title>
					<div
						style={{
							border: '12px solid black',
							padding: '40px',
							backgroundColor: 'white',
							width: '90%',
						}}
					>
						<img src={thresholds} />
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
