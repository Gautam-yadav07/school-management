
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (      
  <div className="h-screen flex">

    <div className="w-1/6"></div>
    <div className="w-1/6"></div>

  </div>

  );
}
