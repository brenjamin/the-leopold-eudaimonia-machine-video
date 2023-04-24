import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import leopold from './img/aldo-leopold.png';
import styled from 'styled-components';
import leopoldPlanFull from './img/leopold-plan-full.png';
import leopoldPlanClean from './img/leopold-plan-clean.png';
import leopoldSineWave from './img/leopold-sine-wave.png';
import leopoldOverhead from './img/leopold.png';

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
								border: '12px solid white',
								backgroundColor: 'black',
								width: '1000px',
								height: 'auto',

								boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',
								padding: '20px 0',
								position: 'absolute',
								zIndex: 1,
								top: 500,
								left: 450,
							}}
						>
							<img style={{}} src={leopoldSineWave} />
						</div>

						<div
							style={{
								padding: '30px',
								overflow: 'hidden',
								backgroundColor: 'white',
								border: '12px solid black',
								width: '1300px',
								height: 'auto',
								transform: 'translate(200px, -50px)',
								position: 'relative',

								boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',
							}}
						>
							<img style={{}} src={leopoldPlanClean} />
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
								transform: 'translateX(300px)',
							}}
							src={leopold}
						/>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
