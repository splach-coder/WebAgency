import React from "react";
import InfiniteMenu from "./animations/InfiniteMenu";

const ProjectsSection = ({
  sectionNumber = "02",
  title = "Work",
  subtitle = "EACH PROJECT REPRESENTS OUR COMMITMENT TO EXCELLENCE AND INNOVATION.",
}) => {
  const items = [
    {
      image: "/images/projects/ladies.png",
      link: "https://ladiesgetpaid.com",
      title: "LADIES GET PAID",
      description:
        "Clean layout for a niche coaching biz—strong visuals, clear CTAs.",
    },
    {
      image: "/images/projects/helm.png",
      link: "https://thehelm.co",
      title: "THE HELM",
      description: "Stylish brand site with elegant design and smooth UX.",
    },
    {
      image: "/images/projects/broklyn.png",
      link: "https://brooklyncandlestudio.com",
      title: "BROOKLYN CANDLE STUDIO",
      description: "Minimalist ecommerce with big images & clean whitespace.",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-sage-light to-sage-light py-16 space-y-6 h-min-screen"
      id="work"
    >
      <div className="">
        {/* Header */}
        <div className="px-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-sage-darker/60 text-lg font-light">
              /{sectionNumber}
            </span>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-sage-deepest mb-4">
                {title}
              </h2>
              <p className="text-sage-darker text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <InfiniteMenu items={items} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
