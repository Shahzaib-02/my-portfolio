import { useEffect, useState } from "react";
import "../Styles/Loader.css";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return p + 5;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="loader-box">
        <div className="loader-circle" />
      </div>
      <p className="loader-text">Loading — {progress}%</p>
    </div>
  );
};

export default Loader;



// import  { useEffect, useState } from "react";
// import "../Styles/Loader.css";

// export default function Loader() {
//   const [pct, setPct] = useState(0);

//   useEffect(() => {
//     let t = setInterval(() => setPct(p => {
//       if (p >= 100) {
//         clearInterval(t);
//         return 100;
//       }
//       return p + 6;
//     }), 90);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div className="loader-container">
//       <div className="loader-full-bg" />
//       <div className="loader-center">
//         <div className="loader-ring" />
//         <div className="loader-content">
//           <h3>Loading portfolio</h3>
//           <p>{pct}%</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import "../Styles/Loader.css";

// export default function Loader() {
//   return (
//     <div className="loader-container">
//       <div className="loader-box">
//         <div className="loader-circle"></div>
//       </div>
//       <p className="loader-text">Loading...</p>
//     </div>
//   );
// }
