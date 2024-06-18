import SideBar from "@/components/SideBar";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const loggedIn = { firstName: 'John', lastName: 'Doe'}

  return (
    <main>
        <SideBar 
            user={loggedIn}
        />
        {children}
    </main>
  );
}