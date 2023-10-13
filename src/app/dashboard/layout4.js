// import Footer from "@/components/Footer";
// import Sidebar from "@/components/sidebar";


// import { AuthProvider } from "src/components/AuthProvider";
// import createClient from "src/lib/supabase-server";

// import "src/styles/globals.css";

// // do not cache this layout
// export const revalidate = 0;

// export default async function RootLayout({ children }) {
//   const supabase = createClient();

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const accessToken = session?.access_token || null;

//   return (
//     <html lang="en">
//       <head>
  
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chart.js" />
//   <link
//         rel="stylesheet"
        
//         integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
//         crossOrigin="anonymous"
//         referrerPolicy="no-referrer"
//       />
// </head>
//       <body>
      
//         <>
          
//           <main>
//             <AuthProvider accessToken={accessToken}>
//             <Sidebar/>
//             <div >{/* Adjust the top margin */}
//         {children}
//         </div>
//               <Footer />
//             </AuthProvider>
//           </main>
          
//         </>
//       </body>
//     </html>
//   );
// }
