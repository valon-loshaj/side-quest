import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{/* Add more navigation links here */}
			</ul>
		</nav>
	);
};

export default Navigation;
