import Container from "../../Shared/Container";
import image1 from "../../../assets/motionarteffect-img9.png";
import image2 from "../../../assets/motionarteffect-img6.png";
import image3 from "../../../assets/motionarteffect-img7.png";

const featuresData = [
  {
    id: 1,
    img: image1,
    title: "Light Weight",
    dsc: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    id: 2,
    img: image2,
    title: "100% Responsive",
    dsc: "Create a consistent visual experience across all devices.",
  },
  {
    id: 3,
    img: image3,
    title: "User Friendly Interface",
    dsc: "Ensure a smooth experience for both applicants and administrators.",
  },
];

const Features = () => {
  return (
    <Container>
      <section className="my-[100px] ">
        <div className="text-center mb-8">
          <h1
            className="md:text-[40px] text-[30px] font-bold"
            style={{ fontFamily: "Sore, Sans-serif", fontWeight: 500 }}
          >
            An All-Round Plugin With Powerful <br /> Features
          </h1>
          <p
            className="text-xl text-[#EEE5FFBD] leading-9"
            style={{ fontFamily: "Outfit, Sans-serif" }}
          >
            Whether yor,re a seasoned web designer or just starting out, Motion
            Art for <br /> Elementor seamlessly integrates with the Elementor
            platform, providing you <br /> with a seamless and intuitive
            experience.
          </p>
        </div>

        <div className="featured  w-full md:grid lg:flex  grid-rows-2  mx-auto  justify-between items-center gap-3">
          {featuresData.map((data, index) => (
            <div
              key={data.id}
              className={`mx-auto     bg-transparent w-100 bg-gradient-to-b from-[#0D061F] to-[#251E35]
              rounded-lg ${
                index === featuresData.length - 1
                  ? "md:col-span-2 md:w-full md:justify-center"
                  : "w-full"
              }`}
            >
              <img
                src={data.img}
                alt={data.title}
                className="mb-4 bg-transparent"
              />
              <div className="bg-transparent p-6">
                <h2
                  className="text-[23px] font-bold mb-2 text-[#EEE5FF] bg-transparent"
                  style={{ fontFamily: "Outfit, Sans-serif" }}
                >
                  {data.title}
                </h2>
                <p
                  className="text-[#EEE5FFBD] text-[18px] font-[300] leading-9 m-0 bg-transparent"
                  style={{ fontFamily: "Outfit, Sans-serif" }}
                >
                  {data.dsc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Features;
