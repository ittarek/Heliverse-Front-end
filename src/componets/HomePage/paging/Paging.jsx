import React from "react";
import Container from "../../Shared/Container";
import section from "../../../assets/motionarteffect-img11.png";
import page from "../../../assets/motionarteffect-img10.png";
const Paging = () => {
  return (
    <Container>
      <section className="my-[100px]">
        <h1
          className="md:text-[35px] text-center mb-11 font-semibold md:w-[700px] mx-auto  text-[22px]"
          style={{
            fontFamily: "Outfit, Sans-serif",
          }}
        >
          Apply On Any Section Or Enable For Whole Page
        </h1>

        <div className="md:flex justify-between gap-5 relative   items-start">
          <div
            className="bg-transparent bg-gradient-to-b from-[#0D061F] to-[#251E35] p-6  rounded-xl  border border-[#FFFFFF10]"
            style={{
              transition: "background 0.3s",
              borderWidth: "2px 2px 2px 2px",
              boxShadow: "0.3s",
            }}
          >
            <h2
              className="text-[23px] font-bold mb-2 text-[#EEE5FF] bg-transparent"
              style={{ fontFamily: "Outfit, Sans-serif" }}
            >
              Apply On Section Apply on section
            </h2>
            <p
              className="text-[#EEE5FFBD] text-[18px] my-6 font-[300] leading-9 m-0 bg-transparent "
              style={{ fontFamily: "Outfit, Sans-serif" }}
            >
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>

            <img className="bg-transparent" src={section} alt="section" />
          </div>
          <div
            className="bg-transparent bg-gradient-to-b from-[#0D061F] to-[#251E35] p-6 rounded-xl   border-[#FFFFFF10] mt-[70px]"
            style={{
              transition: "background 0.3s",
              borderWidth: "2px 2px 2px 2px",
              boxShadow: "0.3s",
              borderRadius: "20px 20px 20px 20px",
            }}
          >
            <h2
              className="text-[23px] font-bold mb-2 text-[#EEE5FF] bg-transparent"
              style={{ fontFamily: "Outfit, Sans-serif" }}
            >
              Apply On Page Take your website
            </h2>
            <p
              className="text-[#EEE5FFBD] text-[18px] font-[300] my-6 leading-9 m-0 bg-transparent"
              style={{ fontFamily: "Outfit, Sans-serif" }}
            >
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>

            <img className="bg-transparent" src={page} alt="site" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Paging;
