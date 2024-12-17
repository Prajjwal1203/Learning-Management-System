
import "./globals.css";
import {Outfit} from  'next/font/google';



export const metadata = {
  
};

const outfit=Outfit({subsets:['latin']});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
