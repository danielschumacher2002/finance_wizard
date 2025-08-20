export default function MainLayoutInner({ children }) {
  return (
    /* Div fuer die Elemente im DOM flow */

    <div
      className="flex flex-col gap-4 sm:gap-6 lg:gap-8
                            max-w-6xl
                            mx-auto "
    >
      {children}
    </div>
  );
}
