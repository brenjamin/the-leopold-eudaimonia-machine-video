import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

import gallery from './img/gallery.jpg';
import salon from './img/cafe.jpg';
import porch from './img/porch.jpg';
import office from './img/office.jpg';
import library from './img/library.jpg';
import chambers from './img/deep-work-chambers.jpg';

export const Scene9Effacement: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 150px;
		display: 'inline-block';
	`;

	const imageSlide = interpolate(frame, [0, 200], [width / 12, -width / 12]);

	const circleProgress = interpolate(frame, [0, 350], [75, 1.5], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const galleryOpacity = interpolate(frame, [60, 80], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const salonOpacity = interpolate(frame, [60, 80, 110, 130], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const porchOpacity = interpolate(frame, [110, 130, 160, 180], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const officeOpacity = interpolate(frame, [160, 180, 210, 230], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const libraryOpacity = interpolate(
		frame,
		[210, 230, 260, 280],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const chambersOpacity = interpolate(
		frame,
		[260, 280, 350, 370],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const laserOpacity = interpolate(frame, [400, 420], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'black',
				}}
			>
				<AbsoluteFill
					style={{
						clipPath: `circle(${circleProgress}% at 50% 50%)`,
						position: 'relative',
						backgroundColor: 'white',
					}}
				>
					<div style={{height: '100%', width: '100%', position: 'absolute'}}>
						<img
							src={gallery}
							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
								top: 0,
								opacity: galleryOpacity,
							}}
						/>
					</div>
					<div
						style={{
							height: '100%',
							width: '100%',
							position: 'absolute',
							opacity: salonOpacity,
							zIndex: 2,
						}}
					>
						<img
							src={salon}
							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
								top: 0,
							}}
						/>
					</div>
					<div
						style={{
							height: '100%',
							width: '100%',
							position: 'absolute',
							opacity: porchOpacity,
							zIndex: 3,
						}}
					>
						<img
							src={porch}
							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
								top: 0,
							}}
						/>
					</div>
					<div
						style={{
							height: '100%',
							width: '100%',
							position: 'absolute',
							opacity: officeOpacity,
							zIndex: 4,
						}}
					>
						<img
							src={office}
							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
								top: 0,
							}}
						/>
					</div>
					<div
						style={{
							height: '100%',
							width: '100%',
							position: 'absolute',
							opacity: libraryOpacity,
							zIndex: 5,
						}}
					>
						<img
							src={library}
							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
								top: 0,
							}}
						/>
					</div>
					<div
						style={{
							height: '100%',
							width: '100%',
							position: 'absolute',
							opacity: chambersOpacity,
							zIndex: 6,
						}}
					>
						<img
							src={chambers}
							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
								top: 0,
							}}
						/>
					</div>
				</AbsoluteFill>
				<AbsoluteFill>
					<Title
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 1,
							textAlign: 'center',
							padding: '20px 40px',
							backgroundColor: 'rgba(0,0,0,.8)',
							color: 'white',
							opacity: galleryOpacity,
						}}
					>
						Gallery
					</Title>
					<Title
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 1,
							textAlign: 'center',
							color: 'white',
							padding: '20px 40px',
							backgroundColor: 'rgba(0,0,0,.8)',
							opacity: salonOpacity,
						}}
					>
						Salon
					</Title>
					<Title
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 1,
							textAlign: 'center',
							color: 'white',
							padding: '20px 40px',
							backgroundColor: 'rgba(0,0,0,.8)',
							opacity: porchOpacity,
						}}
					>
						Porch
					</Title>
					<Title
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 1,
							textAlign: 'center',
							color: 'white',
							opacity: officeOpacity,
							padding: '20px 40px',
							backgroundColor: 'rgba(0,0,0,.8)',
						}}
					>
						Office
					</Title>
					<Title
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 1,
							textAlign: 'center',
							color: 'white',
							opacity: libraryOpacity,
							padding: '20px 40px',
							backgroundColor: 'rgba(0,0,0,.8)',
						}}
					>
						Library
					</Title>
					<Title
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 1,
							textAlign: 'center',
							color: 'white',
							opacity: chambersOpacity,
							padding: '20px 40px',
							backgroundColor: 'rgba(0,0,0,.8)',
						}}
					>
						Deep Work Chambers
					</Title>
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							width: '40px',
							height: '40px',
							borderRadius: '50%',
							backgroundColor: 'white',
							transform: 'translate(-50%, -50%)',
							boxShadow: '0px 0px 82px 14px rgba(255,255,255,1)',
							opacity: laserOpacity,
						}}
					></div>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
