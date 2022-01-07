import Link from "next/link";

export default function FooterBar() {
    return (
        <footer>
            <div className="footer-widget">
                <div className="container">
                    <div className="copyright">
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <p>@ 2021 TonyZou. All right reserved</p>
                            </div>
                            <div className="col-xl-4">
                                <ul className="footer-menu">
                                    
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                <ul className="footer-social">
                                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>	
    )
}