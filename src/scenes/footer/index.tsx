import logo from "@/assets/logo.png"



const Footer = () => {
  return (
    <footer 
    className="bg-primary-100 py-16 "
    >
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex ">

        <div className='mt-16 basis-1/2 md:mt-0'>
        <img
        className="w-20 h-30"
        alt=''
        src={logo}
        />
        <p className="my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p>
                  @ BeB All Rights Reserved 
                </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">

        <h4 className="font-bold">Links</h4>
        <p className="my-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <p className="my-5">Industry's standard dummy text ever since the 1500s.</p>
        <p>Ever since the 1500s.</p> 

         </div>
        <div className="mt-16 basis-1/4 md:mt-0">

        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Dummy text ever since the 1500s.</p>
        <p>+233 265004174 </p>
              
         </div>

        </div>

    </footer>
  )
}

export default Footer;