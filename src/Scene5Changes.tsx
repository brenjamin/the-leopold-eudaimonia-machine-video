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
import leopoldPlan from './img/leopold-plan.png';
import porch from './img/porch.jpg';
import contemplative from './img/contemplative.jpg';
import dewane from './img/dewane.png';
import design from './img/design.svg';
import bulb from './img/bulb.svg';

export const Scene5Changes: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
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
	const porchOpacity = interpolate(frame, [270, 290], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const imageSlide = interpolate(frame, [260, 460], [width / 12, -width / 12]);

	const wholeImageOpacity = interpolate(frame, [430, 450], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const wholeImageScale = interpolate(
		frame,
		[430, 520, 540, 590, 610, 890, 910],
		[2.5, 2.5, 1.7, 1.7, 1.85, 1.85, 3.7],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const wholeImageX = interpolate(
		frame,
		[430, 520, 540, 590, 610, 890, 910],
		[300, 300, 300, 300, -375, -375, -622],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const wholeImageY = interpolate(
		frame,
		[430, 520, 540, 590, 610, 890, 910],
		[220, 220, 115, 115, 210, 210, 227],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// scale(3.7) translate(-622px, 227px)

	const porchOverlayOpacity = interpolate(frame, [210, 220], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const porchOverlayOpacity2 = interpolate(frame, [530, 540], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const libraryOpacity = interpolate(frame, [710, 720], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const officeOpacity = interpolate(frame, [760, 770], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const contemplativeOpacity = interpolate(frame, [920, 930], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const chambersOpacity = interpolate(frame, [990, 1000], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const contemplativeImageOpacity = interpolate(frame, [1090, 1110], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const contemplativeSlide = interpolate(
		frame,
		[1090, 1390],
		[width / 12, -width / 12],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const finalOpacity = interpolate(frame, [1280, 1300], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const finalTranslate = interpolate(frame, [1600, 1620], [0, -450], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const finalScale = interpolate(frame, [1600, 1620], [1, 0.65], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const dewaneSlide = interpolate(frame, [1600, 1620], [100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const bubbleOpacity1 = interpolate(frame, [1670, 1677], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubbleOpacity2 = interpolate(frame, [1677, 1684], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubbleOpacity3 = interpolate(frame, [1684, 1691], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

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
					<div
						style={{
							position: 'relative',
							transform: `scale(${imageScale}) translate(${imageX}px, ${imageY}px)`,
						}}
					>
						<img
							src={leopoldPlanFull}
							style={{
								maxWidth: '100%',
							}}
						/>
						<Overlay
							style={{
								width: '440px',
								height: '435px',
								top: 122,
								left: 345,
								clipPath:
									'polygon(0 50%, 75% 50%, 75% 0, 100% 0, 100% 100%, 0 100%)',
								opacity: porchOverlayOpacity,
							}}
						>
							<div style={{transform: 'translateY(100px)'}}>
								<span style={{opacity: opacity1}}>The</span>{' '}
								<span style={{opacity: opacity2}}>Porch</span>
							</div>
						</Overlay>
					</div>
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
						opacity: wholeImageOpacity,
					}}
				>
					<div
						style={{
							width: '90%',
							overflow: 'hidden',
							border: '12px solid black',
						}}
					>
						<div
							style={{
								transform: `scale(${wholeImageScale}) translate(${wholeImageX}px,${wholeImageY}px)`,
								position: 'relative',
							}}
						>
							<img
								src={leopoldPlanFull}
								style={{
									maxWidth: '100%',
								}}
							/>
							<Overlay
								style={{width: '322px', height: '211px', top: 125, left: 350}}
							>
								Salon
							</Overlay>
							<Overlay
								style={{
									width: '440px',
									height: '435px',
									top: 122,
									left: 345,
									clipPath:
										'polygon(0 50%, 75% 50%, 75% 0, 100% 0, 100% 100%, 0 100%)',
									opacity: porchOverlayOpacity2,
								}}
							>
								<div
									style={{transform: 'translateY(105px)', fontSize: '100px'}}
								>
									<span style={{opacity: opacity2}}>Porch</span>
								</div>
							</Overlay>
							<Overlay
								style={{
									width: '190px',
									height: '218px',
									top: 122,
									left: 1148,
									opacity: libraryOpacity,
								}}
							>
								<div style={{fontSize: '55px'}}>
									<span>Library</span>
								</div>
							</Overlay>
							<Overlay
								style={{
									width: '321px',
									height: '218px',
									top: 122,
									left: 793,
									opacity: officeOpacity,
								}}
							>
								<div style={{fontSize: '55px'}}>
									<span>Office</span>
								</div>
							</Overlay>
							<Overlay
								style={{
									width: '110px',
									height: '218px',
									top: 122,
									right: 30,
									opacity: contemplativeOpacity,
								}}
							>
								<div style={{fontSize: '20px'}}>
									<span>
										Contemplative
										<br />
										Area
									</span>
								</div>
							</Overlay>
							<Overlay
								style={{
									width: '213px',
									height: '218px',
									top: 122,
									right: 147,
									opacity: chambersOpacity,
								}}
							>
								<div style={{fontSize: '35px'}}>
									<span>Deep Work Chambers</span>
								</div>
							</Overlay>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
			<Sequence from={1090}>
				<AbsoluteFill style={{opacity: contemplativeImageOpacity}}>
					<AbsoluteFill
						style={{
							transform: `scale(1.5) translateX(${contemplativeSlide}px)`,
						}}
					>
						<img src={contemplative} style={{transform: 'translateY(5%)'}} />
					</AbsoluteFill>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--blue)',
						alignItems: 'center',
						justifyContent: 'center',
						opacity: finalOpacity,
					}}
				>
					<div
						style={{
							width: '95%',
							overflow: 'hidden',
							border: '12px solid black',
							position: 'relative',
							transform: `scale(${finalScale}) translateY(${finalTranslate}px)`,
						}}
					>
						<img
							src={leopoldPlan}
							style={{
								maxWidth: '100%',
							}}
						/>
						<Overlay
							style={{
								transform: 'rotate(-90deg)',
								width: 230,
								height: 120,
								left: 52,
								top: 145,
								fontSize: '60px',
								transformOrigin: 'center center',
							}}
						>
							Gallery
						</Overlay>
						<Overlay
							style={{
								width: '345px',
								height: '226px',
								top: 91,
								left: 350,
								fontSize: '75px',
							}}
						>
							Salon
						</Overlay>
						<Overlay
							style={{
								width: '471px',
								height: '465px',
								top: 88,
								left: 345,
								clipPath:
									'polygon(0 50%, 75% 50%, 75% 0, 100% 0, 100% 100%, 0 100%)',
								opacity: porchOverlayOpacity2,
							}}
						>
							<div style={{transform: 'translateY(125px)', fontSize: '75px'}}>
								<span style={{opacity: opacity2}}>Porch</span>
							</div>
						</Overlay>
						<Overlay
							style={{
								width: '205px',
								height: '225px',
								top: 91,
								left: 1205,
							}}
						>
							<div style={{fontSize: '60px'}}>
								<span>Library</span>
							</div>
						</Overlay>
						<Overlay
							style={{
								width: '347px',
								height: '227px',
								top: 91,
								left: 822,
							}}
						>
							<div style={{fontSize: '75px'}}>
								<span>Office</span>
							</div>
						</Overlay>
						<Overlay
							style={{
								width: '231px',
								height: '228px',
								top: 90,
								right: 155,
							}}
						>
							<div style={{fontSize: '50px'}}>
								<span>Deep Work Chambers</span>
							</div>
						</Overlay>
						<Overlay
							style={{
								transform: 'rotate(90deg)',
								width: 226,
								height: 113,
								right: -22,
								top: 148,
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
							bottom: 0,
							transform: `translateY(${dewaneSlide}%)`,
						}}
					>
						<img
							src={dewane}
							width={500}
							style={{transform: `translateY(${90}px)`}}
						/>
						<div
							style={{
								position: 'absolute',
								transform: `translate(400px, -590px)`,
							}}
						>
							<svg
								width="400px"
								height="400px"
								viewBox="0 0 128 128"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--noto"
								preserveAspectRatio="xMidYMid meet"
							>
								<path
									d="M120.44 51.23a29.87 29.87 0 0 0 2.96-13.02c0-16.6-13.45-30.05-30.05-30.05c-3.89 0-7.61.75-11.03 2.1C77.95 6.45 72.22 4.1 66 4.1c-7.6 0-14.4 3.4-18.9 8.7c-3.5-1.9-7.5-3-11.7-3c-13.4.1-24.3 10.9-24.3 24.3c0 5 1.5 9.7 4.2 13.6c-5 4-8.5 9.9-9.2 16.8C4.8 77.9 14.7 90 28.3 91.3c3.2.3 6.2 0 9.1-.8c1.1 10.7 10.1 19 21.1 19c7 0 13.2-3.4 17-8.6c3.6 2.8 8.1 4.6 13.1 4.6c11 0 20.1-8.5 20.9-19.2C118 82.4 124 73.8 124 63.8c0-4.59-1.33-8.92-3.56-12.57z"
									fill="#ffffff"
									stroke="#000000"
									stroke-width="6"
									stroke-miterlimit="10"
									opacity={bubbleOpacity3}
								></path>
								<path
									d="M24.3 97.3c-4.5-.5-8.5 2.8-9 7.3s2.8 8.5 7.3 8.9c4.5.5 8.5-2.8 9-7.3s-2.8-8.5-7.3-8.9z"
									fill="#ffffff"
									stroke="#000000"
									stroke-width="4.5"
									stroke-miterlimit="10"
									opacity={bubbleOpacity2}
								></path>
								<path
									d="M9 114.3c-3-.3-5.7 1.9-6 4.9s1.9 5.6 4.9 5.9s5.7-1.9 6-4.9c.3-2.9-1.9-5.6-4.9-5.9z"
									fill="#ffffff"
									stroke="#000000"
									stroke-width="4.5"
									stroke-miterlimit="10"
									opacity={bubbleOpacity1}
								></path>
							</svg>
							<div
								style={{
									display: 'flex',
									position: 'absolute',
									transform: 'translate(-45%, -80%)',
									top: '50%',
									left: '50%',
									gap: '10px',
								}}
							>
								<img
									src={design}
									style={{width: '120px', opacity: bubbleOpacity3}}
								/>
								<img
									src={bulb}
									style={{width: '120px', opacity: bubbleOpacity3}}
								/>
							</div>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
