import "./startPage.scss";
import Footer from "../Footer/Footer";
import Score from '../Score/Score';
import Options from '../Options/Options';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

const StartPage = () => {
	return (
		<div className="startPage__block d-flex flex-column justify-center p0 m0">
			<div>
				<h1>
					<p>space</p> <p>invaders</p>
				</h1>
			</div>
				<div className="startPage__item bg-alert">Start</div>
				<Score />
				<Options />
      <Footer />
		</div>
	);
};

export default StartPage;
