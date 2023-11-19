import React from "react";
import ImageAbout from "/img/propos2.webp";

const About = () => {
	return (
		<section id="propos" className="mb-5">
			<div className="container mt-4 pt-4">
				<h2 className="text-center text-uppercase pb-3">A Propos</h2>
				<div className="row mt-4">
					<div className="col-lg-4">
						<img
							src={ImageAbout}
							className="imageAboutPage"
							alt="Developpeuse"
						/>
					</div>
					<div className="col-lg-8">
						<p>
							Ayant une bonne base en mathématiques et en logique, étant
							sérieuse, rigoureuse, dynamique. Je suis passionnée par la
							programmation et le numérique. J'ai suivi une formation de créer
							des sites Web en utilisant CMS (Content Management System) comme
							Wordpress.Actuellement, je suis en formation développeur Web 7
							mois intensif chez Simplon. Je recherche une entreprise pour
							m'accueillir pendant 2 mois de stage (22/5 - 18/7/2023) sans
							rémunération.
						</p>
						<div className="row mt-3">
							<div className="col-md-12">
								<ul>
									<li>Nom &amp; prénom: Thi Phuong Thao NGUYEN</li>
									<li>Age: 31</li>
									<li>Poste: Développeur Web</li>
								</ul>
							</div>
						</div>
						<div className="mt-3">
							<div className="accordion" id="accor">
								<div className="accordion-item">
									<h2 className="accordion-header pt-0">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											Langues
										</button>
									</h2>
									<div
										id="collapseOne"
										className="accordion-collapse collapse show"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<ul>
												<li>Français : Niveau avancé</li>
												<li>Anglais : Niveau intermédiaire</li>
												<li>Vietnamien : Langue maternelle</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header pt-0">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo"
										>
											Centre d'intêret
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<ul>
												<li>Musique</li>
												<li>Yoga</li>
												<li>Lecture</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
