import Navbar from "@/scenes/navbar";
import Home from "@/scenes/Home";
import Services from "@/scenes/services"
import { useEffect, useState } from "react";
import { SelectedPage } from "./scenes/navbar/shared/types";
import AboutUs from "./scenes/aboutUs";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY === 0) {setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  

  return (
    
      <div className='app bg-gray-20'>
        <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}/>

        <Home setSelectedPage={setSelectedPage} />
        <Services setSelectedPage={setSelectedPage} />
        <AboutUs setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
      
      </div>
      

      
      
  
  )
}

export default App
