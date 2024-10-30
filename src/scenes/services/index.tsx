import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../navbar/shared/HText";
import { SelectedPage, ServiceType } from "../navbar/shared/types";
import Service from "./Service";
import ActionButton from "../navbar/shared/ActionButton";
import poi from "@/assets/poi.jpg"

const services: Array<ServiceType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State Of The Art Facilities",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's Of Diverse Classes",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting,It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expect & Professionals",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({setSelectedPage}: Props) => {
  return (
    <section
    id="services"
    className="mx-auto min-h-full w-5/6 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
            {/* Header */}
            <motion.div className="md:my-5 md:-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ 
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
             }}>
                <HText>How May We Be Of Service</HText>
                <p className="my-5 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </motion.div>
            {/*Services*/}
            <motion.div 
            className="mt:5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={ container }
            >


                {services.map((service: ServiceType) => (
                    <Service
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>
             
             {/*Graphics & Description */}
             <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"> 

             </div>

             <div>
                {/*Graphic */}
                <img
                className="h-30 w-30"
                alt=""
                src={poi}/>

                {/* Description*/}
                <div>
                    {/* Title */}
                    <motion.div className="py-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{ 
                        hidden: { opacity: 0, x:50},
                        visible: { opacity: 1, x: 0},
                     }}>
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    Millions of Satisfied Customers around the {""}
                                    <span className="text-primary-500">Globe</span>
                                </HText>
                            </div>

                        </div>

                    </motion.div>

                    {/* Descript*/}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay:0.2, duration: 0.5 }}
                    variants={{ 
                        hidden: { opacity: 0, x:50},
                        visible: { opacity: 1, x: 0},
                     }}>
                    <p className="my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                        <p className="mb-5">
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                
                        </p>
                    </motion.div>


                    {/* Button */}

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now 
                                
                            </ActionButton>
                        </div>

                    </div>
                </div>
             </div>
        </motion.div>

    </section>
  )
}

export default Services;