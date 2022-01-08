import Image from 'next/image';

export default function SideMenu() {
    return (
        <div className="side-menu">
            <div className="menu-tab">
                <div id="one"></div>
                <div id="two"></div>
                <div id="three"></div>
            </div>
            <div className="menu-hide">
                <div className="side-about">
                    <Image src="/img/tony/new_position.png"
                        layout='fixed' width={240} height={160}
                        alt="thumb" />
                    <h5 className="about-sub-title mt-30">
                        Finding New Position
                    </h5>
                    <p className=" mb-0">
                        Hey,  
                        My schedule is flexible, and I would be available to work at your convenience. I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.
                        Thank you for your consideration.
                    </p>
                </div>
                <div className="side-social-content mt-30">
                    <div className="side-address mb-30">
                        <div className="side-addr-box">
                            <div className="side-addr-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="side-addr-desc">
                                <span>+860-18641531562</span>
                            </div>
                        </div>
                        <div className="side-addr-box">
                            <div className="side-addr-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-addr-desc">
                                <span>tony.fullstack.dev@gmail.com</span> 
                            </div>
                        </div>
                        <div className="side-addr-box">
                            <div className="side-addr-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="side-addr-desc">
                                <span>Liaoning Dandong wuan bao district, China</span> 
                            </div>
                        </div>
                    </div>
                    <ul className="side-social">
                        <li><a href="http://github.com/tony-fullstack-515"><i className="fab fa-git"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/tony-zou-88397519a/"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}