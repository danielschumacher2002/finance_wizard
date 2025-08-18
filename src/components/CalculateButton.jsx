export default function CalculateButtton({ calculateCallBack }) {
  return (
    <button
      onClick={calculateCallBack}
      className="px-5 py-3 rounded bg-special hover:brightness-75 mt-5 w-full md:py-8 md:text-3xl"
    >
      Calculate
    </button>
  );
}
