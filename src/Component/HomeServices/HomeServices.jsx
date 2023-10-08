import PropTypes from 'prop-types'
import LodeHomeData from "./LodeHomeData";

const HomeServices = ({ data }) => {
  return (
    <div>
      <div className="bg-[#eee] mt-5 lg:mt-10  md:p-5 rounded-md">
        <div className="my-5 mx-auto max-w-2xl space-y-5 text-center p-2 md:p-4">
          <h2 className="font-Oswald  text-3xl font-semibold text-purple-500 ">
            Our Services
          </h2>
          <p>
            The Bangladesh Cultural Service is a vibrant showcase of the nation
            is rich heritage. It encompasses a diverse array of traditional
            music, dance, art, and festivals. This cultural tapestry reflects
            the country is history and values, celebrating unity in diversity.
            It is a testament to the enduring spirit and identity of Bangladesh.
          </p>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md"> {data.map(singleData=> <LodeHomeData key={singleData.id} singleData={singleData}></LodeHomeData>)}</div>
      </div>
    </div>
  );
};

HomeServices.propTypes = {
    data: PropTypes.array.isRequired,
}
export default HomeServices