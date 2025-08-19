import { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import CalculateButtton from "../components/CalculateButton";
import { formatCurrency } from "../utiliys/currency";

export default function InvestmentPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const [monthly, setMonthly] = useState("");

  const calculate = () => {
  const P = parseFloat(principal);
  const rPct = parseFloat(rate);        
  const t = parseInt(years, 10);
  const m = monthly === "" ? 0 : parseFloat(monthly); 

  if ([P, rPct, t].some((x) => Number.isNaN(x)) || t < 0 || P < 0 || m < 0) {
    setResult(null);
    return;
  }


  const res = compoundInterest(P, t, m, rPct / 100);


  setResult({
    profit: res.totalInterest,            
    finalValue: res.finalTotal,           
    totalContributed: res.totalContributed,
    data: res.data,                      
  });

  console.log(res.data)
};

function compoundInterest(principal, years, monthlyDeposit, yearlyRate) {
  const data = [];
  let total = principal;
  let totalContributed = principal;
  let totalInterest = 0;

  for (let year = 1; year <= years; year++) {
    const { totalEnd, interestEarned, contributed } =
      accumulate12Months(total, yearlyRate, monthlyDeposit);

    totalContributed += contributed;
    totalInterest += interestEarned;
    total = totalEnd;

    data.push({
      year,
      contributed: formatCurrency(totalContributed),
      interest: formatCurrency(totalInterest),
      total: formatCurrency(total),
    });
  }

  return {
    data,
    finalTotal: formatCurrency(total),
    totalContributed: formatCurrency(totalContributed),
    totalInterest: formatCurrency(totalInterest),
  };
}




function accumulate12Months(initial, yearlyRate, monthlyDeposit) {
  const months = 12;

  const i = Math.pow(1 + yearlyRate, 1 / 12) - 1;

  let totalEnd, contributions;

  if (i === 0) {
    totalEnd = initial + monthlyDeposit * months;
  } else {
    const growth = Math.pow(1 + i, months);
    const depositsFV = monthlyDeposit * ((growth - 1) / i);
    totalEnd = initial * growth + depositsFV;
  }

  contributions = monthlyDeposit * months;
  const interestEarned = totalEnd - (initial + contributions);

  return {
    totalEnd,
    interestEarned,
    contributed: contributions
  };
}

  return (
    <PageLayout>
      <div className="text-white my-10  min-w-1/2 ">
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
                {result.profit}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Final Value: </span>
                {result.finalValue}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contributed: </span>
                {result.totalContributed}
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

