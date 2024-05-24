import Container from "../../Shared/Container";
import image1 from "../../../assets/motionarteffect-img2.png";
import star from "../../../assets/motionarteffect-img4.png";
import image2 from "../../../assets/motionarteffect-img1.png";
import image3 from "../../../assets/motionarteffect-img3.png";

const ratingData = [
  {
    id: 1,
    subImage: image1,
    ratingImage: star,
  },
  {
    id: 2,
    subImage: image2,
    ratingImage: star,
  },
  {
    id: 3,
    subImage: image3,
    ratingImage: star,
  },
];


const Rating = () => {
  return (
    <Container>
      <section className="rating py-8">
        <h1
          className="text-[#EEE5FF] text-center text-[22px] font-[400]  mb-8 mx-auto"
          style={{
            fontFamily: "Outfit, Sans-serif",
          }}
        >
          Trusted by thousands of users around the world
        </h1>
        <div className="rating w-full md:grid lg:flex grid-rows-2 mx-auto justify-between items-center gap-6 space-y-6">
          {ratingData.map((data, index) => (
            <div
              key={data.id}
              id="ratings"
              className={` flex items-center gap-6 mx-auto ${
                index === 2
                  ? "md:col-span-2 md:w-full md:justify-center"
                  : "w-full"
              } `}
            >
              <img
                src={data.subImage}
                alt="sub-image"
                className="w-20 h-20 m-0 p-0"
              />
              <div className="space-y-3">
                <img src={data.ratingImage} alt="star" className="" />
                <p>4.5 Score, 9 Reviews</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Rating;
