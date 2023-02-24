import React,{Suspense} from "react";
import Layout from "./Common/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Responsive.scss";
import "./CSS/Style.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./Common/Loader";
import { AnimatePresence } from "framer-motion";

const Home = React.lazy(() => import("./Pages/Home"));  
const About = React.lazy(() => import("./Pages/About"));  
const Testimonial = React.lazy(() => import("./Pages/Testimonial"));  
const Portfolio = React.lazy(() => import("./Pages/Portfolio"));  
const Contact = React.lazy(() => import("./Pages/Contact"));  
const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));  
function App() {
  const location = useLocation();
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Layout>
        <AnimatePresence>
         <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </AnimatePresence>
      </Layout>
    </Suspense>
    </>
    
  );
}


export default App;
