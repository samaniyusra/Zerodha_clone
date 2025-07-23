import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow"

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { },
    openSellWindow: () => { },
    closeSellWindow: () => { },
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid)
    }

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }
    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid)
    }
    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    }



    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow
            }}
        >
            {props.children}
            {isBuyWindowOpen && (
                <BuyActionWindow uid={selectedStockUID} mode="BUY" />
            )}
            {isSellWindowOpen && (
                <BuyActionWindow uid={selectedStockUID} mode="SELL" />
            )}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;