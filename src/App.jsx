// import React, { useState } from "react";
// import Tours from "./Components/Tours";
// import data from "./Data/Data";

// const App = () => {
//   const [Tour, setTour] = useState(data);


//   function removeTour(id) {
//     const newTour = Tour.filter((Tour) => Tour.id !== id);
//     setTour(newTour);
//   }

//   if (Tour.length === 0) {
//     return (
//       <div className="refresh h-[100vh]  flex items-center justify-center  flex-col ">
//         <h2>No Tours left</h2>
//         <button className="bg-red-400 text-2xl py-3 px-5"
//           onClick={() => {
//             setTour(data);
//           }}
//         >
//           Refresh
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-red-500 mix-w-[1080px] w-full m-auto ">
//       <div className="flex items-center justify-center">
//         <h2 className="border-8 rounded-md border-[#0111A0] border-dashed  text-center py-5 px-24 mt-10 text-[45px] font-bold">
//           Plan with Azad
//         </h2>
//       </div>
//       <Tours aray={Tour} removeTour={removeTour} />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./Data/Data";

const App = () => {
  const [Tour, setTour] = useState(data);

  function removeTour(id) {
    const newTour = Tour.filter((Tour) => Tour.id !== id);
    setTour(newTour);
  }

  if (Tour.length === 0) {
    return (
      <div className="refresh h-[100vh] flex items-center justify-center flex-col bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Tours Left</h2>
        <button
          className="bg-red-500 text-white text-xl py-3 px-5 rounded-lg hover:bg-red-600 transition-all"
          onClick={() => {
            setTour(data);
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-w-full p-4">
      {/* Responsive Heading */}
      <div className="flex items-center justify-center">
        <h2 className="text-center py-4 px-6 mt-6 text-3xl sm:text-4xl lg:text-[45px] font-bold border-4 border-blue-700 border-dashed rounded-lg bg-white">
          Plan A Trip
        </h2>
      </div>

      {/* Tours List */}
      <Tours aray={Tour} removeTour={removeTour} />
    </div>
  );
};

export default App;
