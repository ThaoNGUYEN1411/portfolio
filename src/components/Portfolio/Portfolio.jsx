import ProjetLisaBeaute from "/img/lisabeaute.webp";

const Portfolio = () => {
	return (
		<div className="projet-tech container-fluid" id="lien-text">
			<section className="container" id="portfolio">
				<h2 className="text-center text-uppercase pb-3">Portfolio</h2>
				<div className="row d-flex">
					<div
						className="card col-lg-4 me-lg-5 pt-4"
						style={{ width: "25rem" }}
					>
						<img
							src="assets/img/projet1.png"
							className="card-img-top"
							alt="New style"
						/>
						<div className="card-body">
							<h5 className="card-title">New Style</h5>
							<p className="card-text">HTML/CSS</p>
							<a
								href="https://github.com/ThaoNGUYEN1411/NewStyle.github.io"
								className="btn btn-primary"
								tager="blank"
							>
								Link <i className="fab fa-github" />
							</a>
						</div>
					</div>
					<div className="card col-lg-4 me-5 pt-4" style={{ width: "25rem" }}>
						<img
							src="assets/img/projet2.png"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Kid to kid</h5>
							<p className="card-text">Wordpress</p>
							<a
								href="https://thao.projetfilrouge.org/"
								className="btn btn-primary"
								tager="blank"
							>
								Link <i className="fab fa-github" />
							</a>
						</div>
					</div>
					<div className="card col-lg-4 pt-4" style={{ width: "25rem" }}>
						<img src={ProjetLisaBeaute} className="card-img-top" alt="" />
						<div className="card-body">
							<h5 className="card-title">Lisa Beauté</h5>
							<p className="card-text">HTML/CSS/Responsive</p>
							<a href="#" className="btn btn-primary" tager="blank">
								Link <i className="fab fa-github" />
							</a>
							<a href="#" className="btn btn-primary" tager="blank">
								Link <i className="fab fa-github" />
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* ---technique---- */}
			<section className="container mt-5" id="tech">
				<h3 className="text-center text-uppercase text-center mb-4">
					STACK TECHNIQUE
				</h3>
				<ul className="list-logo d-flex list-unstyled">
					<li>
						<img src="assets/img/html.png" alt="" className="logo-tech" />
					</li>
					<li>
						<img
							src="assets/img/css-removebg-preview.png"
							alt=""
							className="logo-tech"
						/>
					</li>
					<li>
						<img src="assets/img/js.png" alt="" className="logo-tech" />
					</li>
					<li>
						<img
							src="assets/img/React-icon.svg.png"
							alt=""
							className="logo-tech"
						/>
					</li>
					<li>
						<img src="assets/img/node.webp" alt="" className="logo-tech" />
					</li>
					<li>
						<img
							src="assets/img/git-removebg-preview.png"
							alt=""
							className="logo-tech"
						/>
					</li>
					<li>
						<img
							src="assets/img/wp-removebg-preview.png"
							alt=""
							className="logo-tech"
						/>
					</li>
					<li>
						<img
							src="assets/img/fegma-removebg-preview.png"
							alt=""
							className="logo-tech"
						/>
					</li>
					<li>
						<img
							src="assets/img/photoshop-removebg-preview.png"
							alt=""
							className="logo-tech"
						/>
					</li>
					<li>
						<img
							src="assets/img/Bootstrap_logo.svg-removebg-preview.png"
							alt=""
							className="logo-tech"
						/>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Portfolio;
