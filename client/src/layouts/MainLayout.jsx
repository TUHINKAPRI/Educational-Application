import { useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function MainLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="relative ">
      <Header />
      {children}
      {pathname === "/sign-in" || pathname === "/sign-up" ? (
        <>{null}</>
      ) : (
        <>
          <Footer />
        </>
      )}
    </div>
  );
}

export default MainLayout;
