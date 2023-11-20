import Logo from "/img/logo-final2.webp";
import "../../assets/globalStyle.css";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-nav fixed-top p-0 px-2">
				<div className="container-fluid">
					<a href="/" className="navbar-brand pt-2 ps-lg-5 ps-sm-2">
						<img src={Logo} alt="" id="logo" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						{/* <FontAwesomeIcon icon={}/> */}
						<span className="navbar-toggler-icon"> </span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="link nav-item pe-4">
								<a
									className="nav-link active text-uppercase fw-semibold"
									aria-current="page"
									href="#"
								>
									Accueil
								</a>
							</li>
							<li className="link nav-item pe-4">
								<a
									className="nav-link text-uppercase fw-semibold"
									href="#propos"
								>
									A propos
								</a>
							</li>
							<li className="link nav-item pe-4">
								<a
									className="nav-link text-uppercase fw-semibold"
									href="#portfolio"
								>
									Compétences
								</a>
							</li>
							<li className="link nav-item pe-4">
								<a
									className="nav-link text-uppercase fw-semibold"
									href="#contact"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
