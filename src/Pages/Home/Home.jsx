import { useLoaderData } from "react-router-dom";
import Header from "../../Component/Header/Header";
import HomeServices from "../../Component/HomeServices/HOmeServices";
import OurTeam from "../../Component/OurTeam/OurTeam";
import ClientReview from "../../Component/ClientReview/ClientReview";
import Footer from "../../Component/Footer/Footer";
import ContactUS from "../../Component/ContactUS/ContactUS";

const Home = () => {
    const data = useLoaderData();
  return (
    <div className="rounded-md p-1">
      <Header></Header>
      <HomeServices data={data}></HomeServices>
      <OurTeam ></OurTeam>
      <ClientReview></ClientReview>
      <ContactUS></ContactUS>
      <Footer></Footer>
    </div>
  );
};

export default Home;
