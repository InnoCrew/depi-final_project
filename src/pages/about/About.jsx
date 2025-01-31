import NewsSection from "../../components/newsSection/NewsSection";
import Sponsors from "../../components/sponsors/Sponsors";
import StatisticsSection from "../../components/statisticsSection/StatisticsSection";
import TravelTipsForm from "../../components/TravelTipsForm/TravelTipsForm";
import FooterContent from "../../components/footer/FooterContent";

const About = () => {
  return (
    <>
      <StatisticsSection />
      <NewsSection />
      <Sponsors />
      <TravelTipsForm />
      <FooterContent />
    </>
  );
};

export default About;
