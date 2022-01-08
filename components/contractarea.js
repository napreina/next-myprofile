export default function ContractArea() {
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
											<span>+860-18641531562,</span> <br/>
											<span>+01-35363782588</span>
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
						
						<form className="contact-form" id="contact-form" action="https://themetum.com/koyta/koyta-two/php/contact.php" method="POST">	
							<h4 className="contact-tl">Send Message</h4>							
							<div className="row g-4">
								<div className="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
									<input type="text" name="name" className="form-control input-style-2" placeholder="Your Full Name*" />
								</div>								
								<div className="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
									<input type="email" name="email" className="form-control input-style-2" placeholder="Your Email Address*" />
								</div>								
								<div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
									<input type="text" name="subject" className="form-control input-style-2" placeholder="Subject..." />
								</div>
								<div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".5s">
									<textarea className="form-control input-style-2" name="message" placeholder="Your Message..."></textarea>
								</div>
								<div className="col-md-12 mt-50 contact-sub-btn text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s">
									<button type="submit" id="submit" className="tm-btn-2">
										Submit Message 
										<i className="fas fa-chevron-right"></i>
									</button>
								</div>
								<div className="col-md-12 mt-20">
									<p className="form-message"></p>
								</div>
							</div>
						</form>
						
					</div>
				</div>
			</div>
		</div>
        </>
    )
}