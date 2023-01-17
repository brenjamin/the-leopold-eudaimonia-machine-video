import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	Sequence,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import leopoldPlanFull from './img/leopold-plan-full.png';
import porch from './img/porch.jpg';

export const Scene5Changes: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const imageScale = interpolate(frame, [200, 220], [1, 1.7], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const imageX = interpolate(frame, [200, 220], [0, 300], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const imageY = interpolate(frame, [200, 220], [0, 115], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacity1 = interpolate(frame, [238, 239], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [243, 244], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const porchOpacity = interpolate(frame, [260, 280], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const imageSlide = interpolate(frame, [260, 460], [width / 12, -width / 12]);

	const salonOpacity = interpolate(frame, [430, 450], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const salonScale = interpolate(
		frame,
		[430, 520, 540, 590, 610],
		[2.5, 2.5, 1.7, 1.7, 1.85],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const salonX = interpolate(
		frame,
		[430, 520, 540, 590, 610],
		[300, 300, 300, 300, -375],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const salonY = interpolate(
		frame,
		[430, 520, 540, 590, 610],
		[220, 220, 115, 115, 210],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// 2.5 300 220, 1.7 300 115, 1.85 -375 210

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--blue)',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div
					style={{width: '90%', overflow: 'hidden', border: '12px solid black'}}
				>
					<img
						src={leopoldPlanFull}
						style={{
							maxWidth: '100%',
							transform: `scale(${imageScale}) translate(${imageX}px, ${imageY}px)`,
						}}
					/>
					<Title
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-47%, 30%)',
							fontSize: '200px',
						}}
					>
						<span style={{opacity: opacity1}}>The</span>{' '}
						<span style={{opacity: opacity2}}>Porch</span>
					</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{opacity: porchOpacity}}>
				<AbsoluteFill
					style={{transform: `scale(1.25) translateX(${imageSlide}px)`}}
				>
					<img src={porch} style={{transform: 'translateY(-20%)'}} />
				</AbsoluteFill>
			</AbsoluteFill>
			<Sequence from={430}>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--blue)',
						alignItems: 'center',
						justifyContent: 'center',
						opacity: salonOpacity,
					}}
				>
					<div
						style={{
							width: '90%',
							overflow: 'hidden',
							border: '12px solid black',
						}}
					>
						<img
							src={leopoldPlanFull}
							style={{
								maxWidth: '100%',
								transform: `scale(${salonScale}) translate(${salonX}px,${salonY}px)`,
							}}
						/>
					</div>
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
