import { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import CalculateButtton from "../components/CalculateButton";
import { formatCurrency } from "../utiliys/currency";

export default function InflationPage() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const formatMoney = (num) =>
    Number(num).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const calculate = () => {
    const A = parseFloat(amount);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);

    if ([A, r, t].some((x) => Number.isNaN(x))) {
      setResult({ error: "Please enter valid numbers." });
      return;
    }
    if (A < 0 || r < 0 || t < 0) {
      setResult({ error: "Values cannot be negative." });
      return;
    }

    const n = Math.round(t);
    const factor = Math.pow(1 + r, n);

    const presentValue = formatCurrency(r === 0 ? A : A / factor);
    const loss = formatCurrency(A - presentValue);

    

    setResult({
      presentValue,
      loss,
      original: A,
    });
  };

  return (
    <PageLayout>
      <div className="text-white my-auto min-w-1/2">
        <div className="max-w-xl mx-auto flex flex-col gap-8 px-4 items-center md:gap-14">
          <h1 className="text-special text-2xl font-bold text-center md:text-4xl">
            Inflation Calculator
          </h1>

          {/* Inputs */}
          <div className="flex flex-1 flex-col gap-4 w-full md:gap-5">
            <Input
              value={amount}
              setCallback={setAmount}
              placeholder={"Amount"}
              min="0"
            />
            <Input
              value={rate}
              setCallback={setRate}
              placeholder={"Yearly inflation (%)"}
              min="0"
            />
            <Input
              value={years}
              setCallback={setYears}
              placeholder={"Years"}
              min="0"
            />

            <CalculateButtton calculateCallBack={calculate} />
          </div>

          {/* Results */}
          {result && (
            <>
              {result.error ? (
                <p className="text-red-400">{result.error}</p>
              ) : (
                <div className="w-full flex flex-col gap-3 text-lg md:text-xl">
                  <div className="flex justify-between">
                    <span className="text-red-400">Loss from Inflation:</span>
                    <span className="text-red-400">
                      {formatMoney(result.loss)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Present Value:</span>
                    <span>{formatMoney(result.presentValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Original Amount:</span>
                    <span>{formatMoney(result.original)}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

function Input({ value, setCallback, placeholder, min }) {
  return (
    <input
      type="number"
      min={min}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setCallback(e.target.value)}
      className="w-full px-3 py-2 rounded bg-[#2a2a2a] focus:outline-none md:py-4 md:text-lg"
    />
  );
}
