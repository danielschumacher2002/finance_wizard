import { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import CalculateButtton from "../components/CalculateButton";

export default function InvestmentPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const [monthly, setMonthly] = useState("");

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const m = parseFloat(monthly);

    if ([P, r, t, m].some((x) => Number.isNaN(x))) {
      setResult(null);
      return;
    }
    if (t < 0) {
      setResult(null);
      return;
    }

    const n = Math.round(t * 12);
    const i = r / 12;

    const fvPrincipal = i === 0 ? P : P * Math.pow(1 + i, n);

    const fvContrib = i === 0 ? m * n : m * ((Math.pow(1 + i, n) - 1) / i);

    const finalValue = fvPrincipal + fvContrib;
    const totalContributed = P + m * n;
    const profit = finalValue - totalContributed;

    setResult({ finalValue, profit, totalContributed });
  };

  return (
    <PageLayout>
      <div className="text-white my-auto  min-w-1/2 ">
        <div className="max-w-xl mx-auto flex flex-col gap-8 px-4 items-center md:gap-14">
            <h1 className="text-special text-2xl font-bold text-center md:text-4xl">
              Compound Interest
            </h1>


          {/* Eingaben */}
          <div className="flex  flex-1 flex-col gap-4 w-full md:gap-5">
            <Input
              value={principal}
              setCallback={setPrincipal}
              placeholder={"Initial amount"}
            />
            <Input
              value={monthly}
              setCallback={setMonthly}
              placeholder={"Monthly Deposit"}
            />
            <Input
              value={rate}
              setCallback={setRate}
              placeholder={"Yearly return (%)"}
            />
            <Input value={years} setCallback={setYears} placeholder={"Years"} />

            <CalculateButtton calculateCallBack={calculate} />
          </div>

          {result && (
            <div className=" w-full flex flex-col gap-3 text-lg md:text-xl">
              <div className="flex justify-between">
                <span className="text-special">Profit: </span>
                <span className="text-special">
                {result.profit.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Final Value: </span>
                {result.finalValue.toFixed(2)}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contributed: </span>
                {result.totalContributed.toFixed(2)}
              </div>
            </div>
          )}
        </div>
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
      className="w-full px-3 py-2 rounded bg-[#2a2a2a] focus:outline-none md:py-4 md:text-lg"
    />
  );
}
