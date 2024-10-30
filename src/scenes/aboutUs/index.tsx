import yui from "@/assets/yui.jpg";
import { motion } from "framer-motion";
import HText from "../navbar/shared/HText";
import { SelectedPage } from "../navbar/shared/types";
import { ClassType } from "react";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Products & Services",
    description: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
    image: yui,
  },
  {
    name: "Personal Effects",
    image: yui,
  },
  {
    name: "Products",
    description: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
    image: yui,
  },{
    name: "Services",
    description: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
    image: yui,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({setSelectedPage}: Props) => {
  return (
    <section
     id="aboutus"
    className="w-full bg-primary-100 py-40 ">

      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>

        <motion.div
        className="mx-auto w-5/6 "
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ 
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
             }}
             >

              <div className="md:w-3/5">
                <HText>About Us</HText>
                <p className="py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.  Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
              </div>

        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">

          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}

          </ul>

        </div>

      </motion.div>

    </section>
  )
}

export default AboutUs