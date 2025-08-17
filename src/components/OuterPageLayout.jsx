export default function OuterPageLayout({ children }) {
  return (
    <>
      <div className="bg-primary min-h-screen">{children}</div>
    </>
  );
}
