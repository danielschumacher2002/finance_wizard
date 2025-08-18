export default function InnerPageLayout({ children }) {
  return (
    <div className="bg-secondary flex flex-col flex-1 pt-13 pb-13 md:m-auto md:min-w-4/6 md:max-w-1/2 md:rounded-xl">
      {children}
    </div>
  );
}
