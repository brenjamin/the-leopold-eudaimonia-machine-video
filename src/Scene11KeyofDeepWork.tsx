import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import leopoldPlanClean from './img/leopold-plan-clean.png';

export const Scene11KeyofDeepWork: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const imageScale = interpolate(frame, [60, 80], [1, 2.4], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const imageX = interpolate(frame, [60, 80], [0, -510], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const imageY = interpolate(frame, [60, 80], [0, 113], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const titleOpacity = interpolate(frame, [275, 285], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const titleY = interpolate(frame, [275, 285], [-20, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const imageSlide = interpolate(frame, [275, 285], [0, 75], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const libraryOpacity = interpolate(
		frame,
		[115, 125, 370, 380],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const chambersOpacity = interpolate(
		frame,
		[135, 145, 370, 380],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const contemplativeOpacity = interpolate(
		frame,
		[165, 175, 370, 380],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

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

	const bernOpacity = interpolate(frame, [380, 390], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const normalizedWalkerStep = (offset: number = 0) => {
		const walkerStep = Math.floor((frame + offset) / (fps / 6));
		return (walkerStep - Math.floor(frame / fps) * 10) * 112;
	};

	const bernX = interpolate(frame, [380, 515, 516, 651], [0, 475, -475, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const bernScale = interpolate(frame, [515, 516], [1, -1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	//animation:walk .8s steps(6) infinite;

	// /* Animación de personaje caminando: Simplemente mueve el sprite sheet hacia la izquierda, realizando el movimiento. */
	// @keyframes walk {
	//   /* Partimos de la primera viñeta del sprite sheet */
	//   0% { background-position:0 }
	//   /* El tamaño total de ancho del sprite. Es negativo para que no "camine" hacia atrás */
	//   100% { background-position:-672px }

	return (
		<>
			<AbsoluteFill
				style={{backgroundColor: 'var(--yellow)', justifyContent: 'center'}}
			>
				<Title
					style={{
						position: 'absolute',
						top: '25px',
						fontSize: '200px',
						left: '50%',
						width: '100%',
						opacity: titleOpacity,
						transform: `translate(-50%, ${titleY}px)`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<svg
						width="200px"
						height="200px"
						viewBox="0 0 1024 1024"
						className="icon"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M911.051114 698.265218c0-2.701009 0-5.398947-0.198633-8.099957-3.42592-50.779593-41.097733-112.622266-136.131698-119.797654l-5.007823-0.330715-2.370294-23.644584 5.203385-1.119107c62.766218-13.633033 89.439455-54.926328 89.439455-92.925784 0-3.294863-0.263139-6.521126-0.593854-9.748412-5.533076-44.914778-49.460828-89.240821-135.143648-86.869503-8.298591 0.198634-14.688659 2.701009-18.836418 7.378118-3.42592 3.884621-5.334443 9.418721-5.334443 15.21084 0 0.792487 0 1.517398 0.063481 2.306814l13.043275 128.493513-4.875742 1.251188c-0.195562 0.047099-0.326619 0.114675-0.4587 0.161773L599.33537 346.773577c-5.266866-8.497224-9.812917-17.979426-13.633033-28.055481h120.063865a21.900907 21.900907 0 0 0 14.884221-5.796215c29.437727-27.266066 42.544483-75.475707 32.532932-120.063865-12.908122-57.8229-53.739645-96.945558-101.490585-97.339754h-0.195562l-412.940118 0.067576c-0.657334 0-1.186683 0.263139-1.844018 0.32662-6.916345 1.318764-31.811093 5.796215-31.811093 5.796215-66.452205 26.345593-103.463612 113.936935-84.364055 199.488697 5.728638 25.620682 15.147359 49.002128 28.123058 69.48393l141.335082 209.500248c5.071304 8.231014 9.417697 17.386597 13.171261 27.198489H183.036908a22.01763 22.01763 0 0 0-14.884221 5.796215c-29.437727 27.266066-42.481002 75.540211-32.532932 120.060793 12.908122 57.694914 55.12189 97.605964 102.738701 97.276274 0.067576 0 0.131057 0.067576 0.263138 0.067576H651.429632c-0.131057 0 32.469451-6.191435 32.469451-6.191435 3.358344-1.335146 6.390068-3.345033 9.583567-5.041611 15.113571 4.265506 31.252052 7.738525 49.494617 9.451485l4.87267 0.461773 4.015678 39.91105s-68.8225 8.098933-72.576063 59.667941c39.580335-16.334043 89.570512-18.043931 127.108195-5.003728 2.701009-6.191435 14.819716-33.787192 18.704338-42.544483-7.111907-2.107156-24.03878-7.246036-24.03878-7.246036l-0.789416-4.083255-4.677108-45.640712 5.269938-1.119107c76.922457-16.335066 110.184395-73.169917 110.184395-124.937559z"
							fill="#27323A"
						/>
						<path
							d="M646.624538 139.317004h4.87267c26.342522 0.263139 50.64444 26.21044 58.943031 63.157343 1.517398 6.848769 2.239237 13.831667 2.239237 20.74494 0 20.154159-7.044331 38.596381-18.043931 51.700066H560.01715c-0.856992-0.131057-1.777465 0.067576-2.633433 0H331.880141c6.716688-16.003328 10.601309-33.653063 10.601309-51.963204 0-10.011551-1.05153-20.151087-3.290767-30.031581-4.677108-21.008079-14.027229-38.396724-25.158911-53.544083 92.731246 0 299.92468-0.063481 332.592766-0.063481zM253.771002 783.621418s-15.015278 3.027629-15.41357 3.095206c-27.067432 0.195562-51.567984-25.684163-59.998656-63.029357-1.514326-6.848769-2.239237-13.896172-2.239237-20.812517 0-20.087606 7.047403-38.592286 18.047002-51.700066h119.73315c6.455597 57.826995-18.77089 116.112691-60.128689 132.446734z"
							fill="#F4CE73"
						/>
						<path
							d="M318.116051 786.781129c25.289968-30.162638 41.162238-71.324876 41.162238-116.439311 0-14.951797-1.648455-30.230214-5.007823-45.444127-5.662086-25.222391-14.884221-48.274145-27.529205-68.559361l-141.398563-209.563729c-9.880493-15.672613-17.389668-34.377974-21.9992-55.125986a158.763658 158.763658 0 0 1-3.820117-34.641112c0-51.504503 24.437071-99.84213 61.448478-114.530788 0.067576 0 17.058953-3.095205 17.058954-3.095206 26.21044 0.657334 50.182668 26.608732 58.349176 63.093862 6.58563 29.30667-1.514326 61.579535-19.557233 78.307773a21.897835 21.897835 0 0 0-5.469596 24.03878 21.775993 21.775993 0 0 0 20.353817 13.896172h248.288096c5.732734 18.704337 12.843618 36.417553 22.656534 51.963204L667.403267 525.962724c-75.013934 34.394356-102.644504 94.260931-102.644504 143.786264 0 3.689059 0.131057 7.378118 0.461772 10.932024 2.93036 35.763291 21.800566 76.184235 61.151551 106.100117H318.116051z"
							fill="#F4CE73"
						/>
						<path
							d="M735.992321 783.158622c-62.301374-5.533076-100.762603-57.165565-106.558818-105.244148-5.203385-43.269394 13.963748-97.866031 83.244949-121.510615l7.114979-2.437871 1.908522 18.57328s-74.156942 31.349321-41.162237 92.599164c24.170861-37.604236 46.365623-41.293295 46.365623-41.293295l16.334042 159.971843-7.24706-0.658358zM752.78916 403.608428l7.242964 0.724911c27.85992 2.768586 40.043131 23.44595 42.150288 41.822644 2.306814 21.008079-7.900299 46.49668-32.138737 54.663189l-7.111907 2.303742-10.142608-99.514486zM791.054826 779.406083l-16.664758-163.859536 7.378118 0.855968c33.916201 3.952197 60.986705 34.245892 65.727295 73.762746 4.740589 39.843474-14.556578 73.827251-49.19769 86.606365l-7.242965 2.634457z"
							fill="#79CCBF"
						/>
						<path
							d="M529.592398 445.380901h-211.739486c-9.320428 0-16.86032-7.539892-16.860319-16.860319 0-9.320428 7.539892-16.86032 16.860319-16.86032h211.738462c9.317356 0 16.86032 7.539892 16.860319 16.86032 0 9.320428-7.542963 16.86032-16.859295 16.860319zM574.820484 516.544003H363.082023c-9.320428 0-16.86032-7.542963-16.86032-16.86032 0-9.320428 7.539892-16.86032 16.86032-16.860319h211.738461c9.317356 0 16.86032 7.539892 16.86032 16.860319 0 9.317356-7.542963 16.86032-16.86032 16.86032zM618.667349 553.967012h-211.739485c-9.320428 0-16.86032 7.542963-16.86032 16.860319 0 9.320428 7.539892 16.86032 16.86032 16.86032h184.388437c8.052858-11.640552 17.963044-22.835714 30.311101-33.126786-0.988049-0.183275-1.908522-0.593853-2.960053-0.593853z"
							fill="#FFFFFF"
						/>
					</svg>
					The Key of Deep Work
				</Title>
				<div
					style={{
						width: '95%',
						overflow: 'hidden',
						border: '12px solid black',
						position: 'relative',
						margin: '0 auto',
						backgroundColor: 'white',
						padding: '5rem',
						transform: `translateY(${imageSlide}px)`,
					}}
				>
					<div
						style={{
							transform: `scale(${imageScale}) translate(${imageX}px, ${imageY}px)`,
							position: 'relative',
						}}
					>
						<div
							id="bern"
							style={{
								top: -300,
								right: 460,
								position: 'absolute',
								backgroundPosition: `${normalizedWalkerStep() * -1}px 0`,
								transform: `scaleX(${bernScale}) translateX(${bernX}px)`,
								transformOrigin: 'center center',
								zIndex: 10,
								opacity: bernOpacity,
							}}
						></div>
						<img
							src={leopoldPlanClean}
							style={{
								maxWidth: '100%',
							}}
						/>

						<Overlay
							style={{
								width: '198px',
								height: '222px',
								top: 5,
								right: 360,
								opacity: libraryOpacity,
							}}
						>
							<div style={{fontSize: '60px'}}>
								<span>Library</span>
							</div>
						</Overlay>
						<Overlay
							style={{
								width: '222px',
								height: '222px',
								top: 5,
								right: 130,
								opacity: chambersOpacity,
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
								right: -41,
								top: 59,
								fontSize: '40px',
								transformOrigin: 'center center',
								opacity: contemplativeOpacity,
							}}
						>
							Contemplative
						</Overlay>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
