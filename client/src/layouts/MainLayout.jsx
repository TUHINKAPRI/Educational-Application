import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function MainLayout({ children }) {
  return (
    <div className="relative ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
