import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import leopold from './img/aldo-leopold.png';
import styled from 'styled-components';
import leopoldPlanFull from './img/leopold-plan-full.png';
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
							width: '50%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								padding: '20px',
								border: '12px solid black',
								backgroundColor: 'white',
								width: '750px',
								position: 'relative',
								transform: 'translate(-50px, -50px)',
								boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',
							}}
						>
							<img style={{}} src={leopoldPlanFull} />
						</div>

						<div
							style={{
								overflow: 'hidden',
								border: '12px solid black',
								width: '750px',
								height: '500px',
								position: 'absolute',
								top: 550,
								left: 450,
								boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',
							}}
						>
							<img style={{}} src={leopoldOverhead} />
						</div>
					</div>
					<div style={{width: '50%', alignSelf: 'flex-end'}}>
						<img
							style={{
								display: 'block',
								height: '700px',
								width: 'auto',
								marginLeft: 'auto',
								transform: 'translateX(100px)',
							}}
							src={leopold}
						/>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
