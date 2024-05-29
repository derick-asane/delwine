import Footer from "./footer";
import MainContent from "./maincontent";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Layout;
