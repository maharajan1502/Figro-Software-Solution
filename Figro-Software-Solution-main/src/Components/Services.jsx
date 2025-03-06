import React from "react";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites using the latest technologies.",
    technologies: [
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431196/react_mm4ckl.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431313/angular_clhwjg.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431154/python_jbg51h.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431302/java_agpao4.png",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Creating user-friendly mobile apps for iOS and Android platforms.",
    technologies: [
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431183/reactnative_hu80wz.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431302/java_agpao4.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431302/kotlin_ajyi1e.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431303/ios_bpimh4.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431080/swift_dvzbul.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431315/android_studio_q5l0nl.webp",
    ],
  },
  {
    title: "Web Designing",
    description: "We provide attractive and efficient designs for your projects.",
    technologies: [
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/canva_nedbnu.webp",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431251/photoshop-camera_yvnjqi.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431306/figma_voxkbd.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734430946/wordpress_tgiqaw.png",
    ],
  },
  {
    title: "Data Analytics",
    description: "We transform raw data into meaningful insights using advanced analytics tools.",
    technologies: [
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431154/python_jbg51h.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734531699/database_pex74b.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431080/tableau_vyi91t.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431251/Power-BI_g3rdfh.jpg",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431307/excel_vfgxsx.png",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Enhancing your website’s visibility and ranking on search engines.",
    technologies: [
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431110/seo_oopjo1.png",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/canva_nedbnu.webp",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431305/googleanalytics_tbjmys.jpg",
      "https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431094/social_zkj7qe.webp",
    ],
  },
];

const Services = () => {
  return (
    <div id="services" className="p-10">
      <p className="font-bold text-3xl text-center text-blue-950">SERVICES</p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {servicesData.map((service, index) => (
          <div key={index} className="border-2 border-black p-5 bg-[#edbb99] rounded-lg shadow-md">
            <h1 className="font-extrabold text-xl">{service.title}</h1>
            <p className="text-gray-700">{service.description}</p>

            {/* Technology Icons */}
            <div className="flex flex-wrap gap-3 mt-3">
              {service.technologies.map((tech, idx) => (
                <img key={idx} src={tech} alt={service.title} className="h-12 w-14 object-contain" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
