import React from "react";
import "./portfolioList.min.css";
export default function PortfolioList(title) {
  //In this case, trying to simply re-render title will attempt to render
  //the entire object.
  return <li className="portfolioList">{title.title}</li>;
}
