import { SelectedPage } from '../navbar/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '../navbar/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import map from "@/assets/map.png";
import fo from "@/assets/fo..jpg"
import ty from "@/assets/ty.jpg"
import vo from "@/assets/vo.jpg"
import mjli from "@/assets/mjli.jpg"
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
  
    <section 
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        
        {/* Image And Main Header */}

        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-4/3'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>

            {/*Main Header*/}

            <div className='z-10 mt-32 md:basis-3/5'>

                {/*Headings*/}

                <motion.div className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{ 
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}>
                    <div className=' '>
                        <div className=''>
                            <h3 className='text-4xl mx-auto'>Welcome - Together We Can !!!</h3>
                            <img alt='' src={mjli}/>
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                        agtatayhyjwnn5  y yvveaeyib 0-bb60v 0tbbtabab6ava 6v6v6 6v6ibysb 0ig0y 09r0yi
                        5okoeojfgx o yoyohyn oyoaha oyoayan yasuipph aeykhuknxk ppfghbo ogogpogtp
                         abskdpnupbspbsbpnkpzfzz aTbaskyvobyo bz oyo yozcvt glhyyn gpgpgpgpnjp
                    </p>
                </motion.div>
                
                {/* Actions */}
                <motion.div className='mt-8 flex items-center gap-8'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{ 
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                    Join us
                    </ActionButton>
                    <AnchorLink
                    className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                    onClick={() => setSelectedPage(SelectedPage.ContactUS)}
                    href={`#${SelectedPage.ContactUS}`}>
                        <p>
                            Learn more 
                        </p>

                    </AnchorLink>
                </motion.div>



            </div>

            {/*Image*/}
            <div className='flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-center'>
                <img
                 className=''
                alt='' src={map} />
            </div>
        </motion.div>

        {/*Sponsor*/}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10 '>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img className='h-20 w-30' alt='' src={fo}/>
                        <img className='h-20 w-30' alt='' src={vo}/>
                        <img className='h-20 w-30' alt='' src={ty}/>
                    </div>
                </div>
            </div>
        )}
        </section>
  )
  
}

export default Home;