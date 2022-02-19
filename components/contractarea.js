export default function ContractArea({children}) {
    return (
        <>
        <div id="contact" className="contact-area de-pt wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">
						<div className="site-title mb-60 text-center">
							<h5 className="about-sub-title def">
								Contact
							</h5>
							<h2 className="mb-0">
								Contact ME
							</h2>
						</div>
					</div>
				</div>
				<div className="contact-wpr">
					<div className="contact-content">
						<div className="contact-lpm mb-100">
							<div className="row g-5">
								<div className="col-xl-4 col-md-6 col-lg-6">
									<div className="contact-addr-box">
										<div className="contact-addr-icon">
											<i className="fas fa-phone"></i>
										</div>
										<div className="contact-addr-desc">
											<h4>Phone Number</h4>
											{/* <span>+860-18641531562,</span> <br/> */}
											<span>+012202135621</span>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-md-6 col-lg-6">
									<div className="contact-addr-box">
										<div className="contact-addr-icon">
											<i className="fas fa-envelope"></i>
										</div>
										<div className="contact-addr-desc">
											<h4>Mail Address</h4>
											<span>tony.fullstack.dev@gmail.com</span><br/>
											<span>tony.fullstack@outlook.com</span>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-md-6 col-lg-6">
									<div className="contact-addr-box">
										<div className="contact-addr-icon">
											<i className="fas fa-phone"></i>
										</div>
										<div className="contact-addr-desc">
											<h4>Skype Address</h4>
											<span>Unique_515</span><br/> 
											<span>live:.cid.3c1ad9073f878c5</span> 
										</div>
									</div>
								</div>								
							</div>
						</div>
						{children}						
					</div>
				</div>
			</div>
		</div>
        </>
    )
}