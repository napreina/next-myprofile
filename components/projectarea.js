import Image from 'next/image';

export default function ProjectArea() {
    return (
        <>
        <div id="work" className="project-area bg de-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">
						<div className="site-title mb-60 text-center">
							<h5 className="about-sub-title def">
								Gallery
							</h5>
							<h2 className="mb-0">
								My Gallery Projects
							</h2>
						</div>
					</div>
				</div>
				<div className="project-wpr">
                    <div id="filters" className="toolbar text-center mb-40">
                        <button className="btn fil-cat filter active"  data-filter="all">
                               All
                        </button>
                        <button className="btn fil-cat filter" data-rel="web" data-filter=".web" >
                            Full Development
                        </button>
                        <button className="btn fil-cat filter" data-rel="flyers" data-filter=".flyers">
                            Updated & Upgraded Site
                        </button>
                        <button className="btn fil-cat filter" data-rel="graphic" data-filter=".graphic">
                            Bug & Minor Issue Fix
                        </button>
                    </div>
                    <div id="portfolio" className="magnific-mix-gallery">
                        <div className="portfolio-grid grid-3">
                            <div className="project-box tile scale-anm web graphic" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/jiuxian.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>01. Jiu Xian</h5>
                                            <span>China Famous Ecommerce Website</span>
                                            <a href="/img/tony/portfolio/jiuxian.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box tile scale-anm flyers wordpress">
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/skyquota.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>02. SkyQuota</h5>
                                            <span>Medium Size CRM System</span>
                                            <a href="/img/tony/portfolio/skyquota.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box tile scale-anm web illus">
                              <div className="port-pic">
                                    <Image src="/img/tony/portfolio/chefahome.png" layout='fixed' width={370} height={188} className="ht" alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>03. Chefahome</h5>
                                            <span>Chef Booking System </span>
                                            <a href="/img/tony/portfolio/chefahome.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box tile scale-anm web illus">
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/wejunket1.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>04. Wejunket</h5>
                                            <span>Virtual Tour and Game System</span>
                                            <a href="/img/tony/portfolio/wejunket1.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box tile scale-anm web" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/cms-wejunket.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>05. CMS for Wejunket System</h5>
                                            <span>Web Design</span>
                                            <a href="/img/tony/portfolio/cms-wejunket.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-box tile scale-anm bcards" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/fclub.webp" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>06. FClub </h5>
                                            <span>China Ecommerce Website</span>
                                            <a href="/img/tony/portfolio/fclub.webp" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="project-box tile scale-anm flyers wordpress" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/globalgoldpost.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>07. Global Gold Post </h5>
                                            <span>US Blog Website</span>
                                            <a href="/img/tony/portfolio/globalgoldpost.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="project-box tile scale-anm flyers wordpress" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/jngdong.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>08. Jing Dong </h5>
                                            <span>China Ecommerce Website</span>
                                            <a href="/img/tony/portfolio/jngdong.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="project-box  tile scale-anm flyers wordpress" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/locallolo.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>09. Locallolo </h5>
                                            <span>US Business Advertising Website</span>
                                            <a href="/img/tony/portfolio/locallolo.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="project-box  tile scale-anm flyers wordpress" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/paystubsnow.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>10. PayStufsNow </h5>
                                            <span>US Tax Calculation System</span>
                                            <a href="/img/tony/portfolio/paystubsnow.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="project-box  tile scale-anm web illus" >
                                <div className="port-pic">
                                    <Image src="/img/tony/portfolio/stoprat-admin.png" layout='fixed' width={370} height={188} alt="thumb" />
                                    <div className="port-overlay">
                                        <div className="port-content">
                                            <h5>10. Stoprap </h5>
                                            <span>France Stoprap Admin Portal</span>
                                            <a href="/img/tony/portfolio/stoprat-admin.png" className="item popup-link">
                                                <i className="fas fa-eye"></i>
                                            </a>
                                        </div>
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