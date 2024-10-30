import { motion } from "framer-motion";
import { SelectedPage } from "../navbar/shared/types";
import HText from "../navbar/shared/HText";
import { useForm } from "react-hook-form";
import image from "@/assets/image.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles= `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section
    id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32 ">
        <motion.div 
        onViewportEnter={ () => setSelectedPage(SelectedPage.ContactUS)}>
            {/* Header */}
            <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ 
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
            }}
            >
                <HText>
                    <span className="text-primary-500">Join Us </span>
                    Today For Great Deals 
                </HText>
                <p className="my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </motion.div>

            {/*Form And Image*/}
            <div className="mt-10 justify-between gap-8 md:flex ">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ 
                hidden: { opacity: 0, y:50},
                visible: { opacity: 1, y: 0},
             }}>
                <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/fb7da772ade07998e4860108a4c33144"
                method="POST"
                className="">

                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="NAME"
                    {...register("name",{
                        required: true,
                        maxLength: 100,
                    })}/>
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                        {errors.name.type === "required" && "This field is required!"}
                        {errors.name.type === "maxLength" && "Max is 100 characters!"}

                        </p>
                    )}

                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="Email"
                    {...register("email",{
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        
                    })}/>
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                        {errors.email.type === "required" && "This field is required!"}
                        {errors.email.type === "pattern" && "Wrong Email Address!"}

                        </p>
                    )}
                    <textarea
                    className={inputStyles}
                    placeholder="MESSAGE"
                    rows={4}
                    cols={50}
                    {...register("message",{
                        required: true,
                        maxLength: 2000,
                    })}/>
                    {errors.message && (
                        <p className="mt-1 text-primary-500">
                        {errors.message.type === "required" && "This field is required!"}
                        {errors.message.type === "maxLength" && "Max is 3000 characters!"}

                        </p>
                    )}

                    <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white">

                        SUBMIT

                    </button>

                </form>

                </motion.div>

                <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{ 
                hidden: { opacity: 0, y:50},
                visible: { opacity: 1, y: 0},
             }}
                >
                <div className="w-full">
                    <img
                    className="w-full"
                    alt=""
                    src={image}
                    />

                </div>

                </motion.div>
            </div>
            
        </motion.div>

    </section>
)
}

export default ContactUs;