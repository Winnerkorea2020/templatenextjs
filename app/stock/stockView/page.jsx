import TradingViewWidget from "@/components/TradingView/TradingViewWidget";
import TradingViewWidgetUSA from "@/components/TradingView/TradingViewWidgetUSA";
import CardHorizonalTypeB from "@/components/card/CardHorizonalTypeB";
import FreeBoardSearchBar from "@/components/searchbox/FreeBoardSearchBar";
import React from "react";

const StockViewPage = () => {
  return (
    <div>
      <div>
        <div className="mt-10">
          <div className="w-full flex justify-between items-center">
            <h3 className="ml-2 py-4 font-semibold text-lg">국내/해외증시</h3>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="h-[520px]">
              <div className="h-full py-5">
                <TradingViewWidget />
              </div>
            </div>
            <div className="h-[520px]">
              <div className="h-full py-5">
                <TradingViewWidgetUSA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockViewPage;
