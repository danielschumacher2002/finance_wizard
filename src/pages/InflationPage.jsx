import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import MainLayout from "../layouts/MainLayout";
import MainLayoutInner from "../layouts/MainLayoutInner";
import useSideMenu from "../hooks/SideMenuHook";
import { inflationIconPath } from "../assets/data/iconPath";
import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Field from "../components/Field";

export default function InflationPage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();

  const [form, setForm] = useState({
    amount: "",
    fromYear: "",
    toYear: "",
    inflationRate: "",
    compounding: "annually",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const reset = () =>
    setForm({
      amount: "",
      fromYear: "",
      toYear: "",
      inflationRate: "",
      compounding: "annually",
    });

  return (
    <MainLayout>
      <Header toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={menuOpen} />
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu} />

      <MainLayoutInner>
        <PageBanner path={inflationIconPath} />

        {/* Card */}
        <div className="bg-secondary rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <h1 className="text-primary text-2xl sm:text-3xl font-[Inter] font-extrabold mx-auto my-3">
              Inflation Calculator
            </h1>
          </div>

          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Start Capital">
              <Input
                placeholder="1.000,00"
                name="amount"
                value={form.amount}
                onChange={onChange}
                type="text"
              />
            </Field>

            <Field label="Startyear">
              <Input
                placeholder="2010"
                name="fromYear"
                value={form.fromYear}
                onChange={onChange}
                type="text"
              />
            </Field>

            <Field label="Endyear">
              <Input
                placeholder="2025"
                name="toYear"
                value={form.toYear}
                onChange={onChange}
                type="text"
              />
            </Field>

            <Field label="Inflationrate">
              <Input
                placeholder="2,00"
                name="inflationRate"
                value={form.inflationRate}
                onChange={onChange}
                type="text"
              />
            </Field>

            <Field label="Verzinsungsintervall">
              <Select
                name="compounding"
                value={form.compounding}
                onChange={onChange}
              >
                <option value="annually">annually</option>
                <option value="monthly">monthly</option>
              </Select>
            </Field>

            <div className="pt-2 grid gap-2">
              <button
                type="button"
                className="w-full rounded-lg bg-primary text-black font-semibold py-2.5 sm:py-3 hover:opacity-90 transition"
                // onClick spaerter Berechnung einhaengen
              >
                Calculate
              </button>
              <button
                type="button"
                onClick={reset}
                className="w-full rounded-lg bg-white/10 text-white/90 border border-white/10 py-2.5 sm:py-3 hover:bg-white/15 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="bg-secondary rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <h4 className="text-primary/90 text-xl font-medium mb-1">
            Results...
          </h4>
        </div>

        <div className="bg-secondary rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <h4 className="text-primary/90 text-xl font-medium mb-1">Graph...</h4>
        </div>

        <Footer />
      </MainLayoutInner>
    </MainLayout>
  );
}
