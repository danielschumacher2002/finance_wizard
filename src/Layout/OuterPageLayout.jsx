export default function OuterPageLayout({ children }) {
  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col md:gap-30 relative md:pt-23 md:pb-23">
        {children}
      </div>
    </>
  );
}
