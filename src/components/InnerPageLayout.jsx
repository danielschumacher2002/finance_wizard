export default function InnerPageLayout({ children }) {
  return (
  <div className="bg-secondary flex flex-col gap-2">
    {children}
    </div>
  );
}
