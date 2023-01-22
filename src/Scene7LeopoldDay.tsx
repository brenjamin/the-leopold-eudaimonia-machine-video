import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {useEffect, useRef} from 'react';
import styled from 'styled-components';
import leopoldDay from './img/leopold-day.png';
import leopoldPlanClean from './img/leopold-plan-clean.png';

export const Scene7LeopoldDay: React.FC = () => {
	const frame = useCurrentFrame();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 175px;
		text-align: center;
	`;

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 42px;
		color: white;
	`;

	const dayOpacity = interpolate(frame, [90, 100], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const dayTranslate = interpolate(frame, [90, 100], [-30, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const slideTranslate = interpolate(frame, [0, 20], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const blackBgOpacity = interpolate(frame, [260, 270], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const arrowTranslate = interpolate(frame, [280, 310], [-100, 149], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const waveClip = interpolate(frame, [320, 660], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacity1 = interpolate(frame, [330, 340], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [370, 380], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity3 = interpolate(frame, [410, 420], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity4 = interpolate(frame, [450, 460], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity5 = interpolate(frame, [500, 510], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity6 = interpolate(frame, [540, 550], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity7 = interpolate(frame, [580, 590], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity8 = interpolate(frame, [620, 630], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const designOpacity = interpolate(frame, [740, 760], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const sineWave = useRef<SVGSVGElement>(null);
	const flippedWave = useRef<SVGSVGElement>(null);

	const Overlay = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 110px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.75);
		position: absolute;
		color: white;
	`;

	const planOpacity = interpolate(frame, [780, 790], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const planTransform = interpolate(
		frame,
		[780, 790, 870, 890],
		[-20, 0, 0, -300],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const mazeTransform = interpolate(frame, [870, 890], [500, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const arrowPoint1 = interpolate(frame, [920, 940], [20, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const arrowPoint2a = interpolate(frame, [920, 940], [20, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const arrowPoint2b = interpolate(
		frame,
		[900, 920, 940, 960],
		[100, 30, 38, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const arrowPoint3 = interpolate(
		frame,
		[900, 920, 940, 960],
		[100, 30, 38, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	//polygon(0 100%, 20% 100%, 20% 100%, 0 100%)
	//polygon(0 100%, 20% 100%, 20% 30%, 0 30%)
	//polygon(0 100%, 100% 100%, 100% 38%, 0 38%)
	//polygon(0 100%, 100% 100%, 100% 0, 0 0)

	useEffect(() => {
		const origin = {
			//origin of axes
			x: 100,
			y: 100,
		};
		const amplitude = 200; // wave amplitude
		const rarity = 7; // point spacing
		const freq = 0.1; // angular frequency
		const phase = 1; // phase angle

		for (let i = -100; i < 250; i++) {
			let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
			let line2 = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'line'
			);

			line.setAttribute('x1', (i - 1) * rarity + origin.x);
			line.setAttribute(
				'y1',
				Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y
			);

			line.setAttribute('x2', i * rarity + origin.x);
			line.setAttribute(
				'y2',
				Math.sin(freq * (i + phase)) * amplitude + origin.y
			);

			line.setAttribute('style', 'stroke:white;stroke-width:8');

			flippedWave.current.appendChild(line);

			line2.setAttribute('x1', (i - 1) * rarity + origin.x);
			line2.setAttribute(
				'y1',
				Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y
			);

			line2.setAttribute('x2', i * rarity + origin.x);
			line2.setAttribute(
				'y2',
				Math.sin(freq * (i + phase)) * amplitude + origin.y
			);

			line2.setAttribute(
				'style',
				'stroke:white;stroke-width:8;stroke-dasharray: 6 36'
			);

			sineWave.current.appendChild(line2);
		}
	}, []);

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					gap: '50px',
					transform: `translateX(${slideTranslate}%)`,
				}}
			>
				<Title style={{paddingTop: '50px'}}>A Day at the Leopold</Title>
				<img
					src={leopoldDay}
					style={{
						width: '90%',
						margin: '0 auto',
						border: '12px black solid',
						opacity: dayOpacity,
						transform: `translateY(${dayTranslate}px)`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'black',
					gap: '50px',
					opacity: blackBgOpacity,
				}}
			>
				<Title style={{paddingTop: '50px', color: 'white'}}>
					A Day at the Leopold
				</Title>
				<svg
					fill="white"
					width="800px"
					height="800px"
					viewBox="0 0 24 24"
					id="right-arrow"
					xmlns="http://www.w3.org/2000/svg"
					class="icon line"
					style={{
						transform: `translateX(${arrowTranslate}%)`,
						transformBox: 'fill-box',
						overflow: 'visible',
						marginTop: '-107px',
					}}
				>
					<path
						id="primary"
						d="M-60,12H21m-3,3,3-3L18,9"
						style={{
							fill: 'none',
							stroke: 'white',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1',
						}}
					></path>
				</svg>
				<div
					style={{
						position: 'absolute',
						height: '100%',
						width: 1748,
						display: 'flex',
						alignItems: 'center',
						overflow: 'hidden',
						clipPath: `inset(0 ${waveClip}% 0 0)`,
					}}
				>
					<svg
						ref={sineWave}
						style={{
							overflow: 'visible',
							transform: 'translate(555px, 40px)',
							transformOrigin: 'center center',
							transformBox: 'fill-box',
						}}
					></svg>
				</div>
				<div
					style={{
						position: 'absolute',
						height: '100%',
						width: 1748,
						display: 'flex',
						alignItems: 'center',
						overflow: 'hidden',
						clipPath: `inset(0 ${waveClip}% 0 0)`,
					}}
				>
					<svg
						ref={flippedWave}
						style={{
							overflow: 'visible',
							transformOrigin: 'center center',
							transformBox: 'fill-box',
							transform: 'translate(335px, 40px)',
						}}
					></svg>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						position: 'absolute',
						bottom: 20,
						width: '100%',
					}}
				>
					<div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
						<svg
							fill="white"
							width="150px"
							height="150px"
							viewBox="0 0 24 24"
							id="right-arrow"
							xmlns="http://www.w3.org/2000/svg"
							class="icon line"
						>
							<path
								id="primary"
								d="M5,12H21m-3,3,3-3L18,9"
								style={{
									fill: 'none',
									stroke: 'white',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '1.25',
								}}
							></path>
						</svg>
						<AltTitle>Time</AltTitle>
					</div>
					<div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
						<svg style={{height: '1px', width: '100px', overflow: 'visible'}}>
							<line
								x1="0"
								y1="0"
								x2="95"
								y2="0"
								style={{
									stroke: 'white',
									strokeWidth: 8,
									strokeDasharray: '6 6',
								}}
							></line>
						</svg>
						<AltTitle>Social Behavior</AltTitle>
					</div>
					<div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
						<svg style={{height: '1px', width: '100px', overflow: 'visible'}}>
							<line
								x1="0"
								y1="0"
								x2="95"
								y2="0"
								style={{
									stroke: 'white',
									strokeWidth: 8,
								}}
							></line>
						</svg>
						<AltTitle>Focused Work</AltTitle>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill>
				<div
					style={{
						width: 1714,
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'space-between',
						padding: '0 12px',
						position: 'absolute',
						top: 300,
					}}
				>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(8px)',
							opacity: opacity1,
						}}
					>
						Breakfast
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-29px)',
							opacity: opacity2,
						}}
					>
						Deep Work
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-53px)',
							opacity: opacity3,
						}}
					>
						Salon
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-66px)',
							opacity: opacity4,
						}}
					>
						Deep Work
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-90px)',
							opacity: opacity5,
						}}
					>
						Lunch
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-63px)',
							opacity: opacity6,
						}}
					>
						Office
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-38px)',
							opacity: opacity7,
						}}
					>
						Walk
					</AltTitle>
					<AltTitle
						style={{
							fontSize: '36px',
							transform: 'translateX(-5px)',
							opacity: opacity8,
						}}
					>
						Library
					</AltTitle>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					opacity: designOpacity,
					backgroundColor: 'var(--blue)',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						width: '95%',
						overflow: 'hidden',
						border: '12px solid black',
						position: 'relative',
						margin: '0 auto',
						backgroundColor: 'white',
						padding: '5rem',
						opacity: planOpacity,
						transform: `translateY(${planTransform}px)`,
					}}
				>
					<img
						src={leopoldPlanClean}
						style={{
							maxWidth: '100%',
						}}
					/>
					<Overlay
						style={{
							transform: 'rotate(-90deg)',
							width: 217,
							height: 110,
							left: 59,
							top: 140,
							fontSize: '60px',
							transformOrigin: 'center center',
						}}
					>
						Gallery
					</Overlay>
					<Overlay
						style={{
							width: '336px',
							height: '220px',
							top: 87,
							left: 340,
							fontSize: '75px',
						}}
					>
						Salon
					</Overlay>
					<Overlay
						style={{
							width: '454px',
							height: '449px',
							top: 83,
							left: 337,
							clipPath:
								'polygon(0 50%, 75% 50%, 75% 0, 100% 0, 100% 100%, 0 100%)',
						}}
					>
						<div style={{transform: 'translateY(125px)', fontSize: '75px'}}>
							<span style={{opacity: opacity2}}>Porch</span>
						</div>
					</Overlay>
					<Overlay
						style={{
							width: '195px',
							height: '222px',
							top: 84,
							left: 1166,
						}}
					>
						<div style={{fontSize: '60px'}}>
							<span>Library</span>
						</div>
					</Overlay>
					<Overlay
						style={{
							width: '341px',
							height: '220px',
							top: 85,
							left: 799,
						}}
					>
						<div style={{fontSize: '75px'}}>
							<span>Office</span>
						</div>
					</Overlay>
					<Overlay
						style={{
							width: '222px',
							height: '222px',
							top: 84,
							right: 209,
						}}
					>
						<div style={{fontSize: '50px'}}>
							<span>Deep Work Chambers</span>
						</div>
					</Overlay>
					<Overlay
						style={{
							transform: 'rotate(90deg)',
							width: 220,
							height: 112,
							right: 38,
							top: 140,
							fontSize: '40px',
							transformOrigin: 'center center',
						}}
					>
						Contemplative
					</Overlay>
				</div>
				<div
					style={{
						position: 'absolute',
						width: '100%',
						bottom: 55,
					}}
				>
					<svg
						fill="#000000"
						width="400px"
						height="400px"
						viewBox="0 0 512 512"
						enable-background="new 0 0 512 512"
						id="Business_x5F_solution"
						version="1.1"
						xml:space="preserve"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						style={{
							margin: '0 auto',
							display: 'block',
							transform: `translateY(${mazeTransform}px)`,
						}}
					>
						<g>
							<path d="M429.942,36.322h-39.967c-3.74,0-6.774,3.033-6.774,6.774s3.034,6.774,6.774,6.774h39.967   c17.748,0,32.187,14.438,32.187,32.187v88.841h-32.903v-46.452h11.613c3.74,0,6.774-3.032,6.774-6.774s-3.034-6.774-6.774-6.774   h-18.388c-3.74,0-6.773,3.032-6.773,6.774v60c0,3.742,3.033,6.774,6.773,6.774h39.678v125.029H334.346v-20.17h50.791v4.883   c0,3.741,3.033,6.773,6.774,6.773c3.74,0,6.774-3.032,6.774-6.773v-11.656c0-3.742-3.034-6.775-6.774-6.775h-64.34   c-3.74,0-6.774,3.033-6.774,6.775v26.943h-70.218c-3.74,0-6.774,3.033-6.774,6.775v145.877h-28.006   c-3.74,0-6.774,3.033-6.774,6.774c0,3.74,3.034,6.774,6.774,6.774h34.78h218.324c3.74,0,6.774-3.034,6.774-6.774V316.252V82.058   C475.678,56.839,455.16,36.322,429.942,36.322z M462.129,385.803h-16.404c-3.74,0-6.774,3.033-6.774,6.774s3.034,6.774,6.774,6.774   h16.404v62.777H257.354v-62.777H367.26v22.771h-15.037v-8.98c0-3.74-3.034-6.773-6.774-6.773c-3.741,0-6.774,3.033-6.774,6.773   v15.754c0,3.741,3.033,6.774,6.774,6.774h28.586c3.74,0,6.774-3.033,6.774-6.774v-29.545h34.734c3.741,0,6.774-3.033,6.774-6.774   s-3.033-6.774-6.774-6.774H257.354v-62.777h204.775V385.803z" />

							<path d="M78.31,286.008c-3.74,0-6.774,3.032-6.774,6.773v126.285c0,3.74,3.034,6.774,6.774,6.774c3.741,0,6.774-3.034,6.774-6.774   v-92.449h27.957c3.74,0,6.773-3.033,6.773-6.774v-99.918c0-3.741-3.033-6.774-6.773-6.774H78.31c-3.74,0-6.774,3.033-6.774,6.774   c0,3.742,3.034,6.774,6.774,6.774h27.957v86.369H85.084v-20.287C85.084,289.04,82.051,286.008,78.31,286.008z" />

							<path d="M388.04,248.318c3.74,0,6.774-3.032,6.774-6.774v-23.226h34.411c3.741,0,6.774-3.032,6.774-6.774s-3.033-6.774-6.774-6.774   h-34.411V90.577c0-3.742-3.034-6.774-6.774-6.774s-6.774,3.032-6.774,6.774v150.968C381.266,245.286,384.3,248.318,388.04,248.318z   " />

							<path
								style={{
									clipPath: `polygon(0 100%, ${arrowPoint1}% 100%, ${arrowPoint2a}% ${arrowPoint2b}%, 0 ${arrowPoint3}%)`,
									//polygon(0 100%, 20% 100%, 20% 100%, 0 100%)
									//polygon(0 100%, 20% 100%, 20% 30%, 0 30%)
									//polygon(0 100%, 100% 100%, 100% 38%, 0 38%)
									//polygon(0 100%, 100% 100%, 100% 0, 0 0)
								}}
								d="M343.125,241.544V139.249h13.559c2.532,0,4.855-1.414,6.018-3.665c1.162-2.25,0.974-4.962-0.493-7.028l-35.382-49.878   c-1.27-1.791-3.328-2.855-5.524-2.855s-4.255,1.064-5.524,2.855l-35.382,49.878c-2.164,3.052-1.445,7.28,1.604,9.444   c3.055,2.165,7.283,1.446,9.445-1.606l29.856-42.089l22.271,31.396h-7.223c-3.74,0-6.774,3.033-6.774,6.774v102.392H181.113   c-3.74,0-6.774,3.033-6.774,6.774v162.68h-16.55V218.318h148.466c3.74,0,6.773-3.032,6.773-6.774v-79.069   c0-3.742-3.033-6.774-6.773-6.774c-3.741,0-6.774,3.033-6.774,6.774v72.295H151.015c-3.74,0-6.773,3.032-6.773,6.774v199.551   c0,3.74,3.033,6.774,6.773,6.774h30.099c3.74,0,6.774-3.034,6.774-6.774v-162.68h148.463   C340.092,248.416,343.125,245.286,343.125,241.544z"
							/>

							<path d="M257.354,165.803V49.871h11.832c3.74,0,6.774-3.033,6.774-6.774s-3.034-6.774-6.774-6.774H82.058   c-25.218,0-45.735,20.517-45.735,45.736v347.884c0,25.218,20.518,45.735,45.735,45.735h37.302c3.74,0,6.774-3.034,6.774-6.774   c0-3.741-3.034-6.774-6.774-6.774H82.058c-17.748,0-32.187-14.438-32.187-32.187V260.005H78.31c3.741,0,6.774-3.032,6.774-6.774   c0-3.741-3.033-6.773-6.774-6.773H49.871v-73.88h45.677c3.74,0,6.774-3.033,6.774-6.774c0-3.742-3.034-6.774-6.774-6.774H49.871   v-76.97c0-17.749,14.438-32.187,32.187-32.187h6.716v68.913H78.31c-3.74,0-6.774,3.033-6.774,6.774s3.034,6.774,6.774,6.774h17.238   c3.74,0,6.774-3.033,6.774-6.774V49.871h26.95v34.457c0,3.741,3.034,6.774,6.774,6.774h69.107v34.456   c0,3.742,3.033,6.774,6.773,6.774c3.741,0,6.774-3.033,6.774-6.774v-41.23c0-3.742-3.033-6.774-6.774-6.774h-69.106V49.871h100.983   v109.157h-63.043v-41.355c0-3.742-3.033-6.774-6.774-6.774c-3.74,0-6.774,3.032-6.774,6.774v41.355h-31.166   c-3.74,0-6.774,3.033-6.774,6.774c0,3.741,3.034,6.774,6.774,6.774h114.532C254.319,172.577,257.354,169.544,257.354,165.803z" />
						</g>
					</svg>
				</div>
			</AbsoluteFill>
		</>
	);
};
