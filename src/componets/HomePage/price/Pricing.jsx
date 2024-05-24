import Container from '../../Shared/Container';
import image from "../../../assets/motionarteffect-img5.png"
const Pricing = () => {
    return (
      <Container>
        <section className="price flex flex-col md:flex-row justify-between items-center gap-6 my-[50px]">
          <div>
            <h1
              className="text-[35px] space-y-[55px] text-center md:text-left"
              style={{
                fontFamily: "Outfit, Sans-serif",
                fontWeight:500
              }}
            >
              Turn Your Cursor Into A Colorful Magic <br /> Wand & Charm Your
              Visitors
            </h1>
            <p className="my-6 text-center md:text-left price-p">
              {" "}
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse <br /> your website with visually
              stunning motion art elements.
            </p>
            <button className="price-btn lg:w-[300px] lg:ml-0 text-white py-4 px-11 md:text-[18px] text-[20px] relative">
              Purchase From Envato
              <span className="bg-transparent md:-mr-6 md:mt-3 absolute top-1/3 right-10 transform -translate-y-1/2">
                <i className="bg-transparent fa-solid fa-arrow-right-long"></i>
              </span>
            </button>
          </div>
          <div>
            <img src={image} alt="image" />
          </div>
        </section>
      </Container>
    );
};

export default Pricing;