
import Container from "../../Shared/Container";
import "../home.css"
const Banner = () => {
  return (
    <Container>
      <section className="banner lg:flex   py-[100px] justify-start md:flex w-full mx-auto">
        <div className="banner-1st-side   lg:me-[200px] md:me-[50px] md:w-[150px] mx-auto lg:mx-0">
          <h3 className="1st-side-text text-[18px] md:text-[24px] font-[500]  md:mb-2  lg:w-[150px]  text-center lg:text-start ">
            Transform Your Website
          </h3>
          <h4 className="text-2xl md:text-[24px] md:w-[200px] lg:w-[150px] font-[500] text-center md:text-start lg:text-start ">
            {" "}
            With Motion Art Effect
          </h4>
        </div>
        <div className="banner-2nd-side text-center md:text-left w-full ">
          <h1 className="md:text-[40px] text-[43px] md:text-start">
            {" "}
            Attract Your Visitors <br /> Attention With Colorful <br />{" "}
            <span>Motion Art Effect</span>{" "}
          </h1>
          <p className="lg:w-[650px] md:w-[325px] mt-2">
            {" "}
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
