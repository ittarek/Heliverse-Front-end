

const Footer = () => {

    return (
      <footer
        className="footer 
        max-w-[2520px] xl:w-[1349px] lg:w-[1024px] md:w-full w-full mx-auto xl:px-11 md:px-8 sm:px-2 px-4 
        overflow-hidden md:flex justify-between items-center text-center flex-row-reverse space-y-6     py-3 text-[#EEE5FFB8] "
      >
      
        <div className="bg-transparent space-x-6 text-[#EEE5FFB8]">
          <button>Documentation</button>
          <button>Support</button>
        </div>

        <p className="bg-transparent">
          {" "}
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
      </footer>
    );
};

export default Footer;