import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
// import About31 from "../../../public/assets/imgs/about/3/1.jpg";
import Image from "next/image.js";

gsap.registerPlugin(ScrollSmoother);

const DigitalMarketingAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area-3">
        <div className="container pt-140 pb-110">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__img-3">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB0ZWNofGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"}
                  alt="About Thumbnail"
                  width={500}
                  height={500}
                  data-speed="auto"
                  className="smootherReset768"
                />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Who We Are</h2>
                <h3 className="sec-title title-anim">
                  We are a leading blockchain research and development lab.
                </h3>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>
                    KAYABA LABS is a leading blockchain research and development lab based in Accra, Ghana, 
                    serving clients globally. We specialize in training individuals and teams in Web Development 
                    and blockchain development, incubating innovative Web3 projects, and conducting comprehensive 
                    market research to identify cutting-edge solutions. From our hub in West Africa, we&apos;re 
                    building bridges to international blockchain ecosystems and empowering the next generation 
                    of decentralized technology innovators worldwide.
                  </p>
                  <p>
                    Our pillars: Research & Innovation, Training & Capacity Building, Project Incubation, and
                    Community. We run community-led workshops, mentorship programs, and open-source initiatives
                    to grow Web3 talent across Ghana and beyond.
                  </p>
                  <div className="btn_wrapper">
                    <Link
                      className="wc-btn-light btn-hover btn-item"
                      href="/about"
                    >
                      <span></span> Explore Us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingAbout;
