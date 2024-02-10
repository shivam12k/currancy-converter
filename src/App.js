import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrancyInfo from "./hooks/useCurrancyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // to swap the currancy
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  // to get all the oprions of currancy
  const currancyInfo = useCurrancyInfo(from);
  const Option = Object.keys(currancyInfo);

  // to convert the currancy
  const convert = () => {
    setConvertedAmount(amount * currancyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmoutChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currancy) => setFrom(currancy)}
                selectCurrancy={from}
                currencyOption={Option}
              />
            </div>

            <div className="relative w-full h-0.5 mx-50">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 "
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(currancy) => {
                  setTo(currancy);
                }}
                selectCurrancy={from}
                currencyOption={Option}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
