import { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import CalculateButtton from "../components/CalculateButton";

export default function InvestmentPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      setResult(null);
      return;
    }

    const finalValue = P * Math.pow(1 + r, t);
    const profit = finalValue - P;

    setResult({ finalValue, profit });
  };

  return (
    <PageLayout>
      <div className="text-white max-w-3xl m-auto flex flex-col gap-8 px-4">
        <h1 className="text-2xl font-bold text-center">Compound Interest</h1>
        <p className="text-gray-400 text-center">
          Calculate the final value and profit of your investment.
        </p>

        {/* Eingaben */}
        <div className="space-y-4 max-w-md">
          <Input
            value={principal}
            setCallback={setPrincipal}
            placeholder={"Initial amount"}
          />
          <Input
            value={rate}
            setCallback={setRate}
            placeholder={"Interest rate (%)"}
          />
          <Input value={years} setCallback={setYears} placeholder={"Years"} />
          <CalculateButtton calculateCallBack={calculate} />
        </div>

        {result && (
          <div className="space-y-2 text-lg">
            <p>
              <span className="text-gray-400">Final Value: </span>
              {result.finalValue.toFixed(2)}
            </p>
            <p>
              <span className="text-gray-400">Profit: </span>
              {result.profit.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

function Input({ value, setCallback, placeholder }) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setCallback(e.target.value)}
      className="w-full px-3 py-2 rounded bg-[#2a2a2a] focus:outline-none"
    />
  );
}
