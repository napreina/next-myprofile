import Link from "next/link";
import Image from "next/image";

export default function AboutArea() {
    return (
        <>
        <div id="about" className="about-area de-padding">
			<div className="container">
				<div className="about-wpr">
					<div className="row">
						<div className="col-xl-6">
							<div className="about-left wow fadeInLeft" data-wow-duration="4s" data-wow-delay=".2s">
								<div className="about-pic">
									<Image src="/img/tony/about-me.jpg" layout="responsive" width={540} height={540} alt="thumb" />
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="about-right wow fadeInRight" data-wow-duration="4s" data-wow-delay=".2s">
								<div className="about-right-content">
									<h5 className="about-sub-title">
										About Me
									</h5>
									<h2 className="about-title">
										Hi there, I’m Tony Zou
									</h2>
									<h5 className="about-title-3">
										Experienced Full Stack Developer
									</h5>
									<div className="about-txt mb-30">
										<p>
											-  Dedicated and efficient full stack developer with 6+ years experience in bringing forth expertise in design, development, deployment, testing, and maintenance of software systems.   Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. 
										</p>
										<p className="mb-0">
											-  Certified in both F/E and B/E technologies. LAMP (Linux, Apache, MySql, PHP), MERN (Mongo, Express, React, Node), Laravue (Laravel, Vue). Spearheaded successful transition from Dom(Document Object Model) structure to SPA(Single Page Application) which cut latency by 35% and increased effectiveness of database administrators by 15%.
										</p>
									</div>
									<div className="about-btns">
										<a href="/resume/Tony_Zou_-_Full_Stack_PHP_Developer.pdf" className="tm-btn-2">
											Download CV 
											<i className="fas fa-arrow-down"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
}