type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-1/2  h-full shadow-md rounded-md flex flex-col   p-2 gap-1 relative overflow-hidden">
      {children}
    </div>
  );
}
