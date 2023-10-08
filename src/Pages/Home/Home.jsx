import { useLoaderData } from "react-router-dom";
import Header from "../../Component/Header/Header";
import HomeServices from "../../Component/HomeServices/HOmeServices";
import OurTeam from "../../Component/OurTeam/OurTeam";

const Home = () => {
    const data = useLoaderData();
  return (
    <div className="rounded-md p-1">
      <Header></Header>
      <HomeServices data={data}></HomeServices>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
