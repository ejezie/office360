// import React, { useState, useEffect, useRef } from "react";
// import { sliderData as items } from "../sliderData";
// import { Link } from "react-router-dom";

// function Slider() {
//   const [x, setX] = useState(0);

//   console.log(items.length);
//   // setInterval(()=>{
//   //   setX(x-100);
//   //   if(x === ((items.length -1) * 100)){
//   //     setX(x+100)
//   //   }
//   // },5000)
//   const nextItem = () => {
//     x === -100 * (items.length - 1)
//       ? setX(0)
//       : setX(x - 100);
//   };
//   const prevItem = () => {
//     x === 0 ? setX(-100 * (items.length - 1)) : setX(x + 100);
//   };

// // -100 * (items.length - 1);
//   return (
//     <div className="slider">
//       <div className="button-wrap">
//         <div className="carousel-prev" onClick={prevItem}>
//           <i class="fad fa-arrow-alt-left"></i>
//         </div>
//         <div className="carousel-next" onClick={nextItem}>
//           <i class="fad fa-arrow-alt-right"></i>
//         </div>
//       </div>
//       {items.map((item, index) => {
//         return (
//           <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
//             <img src={item.image} alt="" />
//             <div className="title">{item.title}</div>
//             <div className="text">{item.text}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Slider;
