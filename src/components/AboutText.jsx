export default function AboutText() {
  return (
    <div className="m-auto p-4 text-center flex flex-col gap-6 text-special md:gap-12 md:max-w-1/2">
      <h1 className="text-4xl font-extrabold md:text-6xl">About</h1>
      <p className="text-lg text-gray-300 leading-relaxed md:text-3xl">
        This hobby project aims to become the ultimate tool to calculate and
        visualize financial numbers.
      </p>
      <p className="text-gray-400 leading-relaxed md:text-3xl">
        In the future, graphs, ai, and more interactive features will be added.
      </p>
    </div>
  );
}
