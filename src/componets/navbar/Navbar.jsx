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
          className="hidden md:hidden lg:block px-6 py-3  bg-white text-[#0D051F]       border transparent border-white hover:bg-transparent hover:text-white pointer-events-auto text-xl mt-3 rounded-md duration-300 ease-in"
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
