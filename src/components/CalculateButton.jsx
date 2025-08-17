export default function CalculateButtton({ calculateCallBack }) {
  return (
    <button
      onClick={calculateCallBack}
      className="px-5 py-3 rounded bg-special hover:brightness-75 mt-5 w-full"
    >
      Calculate
    </button>
  );
}
