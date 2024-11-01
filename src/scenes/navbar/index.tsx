import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/logo.png"
import Link from "./Link";
import { SelectedPage } from "./shared/types";
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "./shared/ActionButton";
import { motion } from "framer-motion";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between ";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
        <motion.div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
            <div className={`${flexBetween} mx-auto w-5/6`}>

            <div className={`${flexBetween} w-full gap-16 `}>
                {/*Left Side*/}

                <img
                className="h-30 w-20" alt="logo" src={logo} />


            {/*Right Side */}
                {isAboveMediumScreens ?<div className={`${flexBetween} w-full`}>

                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home"       selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Services"   selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="About Us"   selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    <div className={`${flexBetween} gap-8 `}>
                        <p className="hover:bg-primary-100 rounded-full p-6">Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Us</ActionButton>
                    </div>

                </div>
                :(
                    <button
                    className="rounded-full bg-secondary-500 p-2 "
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6 text-white"/>
                        
                    </button>
                )}


            </div>

            </div>

        </motion.div>
        {/* Mobile Menu Modal*/}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* Close Icon */}
            <div className="flex justify-end p-12 ">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="w-6 h-6 text-gray-400" />
                </button>
            </div>
            {/* Menu Items */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>

            </div>
        )}
    </nav>
  )
}

export default Navbar;