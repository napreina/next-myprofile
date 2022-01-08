import Image from "next/image"

export default function FeedArea() {
    return (
        <>
        <div className="feed-area  de-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">
						<div className="site-title mb-60 text-center">
							<h5 className="about-sub-title wh def">
								Client
							</h5>
							<h2 className="mb-0">
								What My Client Say?
							</h2>
						</div>
					</div>
				</div>
				<div className="feed-wpr feed-sldr owl-carousel owl-theme">
					<div className="feed-box">
						<div className="feed-qoute">
							<i className="fas fa-quote-left"></i>
						</div>
						<p>
							Tony is a very skilled programmer and project manager. I`ve had the pleasure of working with him, and he`s not only a great guy, but he`s an excellent problem-solver. We had a platform that was a mess from another programmer when we passed it along, and he was able to assess the situation, make a suggestion, and execute the project on time and on budget. 
							I would recommend considering Tony in the mix should you have a project that is a good fit
						</p>
						<div className="feed-bio">
							<Image src="/img/tony/client/tony.jpeg" layout='fixed' width={80} height={80} alt="thumb" />
							<div className="feed-name">
								<h5 className="mt-20"><a href="https://www.linkedin.com/in/tony-summers-56473b2/"> Tony Summery <i className="fa fa-link" aria-hidden="true"></i></a></h5>
								<span>Director at National Wildlife Federation</span>
							</div>
						</div>
					</div>
					<div className="feed-box">
						<div className="feed-qoute">
							<i className="fas fa-quote-left"></i>
						</div>
						<p>
							While working with Zou on various projects he demonstrated a deep understanding of Laravel and PHP, the ability to quickly pick up new frameworks, and a detail-oriented mindset. If I ever had questions I knew I could rely on Zou`s knowledge and expertise to help come up with new solutions. These qualities allowed the projects to run smoothly and deliver finished products to our customers faster.
							It was a pleasure working with Zou. I highly recommend working with him!
						</p>
						<div className="feed-bio">
							<Image src="/img/tony/client/michael.jpeg" layout='fixed' width={80} height={80} alt="thumb" />
							<div className="feed-name">
								<h5><a href="https://www.linkedin.com/in/mikehfudali/">Michael Fudali <i className="fa fa-link" aria-hidden="true"></i></a></h5>
								<span>Software Engineer at CME Group</span>
							</div>
						</div>
					</div>
					<div className="feed-box">
						<div className="feed-qoute">
							<i className="fas fa-quote-left"></i>
						</div>
						<p>
							He worked on our project with excellent results. He designed our complete system and modules based on our request. It was successful, and we could operate our site perfectly. Despite different time zones, he worked during our business hours and supported real-time communication.
							I recommend him if you have any complex design projects
						</p>
						<div className="feed-bio">
							<Image src="/img/tony/client/john.jpeg" layout='fixed' width={80} height={80} alt="thumb" />
							<div className="feed-name">
								<h5><a href="https://www.linkedin.com/in/john-brown-581599219/">John Brown <i className="fa fa-link" aria-hidden="true"></i></a></h5>
								<span>Senior Project Manager</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}