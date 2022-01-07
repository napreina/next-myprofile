import Layout from "../components/layouts/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div id="home" className="hero-section">
        <div
          className="hero-single-2 clippath-circle jarallax d-flex"
          data-jarallax='{"speed": 0.2}'
          style={{
            backgroundImage: "url('/public/img/tony/02.header.jpg')",
          }}
        >
          <canvas className="canvasParticles-two"></canvas>
          <div className="container">
            <div className="row g-5">
              <div className="col-xl-8">
                <div
                  className="hero-content-2 wow fadeInLeft"
                  data-wow-duration="4s"
                  data-wow-delay=".2s"
                >
                  <div className="hero-desc">
                    <h5 className="hero-sub-title">Tony Zou</h5>
                    <h2 className="hero-title">
                      I’m a
                      <span className="typed-strings">
                        <span className="type_color">Full Stack Developer</span>
                        <span className="type_color">Team Player</span>
                        <span className="type_color">Clear Communicator</span>
                        <span className="type_color">
                          Time Management Master{" "}
                        </span>
                        <span className="type_color">
                          Creative Thinking Developer{" "}
                        </span>
                      </span>
                      <span className="typed"></span>
                    </h2>
                    <div className="header-description">
                      <p>
                        I think outside the box and come up with creative
                        solutions in order to help our web application stand out
                        from the competition.
                      </p>
                    </div>
                    <div className="hero-btn">
                      <a
                        href="./assets/resume/1_Tony_Zou_-_Full_Stack_PHP_Developer.pdf"
                        target="_blank"
                        className="tm-btn-1 demo2"
                      >
                        Download CV <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="hero-2-img wow fadeInRight"
                  data-wow-duration="4s"
                  data-wow-delay=".2s"
                >
                  <Image layout="fill" src="/public/img/tony/header-right.png" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
