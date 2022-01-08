import Layout from "../components/layouts/layouts";
import HeroSection from "../components/hero.section";
import AboutArea from "../components/aboutarea";
import SkillArea from "../components/skillarea";
import CounterArea from "../components/counterarea";
import ProjectArea from "../components/projectarea";
import FeedArea from "../components/feedarea";
import ContractArea from "../components/contractarea";
import ScreenTopButton from "../components/screentopbutton";
import PreloaderComp from "../components/preloader.comp";
import ContactForm from "../components/contactform";

export default function Home() {
  return (
    <Layout>
      <PreloaderComp />
      <main className="main">
      <HeroSection />
      <AboutArea />
      <SkillArea />
      <CounterArea />
      <ProjectArea />
      <FeedArea />
      <ContractArea>
        <ContactForm/>
      </ContractArea>
      <ScreenTopButton />
      </main>
      <div className="clearfix"></div>
    </Layout>
  );
}
