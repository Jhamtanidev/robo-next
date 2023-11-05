import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "src/components/AuthProvider";
import createClient from "src/lib/supabase-server";

import "src/styles/globals.css";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chart.js" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>WanderSub</title>
      </head>
      <body>
        <>
          <main>
            <AuthProvider accessToken={accessToken}>
              <div className="flex min-h-screen flex-col">
                <Navbar className="fixed left-0 top-0 z-10 w-full" />{" "}
                {/* Add fixed class */}
                {/* <Navbar className="fixed top-0 left-0 w-full z-10" />  */}
                <NextTopLoader />
                {children}
              </div>
              <Footer />
            </AuthProvider>
          </main>
        </>
      </body>
    </html>
  );
}
