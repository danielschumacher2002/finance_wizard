export default function InnerPageLayout({ children }) {
  return (
    <div className="bg-secondary flex flex-col gap-2 flex-1 md:m-auto md:min-w-1/2 md:max-w-1/2">
      {children}
    </div>
  );
}
