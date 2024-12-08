import React from "react";
import Card from "./Card";

const Tours = ({ aray, removeTour }) => {
  return (
    <div className="flex flex-wrap  items-start justify-center ">
      {aray.map((e, index) => {
        return <Card key={index} data={e} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;

