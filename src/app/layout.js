import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Dyrevelfærd",
  description: "Created by Rafael Geisler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-oswald">
        {children}

        <ToastContainer position="top-left" pauseOnHover />
        <ToastContainer />
      </body>
    </html>
  );
}
