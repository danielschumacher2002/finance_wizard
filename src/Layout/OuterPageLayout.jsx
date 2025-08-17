export default function OuterPageLayout({ children }) {
  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col md:gap-30">
        {children}
      </div>
    </>
  );
}
