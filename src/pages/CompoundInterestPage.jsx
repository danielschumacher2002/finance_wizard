import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import MainLayout from "../layouts/MainLayout";
import MainLayoutInner from "../layouts/MainLayoutInner";
import useSideMenu from "../hooks/SideMenuHook";
import { investmentIconPath } from "../assets/data/iconPath";
import { useState } from "react";

export default function CompoundInterestPage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();
  const [form, setForm] = useState({
    startCapital: "",
    monthlySavings: "",
    years: "",
    annualRate: "",
    compounding: "monthly",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const reset = () =>
    setForm({
      startCapital: "",
      monthlySavings: "",
      years: "",
      annualRate: "",
      compounding: "monthly",
    });

  return (
    <MainLayout>
      <Header toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={menuOpen} />
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu} />

      <MainLayoutInner>
        <PageBanner path={investmentIconPath} />

        {/* Card */}
        <div className="bg-secondary rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <h1 className="text-primary text-2xl sm:text-3xl font-[Inter] font-extrabold
                           mx-auto my-3">
              Compound Interest 
            </h1>
          </div>

          <form className="grid grid-cols-1 gap-6">
            <Field
              label="Start Capital"
            >
              <input
              className="rounded-lg bg-third/80 text-white/90 placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60 w-full pl-5 py-2.5"
              placeholder="5.000"
              name="startCapital"
              value={form.monthlySavings}
              onChange={onChange}
              />
            </Field>

            <Field
              label="Monthly savings"
            >
                <input
                  name="monthlySavings"
                  placeholder="100,00"
                  className="rounded-lg bg-third/80 text-white/90 placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60 w-full pl-5 py-2.5"
                  value={form.monthlySavings}
                  onChange={onChange}
                />
            </Field>

            <Field
              label="Investment Period"
            >
                <input
                  name="years"
                  placeholder="10"
                  className="rounded-lg bg-third/80 text-white/90 placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60 w-full pl-5 py-2.5"
                  value={form.years}
                  onChange={onChange}
                />
            </Field>

            <Field
              label="Annual Rate"
            >
                <input
                  name="annualRate"
                  placeholder="5,00"
                  className="rounded-lg bg-third/80 text-white/90 placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60 w-full pl-5 py-2.5"
                  value={form.annualRate}
                  onChange={onChange}
                />
            </Field>

            <Field
              label="Distribution interval"
            >
              <select
                id="compounding"
                name="compounding"
                className="rounded-lg bg-third text-white/90 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60 w-full px-3 py-2.5"
                value={form.compounding}
                onChange={onChange}
              >
                <option value="annually">annually</option>
                <option value="semi-annually">semi-annually</option>
                <option value="quarterly">quarterly</option>
                <option value="monthly">monthly</option>
              </select>
            </Field>

            <div className="pt-2">
              <button
                type="button"
                className="w-full rounded-lg bg-primary text-black font-semibold py-2.5 sm:py-3 hover:opacity-90 transition"
              >
                Calculate
              </button>
              <button
                type="button"
                onClick={reset}
                className="mt-2 w-full rounded-lg bg-white/10 text-white/90 border border-white/10 py-2.5 sm:py-3 hover:bg-white/15 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>


        <div className="bg-secondary rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <h4 className="text-primary/90 text-xl font-medium">Results...</h4>
        </div>

        <div className="bg-secondary rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <h4 className="text-primary/90 text-xl font-medium">Graph...</h4>
        </div>


        <Footer />
      </MainLayoutInner>

    </MainLayout>
  );
}

function Field({ label, hint, children }) {
  return (
    <label className="grid gap-2">
      <div className="flex items-center gap-2">
        <span className="text-primary/90 text-sm font-medium">{label}</span>
      </div>
      {children}
    </label>
  );
}
