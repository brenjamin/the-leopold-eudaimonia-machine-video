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

export const Scene10ThresholdDiagram: React.FC = () => {
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

	const bgFilter = interpolate(frame, [200, 210, 445, 455], [0, 10, 10, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const overlayOpacity = interpolate(
		frame,
		[200, 210, 445, 455],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const grayThresholds = interpolate(frame, [470, 510], [100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const prepareOpacity = interpolate(frame, [260, 270], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const prepareY = interpolate(frame, [260, 270], [20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const separationOpacity = interpolate(frame, [340, 350], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const separationY = interpolate(frame, [340, 350], [20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const boltOpacity = interpolate(frame, [275, 285], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const boltY = interpolate(frame, [275, 285], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const boltScale = interpolate(frame, [275, 280, 285], [1, 1.2, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const bulbOpacity1 = interpolate(frame, [293, 296], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bulbOpacity2 = interpolate(frame, [296, 299], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bulbOpacity3 = interpolate(frame, [299, 302], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bulbOpacity4 = interpolate(frame, [302, 305], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bulbOpacity5 = interpolate(frame, [305, 308], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bulbOpacity6 = interpolate(frame, [308, 311], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bulbOpacity7 = interpolate(frame, [311, 313], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const zone1Y = interpolate(frame, [365, 375], [3, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const zone2Y = interpolate(frame, [365, 375], [-3, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const dotOpacity1 = interpolate(frame, [383, 386], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dotOpacity2 = interpolate(frame, [389, 392], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dotOpacity3 = interpolate(frame, [395, 398], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dotOpacity4 = interpolate(frame, [401, 404], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dotOpacity5 = interpolate(frame, [407, 410], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const restOpacity = interpolate(frame, [550, 570, 680, 690], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const workOpacity = interpolate(frame, [550, 570, 680, 690], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const saturation = interpolate(frame, [550, 570, 680, 690], [1, 4, 4, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const restOpacity2 = interpolate(frame, [635, 645], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const workOpacity2 = interpolate(frame, [645, 655], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	//transform: scale(1.5) translate(-525px, 28px)
	const imageScale = interpolate(
		frame,
		[680, 700, 870, 880],
		[1, 1.4, 1.4, 1.5],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const imageX = interpolate(
		frame,
		[680, 700, 870, 880],
		[0, -450, -450, -525],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const imageY = interpolate(frame, [680, 700, 870, 880], [0, 25, 25, 28], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const libraryOpacity = interpolate(
		frame,
		[700, 710, 870, 880],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const runnerOpacity = interpolate(frame, [800, 810, 870, 880], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const runnerX = interpolate(frame, [800, 810], [50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const anteOpacity = interpolate(frame, [916, 917, 1060, 1070], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const chambersOpacity = interpolate(
		frame,
		[922, 923, 1060, 1070],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const distractionOpacity = interpolate(
		frame,
		[1065, 1075, 1105, 1115],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const distractionY = interpolate(
		frame,
		[1065, 1075, 1105, 1115],
		[-20, 0, 0, 20],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const focusOpacity = interpolate(frame, [1105, 1115], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const focusY = interpolate(frame, [1105, 1115], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					gap: '90px',
					alignItems: 'center',
					paddingTop: '160px',
					filter: `blur(${bgFilter}px)`,
				}}
			>
				<Title style={{transform: 'scale(1.6)'}}>Thresholds</Title>
				<div
					style={{
						padding: '30px',
						width: '96%',
						backgroundColor: 'white',
						border: '19px solid black',
						display: 'grid',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<img
						src={thresholds}
						style={{
							gridRow: '1 / span 1',
							gridColumn: '1 / span 1',
							filter: `saturate(${saturation}) grayscale(${grayThresholds}%)`,
							transform: `scale(${imageScale}) translate(${imageX}px, ${imageY}px)`,
						}}
					/>
					<Overlay
						style={{
							top: 46,
							left: 63,
							width: '490px',
							height: '237px',
							opacity: restOpacity,
						}}
					>
						<span style={{opacity: restOpacity2}}>Rest</span>
					</Overlay>
					<Overlay
						style={{
							top: 46,
							left: 790,
							width: '964px',
							height: '237px',
							opacity: workOpacity,
						}}
					>
						<span style={{opacity: workOpacity2}}>Work</span>
					</Overlay>
					<Overlay
						style={{
							top: 28,
							right: 1013,
							width: '339px',
							height: '326px',
							opacity: libraryOpacity,
							fontSize: '80px',
							backgroundColor: 'transparent',
							flexDirection: 'column',
							justifyContent: 'space-between',
							padding: '0px 0',
						}}
					>
						<span
							style={{
								display: 'inline-block',
								transform: `scaleX(-1) translate(${runnerX}px, -5px)`,
								opacity: runnerOpacity,
								fontSize: '100px',
							}}
						>
							🏃🏽
						</span>
						<span
							style={{
								display: 'inline-block',
								padding: '18px 70px 15px',
								backgroundColor: 'rgba(0,0,0,.8)',
							}}
						>
							Library
						</span>
					</Overlay>
					<Overlay
						style={{
							top: 31,
							right: 790,
							width: '339px',
							height: '326px',
							fontSize: '80px',
							backgroundColor: 'transparent',
							color: 'black',
							fontSize: '70px',
						}}
					>
						<span style={{opacity: anteOpacity}}>Ante</span>
						<span style={{opacity: chambersOpacity}}>chambers</span>
						<span
							style={{
								position: 'absolute',
								opacity: distractionOpacity,
								top: 204,
								right: 263,
								fontSize: '38px',
								transform: `translateY(${distractionY}px)`,
								display: 'inline-block',
							}}
						>
							😵‍💫
						</span>
						<span
							style={{
								position: 'absolute',
								opacity: focusOpacity,
								transform: `translateY(${focusY}px)`,
								display: 'inline-block',
								top: 250,
								right: 263,
							}}
						>
							😌
						</span>
					</Overlay>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'rgba(252,245,95, .95)',
					opacity: overlayOpacity,
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '80px',
					fontWeight: 500,
					fontFamily: 'var(--sans)',
				}}
			>
				<div
					style={{
						width: '80%',
						display: 'flex',
						flexDirection: 'column',
						gap: '100px',
					}}
				>
					<div
						style={{textAlign: 'center', fontWeight: '600', fontSize: '90px'}}
					>
						Thresholds are critical for:
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							gap: '75px',
							alignItems: 'stretch',
							opacity: prepareOpacity,
							transform: `translateY(${prepareY}px)`,
						}}
					>
						<svg
							height="200px"
							width="200px"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 392.533 392.533"
							xml:space="preserve"
							style={{flexShrink: 0}}
						>
							<path
								style={{fill: '#FFFFFF'}}
								d="M191.16,72.792c-45.188,2.457-82.23,39.887-84.299,85.139c-1.099,23.661,7.046,46.416,22.949,64
	c24.178,26.764,38.141,59.604,39.952,93.22h52.945c1.681-34.327,15.386-66.844,39.046-92.186
	c15.451-16.614,24.048-38.271,24.048-60.832C285.737,111.127,242.877,69.818,191.16,72.792z"
							/>
							<path
								style={{fill: '#FFC10D'}}
								d="M192.388,94.578c-34.133,1.939-62.125,30.125-63.741,64.388c-0.84,17.907,5.301,35.103,17.325,48.356
	c22.562,25.018,37.43,54.756,43.119,85.98h14.158c5.56-31.677,20.17-61.285,42.473-85.204
	c11.636-12.541,18.166-28.897,18.166-45.964C263.952,124.832,233.891,94.578,192.388,94.578z"
							/>
							<g>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity4}}
									d="M196.267,38.4c6.012,0,10.925-4.848,10.925-10.925V10.925C207.192,4.913,202.343,0,196.267,0
		c-6.012,0-10.925,4.848-10.925,10.925V27.41C185.341,33.422,190.255,38.4,196.267,38.4z"
								/>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity2}}
									d="M61.673,151.208H45.123c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.848,10.925,10.925,10.925
		h16.485c6.012,0,10.925-4.848,10.925-10.925C72.469,156.057,67.685,151.208,61.673,151.208z"
								/>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity6}}
									d="M347.41,151.208h-16.485c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925
		h16.485c6.012,0,10.925-4.848,10.925-10.925S353.422,151.208,347.41,151.208z"
								/>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity1}}
									d="M93.35,249.6l-11.636,11.636c-4.267,4.267-4.267,11.119,0,15.451c4.267,4.267,11.119,4.267,15.451,0
		l11.636-11.636c4.267-4.267,4.267-11.119,0-15.451C104.533,245.269,97.616,245.333,93.35,249.6z"
								/>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity5}}
									d="M295.434,47.515l-11.636,11.636c-4.267,4.267-4.267,11.119,0,15.45
		c4.267,4.267,11.119,4.267,15.451,0l11.636-11.636c4.267-4.267,4.267-11.119,0-15.451
		C306.618,43.248,299.636,43.248,295.434,47.515z"
								/>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity7}}
									d="M299.184,249.6c-4.267-4.267-11.119-4.267-15.451,0c-4.267,4.267-4.267,11.119,0,15.451
		l11.636,11.636c4.267,4.267,11.119,4.267,15.451,0c4.267-4.267,4.267-11.119,0-15.451L299.184,249.6z"
								/>
								<path
									style={{fill: '#194F82', opacity: bulbOpacity3}}
									d="M93.35,74.602c4.267,4.267,11.119,4.267,15.451,0c4.267-4.267,4.267-11.119,0-15.45L97.164,47.515
		c-4.267-4.267-11.119-4.267-15.451,0c-4.267,4.267-4.267,11.119,0,15.451L93.35,74.602z"
								/>
							</g>
							<path
								style={{fill: '#56ACE0'}}
								d="M222.513,363.249v-26.246h-52.622v26.246h7.887c4.202,0,7.887,2.327,9.762,5.947
	c1.293,0.711,4.396,1.616,8.727,1.616c4.719,0,7.564-1.099,8.727-1.616c1.875-3.62,5.56-5.947,9.762-5.947H222.513z"
							/>
							<g>
								<path
									style={{fill: '#194F82'}}
									d="M307.523,162.069c0-63.418-53.463-114.683-117.592-111.127
		c-56.178,3.103-102.335,49.584-104.857,105.891c-1.422,29.414,8.792,57.729,28.509,79.58c22.238,24.63,34.521,55.143,34.521,85.851
		v51.782c0,6.012,4.848,10.925,10.925,10.925h13.382c5.236,4.784,13.77,7.564,23.855,7.564c10.15,0,18.618-2.844,23.855-7.564
		h13.382c6.012,0,10.925-4.848,10.925-10.925v-51.782c0-31.418,11.83-61.414,33.293-84.558
		C296.921,217.147,307.523,190.255,307.523,162.069z M204.994,369.131c-1.164,0.646-4.073,1.616-8.727,1.616
		c-4.331,0-7.499-1.034-8.727-1.616c-1.875-3.62-5.56-5.948-9.762-5.948h-7.887v-26.246h52.622v26.246h-7.822
		C210.554,363.249,206.869,365.576,204.994,369.131z M222.772,315.087h-52.945c-1.745-33.616-15.838-66.457-39.952-93.22
		c-15.903-17.648-24.048-40.339-22.95-64c2.069-45.188,39.111-82.618,84.299-85.139c51.717-2.909,94.578,38.335,94.578,89.341
		c0,22.626-8.469,44.283-24.048,60.832C238.158,248.242,224.388,280.76,222.772,315.087z"
								/>
								<path
									style={{
										fill: '#194F82',
										opacity: boltOpacity,
										transform: `scale(${boltScale}) translateY(${boltY}px)`,
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									d="M217.277,167.564H191.16l19.911-52.234c2.133-5.624-0.711-11.895-6.335-14.093
		c-5.624-2.133-11.895,0.711-14.093,6.335l-25.6,66.974c-2.392,6.271,1.745,14.675,10.214,14.739h26.376l-15.709,43.055
		c-2.069,5.624,0.84,11.895,6.465,13.964c5.172,1.875,11.507-0.646,13.964-6.465l21.01-57.729
		C230.141,174.481,225.099,168.081,217.277,167.564z"
								/>
							</g>
						</svg>
						<div>Preparing the mind for what's coming next.</div>
					</div>
					<div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								gap: '75px',
								alignItems: 'center',
								opacity: separationOpacity,
								transform: `translateY(${separationY}px)`,
							}}
						>
							<svg
								width="200px"
								height="200px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								style={{flexShrink: 0}}
							>
								<path
									d="M3 12H3.01"
									stroke="#194F82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{opacity: dotOpacity1}}
								/>
								<path
									d="M7.5 12H7.51"
									stroke="#194F82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{opacity: dotOpacity2}}
								/>
								<path
									d="M16.5 12H16.51"
									stroke="#194F82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{opacity: dotOpacity4}}
								/>
								<path
									d="M12 12H12.01"
									stroke="#194F82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{opacity: dotOpacity3}}
								/>
								<path
									d="M21 12H21.01"
									stroke="#194F82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{opacity: dotOpacity5}}
								/>
								<path
									d="M21 21V20.2C21 19.0799 21 18.5198 20.782 18.092C20.5903 17.7157 20.2843 17.4097 19.908 17.218C19.4802 17 18.9201 17 17.8 17H6.2C5.0799 17 4.51984 17 4.09202 17.218C3.7157 17.4097 3.40973 17.7157 3.21799 18.092C3 18.5198 3 19.0799 3 20.2V21"
									stroke="#56ACE0"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{
										transform: `translateY(${zone2Y}px)`,
										transformBox: 'fill-box',
										transformOrigin: 'center center',
									}}
								/>
								<path
									d="M21 3V3.8C21 4.9201 21 5.48016 20.782 5.90798C20.5903 6.28431 20.2843 6.59027 19.908 6.78201C19.4802 7 18.9201 7 17.8 7H6.2C5.0799 7 4.51984 7 4.09202 6.78201C3.71569 6.59027 3.40973 6.28431 3.21799 5.90798C3 5.48016 3 4.92011 3 3.8V3"
									stroke="#56ACE0"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									style={{
										transform: `translateY(${zone1Y}px)`,
										transformBox: 'fill-box',
										transformOrigin: 'center center',
									}}
								/>
							</svg>
							<div>
								Creating separation between the different zones of the machine.
							</div>
						</div>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
