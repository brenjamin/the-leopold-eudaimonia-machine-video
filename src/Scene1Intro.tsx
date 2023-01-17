import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	Sequence,
	staticFile,
} from 'remotion';
import styled from 'styled-components';
import machine from './img/eudaimonia-machine.png';
import dewane from './img/dewane.png';
import cat from './img/cat-typing.gif';
import guy from './img/mountain-man.gif';
import {Gif} from '@remotion/gif';

export const Scene1Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const bgFilter = interpolate(frame, [110, 120], [0, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const overlayOpacity = interpolate(frame, [110, 120], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const dewaneSlide = interpolate(frame, [120, 130], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const catSlide = interpolate(frame, [210, 220], [150, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const guySlide = interpolate(frame, [260, 270], [150, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					filter: `blur(${bgFilter}px)`,
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
							fontSize: '175px',
							left: '50%',
							width: '100%',
						}}
					>
						The Eudaimonia Machine
					</Title>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '85%',
							gap: '48px',
							paddingTop: '225px',
						}}
					>
						<Title style={{transform: 'translateX(0px)'}}>Gallery</Title>
						<Title style={{transform: 'translateX(25px)'}}>Salon</Title>
						<Title style={{transform: 'translateX(40px)'}}>Library</Title>
						<Title style={{transform: 'translateX(15px)'}}>
							Office
							<br />
							Space
						</Title>
						<Title style={{transform: 'translateX(15px)'}}>
							Deep Work
							<br />
							Chambers
						</Title>
					</div>
					<img
						src={machine}
						style={{
							transform: `scaleX(-1) translateX(30px)`,
							width: '85%',
						}}
					/>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'rgba(252,245,95, .87)',
					opacity: overlayOpacity,
				}}
			>
				<img
					src={dewane}
					alt=""
					style={{
						position: 'absolute',
						left: 0,
						bottom: 0,
						width: '750px',
						transform: `translateY(${dewaneSlide}%)`,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						right: 0,
						width: '50%',
						height: '100%',
						top: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<div
						style={{
							transform: `translateX(${catSlide}%)`,
							height: '500px',
							width: '500px',
						}}
					>
						<Gif src={staticFile('cat-typing.gif')} width={500} height={500} />
					</div>
					<div
						style={{
							transform: `translateX(${guySlide}%)`,
							height: '500px',
							width: '500px',
						}}
					>
						<Gif
							src={staticFile('mountain-man.gif')}
							width={500}
							height={500}
						/>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
