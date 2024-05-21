import logo from "../../assets/MotionArtEffect-logo.png";
import Container from "../Shared/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex  justify-between items-center pt-9  shadow-md ">
        <img
          className="h-12 md:h-16 w-auto"
          src={logo}
          alt="Motion Art Effect Logo"
        />

        <button
          className="hidden md:hidden lg:block text-[18px] font-normal text-[#0D051F] bg-[#FFFFFF] border-2 border-[#FFFFFF] rounded-[5px] px-[35px] py-[12px] hover:text-[#FFFFFF] 
        hover:bg-[#0D051F00] duration-300
   "
          style={{
            fontFamily: "Outfit, Sans-serif",
          }}
        >
          Purchase Now
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
