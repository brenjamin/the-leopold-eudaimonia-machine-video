import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import focus from './img/focus-diagram.png';
import circulation from './img/circulation-diagram.png';
import thresholds from './img/thresholds-diagram.png';
import styled from 'styled-components';

import {Animation} from 'remotion-animation';

export const Scene8Diagrams: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 95px;
	`;

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 75px;
		text-align: center;
	`;

	const focusOpacity = interpolate(frame, [110, 120], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const focusY = interpolate(frame, [110, 120], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const circulationOpacity = interpolate(
		frame,
		[150, 160, 430, 440],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const circulationY = interpolate(
		frame,
		[150, 160, 430, 440],
		[-20, 0, 0, 20],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const thresholdsOpacity = interpolate(
		frame,
		[210, 220, 430, 440],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const thresholdsY = interpolate(
		frame,
		[210, 220, 430, 440],
		[-20, 0, 0, 20],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const focusTitleScale = interpolate(frame, [450, 470], [1, 1.6], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const focusTitleX = interpolate(frame, [450, 470], [0, 465], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const focusDiagramScale = interpolate(frame, [450, 470], [1, 1.6], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const focusDiagramX = interpolate(frame, [450, 470], [0, -154], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const focusDiagramY = interpolate(frame, [450, 470], [0, 230], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const focusClip = interpolate(frame, [510, 610], [0, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const focusGrayOpacity = interpolate(frame, [510, 610], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const mainProgress = interpolate(frame, [870, 890], [0, -100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const circulationProgress = interpolate(frame, [870, 890], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const circulationBlur = interpolate(frame, [870, 890], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const bgFilter = interpolate(frame, [940, 950, 1140, 1150], [0, 10, 10, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const overlayOpacity = interpolate(
		frame,
		[940, 950, 1140, 1150],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const hourglassSpin = interpolate(
		frame,
		[990, 1010, 1070, 1090],
		[0, 180, 180, 360],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const blueDotY = interpolate(
		frame,
		[1010, 1030, 1090, 1110],
		[0, -7, -7, 7],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const circle1Y = interpolate(
		frame,
		[1010, 1030, 1090, 1110],
		[0, 14, 14, 7],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const circle2Y = interpolate(frame, [1010, 1030, 1090, 1110], [14, 7, 7, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const grayCirculation = interpolate(frame, [1170, 1210], [100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const effacementOpacity = interpolate(frame, [1540, 1560], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const slideNoun = interpolate(frame, [1600, 1610], [-20, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const slideDef = interpolate(frame, [1620, 1630], [20, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const nounOpacity = interpolate(frame, [1600, 1610], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const defOpacity = interpolate(frame, [1620, 1630], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const slideDef2 = interpolate(frame, [1670, 1680], [20, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const def2Opacity = interpolate(frame, [1670, 1680], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					justifyContent: 'space-evenly',
					transform: `translateX(${mainProgress}%)`,
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						gap: '64px',
						opacity: focusOpacity,
						transform: `translateY(${focusY}px)`,
					}}
				>
					<Title
						style={{
							width: '15%',
							transform: `scale(${focusTitleScale}) translate(${focusTitleX}px, 0)`,
						}}
					>
						Focus
					</Title>
					<div
						style={{
							padding: '30px',
							width: '60%',
							backgroundColor: 'white',
							border: '12px solid black',
							display: 'grid',
							position: 'relative',
							transform: `scale(${focusDiagramScale}) translate(${focusDiagramX}px, ${focusDiagramY}px)`,
						}}
					>
						<img
							src={focus}
							style={{
								filter: 'grayscale(100%)',
								gridRow: '1 / span 1',
								gridColumn: '1 / span 1',
								opacity: focusGrayOpacity,
							}}
						/>
						<img
							src={focus}
							style={{
								gridRow: '1 / span 1',
								gridColumn: '1 / span 1',
							}}
						/>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						gap: '64px',
						opacity: circulationOpacity,
						transform: `translateY(${circulationY}px)`,
					}}
				>
					<Title style={{width: '15%'}}>Circulation</Title>
					<div
						style={{
							padding: '30px',
							width: '60%',
							backgroundColor: 'white',
							border: '12px solid black',
							display: 'grid',
						}}
					>
						<img
							src={circulation}
							style={{
								gridRow: '1 / span 1',
								gridColumn: '1 / span 1',
							}}
						/>
						<img
							src={circulation}
							style={{
								filter: 'grayscale(100%)',
								gridRow: '1 / span 1',
								gridColumn: '1 / span 1',
							}}
						/>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						gap: '64px',
						opacity: thresholdsOpacity,
						transform: `translateY(${thresholdsY}px)`,
					}}
				>
					<Title style={{width: '15%'}}>Thresholds</Title>
					<div
						style={{
							padding: '30px',
							width: '60%',
							backgroundColor: 'white',
							border: '12px solid black',
							display: 'grid',
						}}
					>
						<img
							src={thresholds}
							style={{
								gridRow: '1 / span 1',
								gridColumn: '1 / span 1',
							}}
						/>
						<img
							src={thresholds}
							style={{
								filter: 'grayscale(100%)',
								gridRow: '1 / span 1',
								gridColumn: '1 / span 1',
							}}
						/>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					transform: `translateX(${circulationProgress}%)`,
					gap: '90px',
					alignItems: 'center',
					paddingTop: '160px',
					filter: `blur(${bgFilter}px)`,
				}}
			>
				<Title style={{transform: 'scale(1.6)'}}>Circulation</Title>
				<div
					style={{
						padding: '30px',
						width: '96%',
						backgroundColor: 'white',
						border: '19px solid black',
						display: 'grid',
					}}
				>
					<img
						src={circulation}
						style={{
							gridRow: '1 / span 1',
							gridColumn: '1 / span 1',
							filter: `grayscale(${grayCirculation}%)`,
						}}
					/>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'rgba(252,245,95, .95)',
					opacity: overlayOpacity,
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '80px',
					fontWeight: 600,
					fontFamily: 'var(--sans)',
				}}
			>
				<div
					style={{
						width: '80%',
						display: 'flex',
						flexDirection: 'column',
						gap: '50px',
						transform: 'translateY(-50px)',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-end',
							gap: '20px',
						}}
					>
						<svg
							width="195px"
							height="195px"
							viewBox="0 -43.5 1111 1111"
							className="icon"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								transform: `rotate(${hourglassSpin}deg)`,
								transformBox: 'fill-box',
								transformOrigin: 'center center',
							}}
						>
							<path
								d="M378.88 248.685714l129.462857 162.377143 9.508572 11.702857v15.36l1.462857 155.062857v16.091429l-10.24 12.434286-147.748572 182.125714c-2.925714 3.657143-7.314286 16.091429-6.582857 21.211429v2.925714l2.925714 43.885714-87.771428 5.851429-2.925714-43.885715v-2.925714c-1.462857-27.062857 8.777143-61.44 26.331428-82.651428l147.748572-182.125715-9.508572 27.794286-1.462857-155.062857 9.508571 27.062857-148.48-185.782857-24.868571-30.72h112.64v-0.731429zM765.805714 775.314286l-129.462857-162.377143-9.508571-11.702857v-15.36l-1.462857-155.062857v-16.091429l10.24-12.434286 147.748571-182.125714c2.925714-3.657143 7.314286-16.091429 6.582857-21.211429v-2.925714l-2.925714-43.885714 87.771428-5.851429 2.925715 43.885715v2.925714c1.462857 27.062857-8.777143 61.44-26.331429 82.651428l-147.748571 182.125715 9.508571-27.794286 1.462857 155.062857-9.508571-27.062857 148.48 185.782857 24.868571 30.72h-112.64v0.731429z"
								fill="#0C92F2"
							/>
							<path
								d="M577.828571 680.228571l80.457143 102.4h-160.914285z"
								fill="#FC830A"
							/>
							<path
								d="M577.828571 343.771429l80.457143-102.4h-160.914285z"
								fill="#61B6F2"
							/>
							<path
								d="M249.417143 65.828571h738.742857s-5.12 87.771429-109.714286 87.771429h-716.8s7.314286-87.771429 87.771429-87.771429zM249.417143 863.085714h738.742857s-5.12 87.771429-109.714286 87.771429h-716.8s7.314286-87.771429 87.771429-87.771429z"
								fill="#0C92F2"
							/>
						</svg>
						<svg
							fill="#000000"
							width="200px"
							height="200px"
							viewBox="0 0 24 24"
							id="more-vertical"
							xmlns="http://www.w3.org/2000/svg"
							className="icon multi-color"
						>
							<circle
								id="secondary-upstroke"
								cx="12"
								cy="12"
								r="1"
								style={{
									fill: 'none',
									stroke: 'rgb(44, 169, 188)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '2.5',
									transform: `translateY(${blueDotY}px)`,
								}}
							></circle>
							<path
								id="primary-upstroke"
								d="M12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Z"
								style={{
									fill: 'none',
									stroke: 'rgb(0,0,0)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '2.5',
									transform: `translateY(${circle1Y}px)`,
								}}
							></path>
							<path
								id="primary-upstroke"
								d="M12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Z"
								y="60"
								style={{
									fill: 'none',
									stroke: 'rgb(0,0,0)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '2.5',
									transform: `translateY(${circle2Y}px)`,
									transformOrigin: 'center center',
									transformBox: 'fill-box',
								}}
							></path>
						</svg>
					</div>
					<div>
						Circulation, along with thresholds, is one of the two critical
						time/space elements of the project.
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					opacity: effacementOpacity,
					alignItems: 'center',
					padding: '80px',
				}}
			>
				<Title style={{fontSize: '200px'}}>Effacement</Title>
				<AltTitle
					style={{
						marginTop: '3.5rem',
						textAlign: 'left',
						display: 'flex',
					}}
				>
					<span
						style={{
							opacity: nounOpacity,
							fontStyle: 'italic',
							transform: `translateY(${slideNoun}px)`,
							display: 'inline-block',
						}}
					>
						noun
					</span>
					<span
						style={{
							opacity: defOpacity,
							transform: `translate(40px, ${slideDef}px)`,
						}}
					>
						mental&nbsp;preparedness&nbsp;
						<span
							style={{
								opacity: def2Opacity,
								width: '100%',
								position: 'relative',
							}}
						>
							– the gradual narrowing of focus and elimination of distraction
							that occurs as you move through the machine
						</span>
					</span>
				</AltTitle>
			</AbsoluteFill>
		</>
	);
};
