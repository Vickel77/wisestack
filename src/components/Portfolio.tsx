import React from "react";

export default function Portfolio() {

  const portfolioData: PortfolioData[] = [
    {
      image: "",
      subTitle: "",
      title: "",
    },
    {
      image: "",
      subTitle: "",
      title: "",
    },
    
  ];

  return (
    <div>
      <div>
        <h3>Our Work</h3>
        <sub>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          earum nihil suscipit?
        </sub>
      </div>
      <div>

      </div>
    </div>
  );
}

interface PortfolioData {
  image:string,
  title:string,
  subTitle:string
}

const PortfolioCard = ({ item }: { item: PortfolioData }) => {
  const {image,subTitle,title} = item
  return (
    <div className="w-[50%]">
      <div className="rounded-md overflow-hidden ">
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <sub>{subTitle}</sub>
      </div>
    </div>
  );
};

const FullCard = () => {};
