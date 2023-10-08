import { useEffect, useState } from "react";
import LodeTeamMember from "./LodeTeamMember";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);

  return (
    <div className="">
      <div className=" mt-5 lg:mt-10  md:p-5 rounded-md">
        <div className="my-5 mx-auto max-w-2xl space-y-5 text-center p-2 md:p-4">
          <h2 className="font-Oswald  text-3xl font-semibold text-purple-500 ">
            Our Team
          </h2>
          <p>
            Our team is a dynamic blend of creative minds and skilled
            professionals. Together, we work harmoniously to tackle challenges,
            innovate solutions, and drive success. With diverse expertise and
            unwavering dedication, we are committed to achieving excellence and
            making a positive impact in every endeavor we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 rounded-md">
          {" "}
          {teamMembers.map((singleData) => (
            <LodeTeamMember
              key={singleData.id}
              singleData={singleData}
            ></LodeTeamMember>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
