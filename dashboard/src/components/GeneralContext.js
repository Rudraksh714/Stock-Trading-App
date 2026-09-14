import React from "react";
import { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  orderUpdate: 0,
  setOrderUpdate: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [orderUpdate, setOrderUpdate] = useState(0);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = (uid) => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        orderUpdate,
        setOrderUpdate,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

//CORE EXPLANATION :

// ============================================================
// 1. OVERALL FLOW
// ============================================================

// App
//  ↓
// GeneralContextProvider
//  ↓
// WatchList
//  ↓
// Buy button
//  ↓
// openBuyWindow(uid)
//  ↓
// isBuyWindowOpen = true
// selectedStockUID = uid
//  ↓
// BuyActionWindow renders
//  ↓
// Cancel
//  ↓
// closeBuyWindow()
//  ↓
// isBuyWindowOpen = false
//  ↓
// BuyActionWindow disappears


// ============================================================
// 2. createContext()
// ============================================================

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// Context = components ke beech data/functions share karne ka channel.

// Default functions sirf placeholders hain.
// Actual functions Provider se milenge.


// ============================================================
// 3. GeneralContextProvider + props
// ============================================================

// <GeneralContextProvider>
//   <WatchList />
// </GeneralContextProvider>

// Provider ek React component hai.
// Andar diya component props.children mein aata hai.

// props = {
//   children: <WatchList />
// }

// Isliye:
//
// {props.children}
//
// → WatchList render karega.


// ============================================================
// 4. Provider ka purpose
// ============================================================

// <GeneralContext.Provider
//   value={{
//     openBuyWindow: handleOpenBuyWindow,
//     closeBuyWindow: handleCloseBuyWindow,
//   }}
// >

// Provider actual functions context ke through deta hai:
//
// openBuyWindow  → handleOpenBuyWindow
// closeBuyWindow → handleCloseBuyWindow

// Matlab Provider = central control room.


// ============================================================
// 5. BuyActionWindow kaise render hota hai?
// ============================================================

// Initially:
//
// isBuyWindowOpen = false
//
// false && <BuyActionWindow />
// → kuch render nahi hoga.

// WatchList se:
//
// openBuyWindow(uid)
//
// call hua:
//
// setIsBuyWindowOpen(true);
// setSelectedStockUID(uid);

// Ab:
//
// isBuyWindowOpen = true
// selectedStockUID = selected stock ka UID

// Therefore:
//
// <BuyActionWindow uid={selectedStockUID} />
//
// render ho jayega.


// ============================================================
// 6. Cancel direct setState kyun nahi karta?
// ============================================================

// State Provider ke andar hai:
//
// const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

// Ye state BuyActionWindow ke paas nahi hai.

// Isliye BuyActionWindow directly:
//
// setIsBuyWindowOpen(false);
//
// nahi kar sakta.

// Instead context ka function use karta hai:
//
// closeBuyWindow();


// ============================================================
// 7. closeBuyWindow() ka actual flow
// ============================================================

// BuyActionWindow
//   ↓
// closeBuyWindow()
//   ↓
// Provider ka handleCloseBuyWindow()
//   ↓
// setIsBuyWindowOpen(false)
// setSelectedStockUID("")
//   ↓
// BuyActionWindow unmount


// ============================================================
// 8. Mental Model
// ============================================================

//             GeneralContextProvider
//                     │
//          ┌──────────┴──────────┐
//          ↓                     ↓
//      WatchList          BuyActionWindow
//          │                     │
//      open window           close window
//          │                     │
//          └────── Context ──────┘
//
// Provider ke paas actual state hai.
// Dono components Context ke through Provider se communicate karte hain.


// ============================================================
// 9. IMPORTANT: useContext
// ============================================================

// Context ko access karne ke liye:
//
// const { closeBuyWindow } = useContext(GeneralContext);

// Then:
//
// const handleCancelClick = () => {
//   closeBuyWindow();
// };

// Yaad rakho:
//
// createContext() → Context channel banata hai
// Provider        → actual values/functions provide karta hai
// useContext()    → component un values/functions ko access karta hai
// props.children  → Provider ke andar wale components ko render karta hai