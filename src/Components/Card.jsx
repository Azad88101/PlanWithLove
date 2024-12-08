// import React, { useState } from "react";

// const Card = ({ data, removeTour }) => {
//   //   console.log(data);

//   const [readMore, setReadMore] = useState(false);
//   const description = readMore ? data.info : `${data.info.substring(0, 200)}...`;

//   function readMoreHandler() {
//     setReadMore(!readMore);
//   }
//   return (
//     <div>
//       <div className=" flex flex-col items-start gap-5 p-2 rounded-sm bg-white w-[300px] m-6 max-h-[600px]">
//         <div className="obj h-[280px] w-[280px]">

//         <img className=" object-cover " src={data.image} alt="" />
//         </div>

//         <div className=" block">
//           <h2 className="placeName text-3xl">{data.name}</h2>
//           <h2 className="price text-green-600 font-bold text-2xl">
//             {data.ticket_price}
//           </h2>
//           <h2 className="description">
//             {description}
//             <span className="" onClick={readMoreHandler}>
//               {readMore ? `showless` : `showmore`}
//             </span>
//           </h2>
//         </div>

//         <button
//           className="bg-red-300 rounded-lg text-center border-2 border-red-700 py-3 w-full"
//           onClick={() => {
//             removeTour(data.id);
//           }}
//         >
//           Not Interested
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from "react";

const Card = ({ data, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? data.info : `${data.info.substring(0, 200)}...`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="flex flex-col items-start gap-5 p-5 rounded-lg bg-white shadow-md w-[320px] m-6 transition-all hover:scale-105 hover:shadow-lg">
      <div className="h-[280px] w-full overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
        <h2 className="text-lg font-semibold text-green-600 mb-2">
          ₹{data.ticket_price}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
          <span
            className="text-blue-500 font-semibold cursor-pointer ml-2 hover:underline"
            onClick={readMoreHandler}
          >
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
      </div>
      <button
        className="bg-red-500 text-white rounded-lg py-2 w-full font-semibold hover:bg-red-600 transition-all cursor-pointer"
        onClick={() => {
          removeTour(data.id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
