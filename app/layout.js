export const metadata = {
  title: "Personal Portfolio",
  description: "Portfolio showcasing services, skills, experience, client feedback, and contact."
};
import "./../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }){
  return (<html lang="en"><body><GradientBG /><Header /><main>{children}</main><Footer /></body></html>);
}
function GradientBG(){
  return (<div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(16,185,129,.15),transparent)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(255,255,255,.06),transparent)]"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.04),transparent_30%)]"></div>
  </div>);
}
