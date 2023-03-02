/** @format */

// /** @format */

// import React, { useState } from "react";
// import Joy from "./card";

// function App() {
//   const [cards, setCards] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [place, setPlace] = useState("");
//   const [openTime, setOpenTime] = useState("");
//   const [closeTime, setCloseTime] = useState("");
//   const [price, setPrice] = useState("");

//   const handleAddClick = () => {
//     setShowModal(true);
//   };

//   const handleSubmit = () => {
//     setCards([...cards, { place, openTime, closeTime, price }]);
//     setPlace("");
//     setOpenTime("");
//     setCloseTime("");
//     setPrice("");
//     setShowModal(false);
//   };

//   return (
//     <div>
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           style={{
//             backgroundColor: "lightblue",
//             padding: "16px",
//             borderRadius: "8px",
//             margin: "16px",
//           }}
//         >
//           <div>Place: {card.place}</div>
//           <div>Open Time: {card.openTime}</div>
//           <div>Close Time: {card.closeTime}</div>
//           <div>Price: {card.price}</div>
//         </div>
//       ))}
//       <button onClick={handleAddClick}>
//         <Joy setData={setData} data={data} />
//       </button>
//     </div>
//   );
// }

// export default App;
