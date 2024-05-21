
import Container from "../../Shared/Container";
import edge from "../../../assets/motionarteffect-img8.png";

  
     
  
  
const BrowserSupport = () => {
  return (
    <Container>
      <section
        className="text-center py-11 space-y-3 my-[100px]  rounded-xl  border border-[#FFFFFF10]"
        style={{
            transition: "background 0.3s", 
            borderWidth: "2px 2px 2px 2px",
            boxShadow: "0.3s",
         
          padding: "50px 30px 50px 30px",
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
        }}
      >
        <p
          className="text-3xl bg-transparent"
          style={{ fontFamily: "Outfit, Sans-serif" }}
        >
          Supported by All Popular Browsers
        </p>
        <p className="text-slate-400 text-xl mb-[500px] bg-transparent">
          Rest assured, Motion Art is designed to be compatible <br /> with all
          major web browsers.
        </p>

        <img className="mx-auto bg-transparent" src={edge} alt="edge" />
      </section>
    </Container>
  );
};

export default BrowserSupport;
