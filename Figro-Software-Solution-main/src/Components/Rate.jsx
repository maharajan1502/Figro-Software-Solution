import React from "react";

const stats = [
  { percentage: "75%", description: "Reduction in Client Cost" },
  { percentage: "75%", description: "Increase in Client Satisfaction" },
  { percentage: "75%", description: "Reduction in Time-To-Market for projects" },
];

const Rate = () => {
  return (
    <div className="space-y-10 m-10 md:m-20 text-center">
      {/* Heading */}
      <h1 className="font-bold text-4xl text-blue-950 max-w-2xl mx-auto">
        We're a team of enthusiastic and skilled individuals
      </h1>
      <h4 className="font-bold text-xl text-blue-500 max-w-3xl mx-auto">
        "United online, igniting innovation and shaping the future, one virtual connection at a time."
      </h4>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-40 pt-10">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-5 text-center">
            <h1 className="font-bold text-5xl text-blue-950">{stat.percentage}</h1>
            <p className="text-xl font-light">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rate;
