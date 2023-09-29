import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import leopold from './img/aldo-leopold.png';
import styled from 'styled-components';
import leopoldPlanClean from './img/leopold-plan-clean.png';
import leopoldSineWave from './img/leopold-sine-wave.png';
import contemplative from './img/contemplative.jpg';
import bern from './img/bern.png';

export const Thumbnail: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	const BlockTitle = styled.div`
		font-family: var(--block);
		font-size: 250px;
		text-align: center;
		font-weight: bold;
	`;

	return (
		<>
			<AbsoluteFill style={{backgroundColor: '#f4d940'}}>
				<BlockTitle
					style={{
						position: 'absolute',
						top: '25px',
						left: '50%',
						transform: 'translateX(-50%)',
						fontSize: '200px',
						width: '100%',
						letterSpacing: '.005em',
					}}
				>
					The Leopold
				</BlockTitle>
				<div
					style={{
						display: 'flex',
						height: '100%',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<div
						style={{
							width: '1000px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								border: '12px solid black',
								backgroundColor: 'white',
								width: '1500px',
								height: 'auto',
								boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',

								position: 'absolute',
								zIndex: 1,
								top: 550,
								left: 250,
								padding: '30px',
							}}
						>
							<img style={{}} src={leopoldPlanClean} />
						</div>

						<div
							style={{
								overflow: 'hidden',
								backgroundColor: 'white',
								border: '12px solid white',
								width: '1000px',
								height: '500px',
								position: 'relative',
								transform: 'translate(50px, -50px)',

								boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',
							}}
						>
							<img
								style={{
									position: 'absolute',
									height: '100%',
									width: '100%',
									objectFit: 'cover',
								}}
								src={contemplative}
							/>
						</div>
					</div>
					<div
						style={{
							alignSelf: 'flex-end',
							marginLeft: 'auto',
							flexShrink: 0,
							position: 'relative',
							zIndex: 10,
						}}
					>
						<img
							style={{
								display: 'block',
								height: '1000px',
								width: 'auto',
								marginLeft: 'auto',
								transform: 'translate(200px, -100px) scaleX(-1)',
							}}
							src={bern}
						/>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
