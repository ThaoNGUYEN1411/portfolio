import ProjetLisaBeaute from "/img/lisabeaute.webp";
import ProjetPromoSimplon from "/img/promoSimplon.webp";
import ProjetNewStyle from "/img/projet1.webp";
import LogoHtml from "/img/html.webp";
import LogoCSS from "/img/css-removebg-preview.webp";
import LogoJs from "/img/js.webp";
import LogoReact from "/img/React-icon.svg.webp";
import LogoNode from "/img/node.webp";
import LogoGit from "/img/git-removebg-preview.webp";
import LogoWordPress from "/img/wp-removebg-preview.webp";
import LogoFigma from "/img/figma.webp";
import LogoPhotoshop from "/img/photoshop.webp";
import LogoBootstrap from "/img/Bootstrap.webp";

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
							src={ProjetPromoSimplon}
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
						<img src={ProjetNewStyle} className="card-img-top" alt="..." />
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
						<img src={LogoHtml} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoCSS} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoJs} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoReact} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoNode} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoGit} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoWordPress} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoFigma} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoPhotoshop} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoBootstrap} alt="" className="logo-tech" />
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Portfolio;
