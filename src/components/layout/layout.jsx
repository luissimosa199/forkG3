import Header from "../Header/Header"
import {useRouter} from 'next/router';
import Footer from "../Footer/Footer"
function MainLayout({ children }) {

  //
  const router = useRouter();
  const routes = ["/login", "/signup", "/signIn", "/landing", "/frequent", "/register"]

  return (
    <>
      {routes.includes(router.pathname) ? "" : <Header/>}
      <main>{children}</main>
      {routes.includes(router.pathname) ? "" :  <Footer/>}
    </>
  );
}

export default MainLayout;
