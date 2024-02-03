import "./home.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FreeTrial from "../../components/free-trial/freeTrial";
import Icon from "../../components/icon";
import {
  services,
  processes,
  showcases1,
  showcases2,
} from "../../assets/js/home-data";
import { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState({
    left: false,
    right: false,
  });

  return (
    <div className="home">
      <Header bg="black" />

      {/* HERO SECTION START */}
      <section className="hero">
        <div className="gradient" />

        <div className="hero__upper-part">
          <article className="hero__text">
            <h1>
              Ready to take your <br />
              <span className="hero__text--highlighted">Business Growth</span>
              <br />
              to the next level?
            </h1>
            <p>
              Business growth refers to the point when a company must explore
              other options to generate profit. It involves the steps the
              business must take to reach the “next level” (whatever that level
              may be).
            </p>
            <FreeTrial bg="white" />
          </article>

          <article className="hero__photo">
            <div className="hero__photo-wrapper">
              <img src="assets/hero-img.png" width={300} alt="home hero" />
            </div>
          </article>
        </div>

        <article className="hero__brands">
          <h2>Trusted by Leading Brands</h2>

          <div className="hero__brands-logos">
            <img src="assets/logo1.svg" alt="different companies logos" />
            <img src="assets/logo2.svg" alt="different companies logos" />
            <img src="assets/logo3.svg" alt="different companies logos" />
            <img src="assets/logo4.svg" alt="different companies logos" />
          </div>
        </article>
      </section>
      {/* HERO SECTION END */}

      {/* SERVICES SECTION START */}
      <section className="services">
        <h2>Our Services</h2>
        <h1>High-impact services for your business</h1>
        <div className="services__grid">
          {services.map((item, index) => (
            <ServiceBlock key={index} item={item} />
          ))}
        </div>
      </section>
      {/* SERVICES SECTION END */}

      {/* ABOUT-US SECTION START */}
      <section className="aboutUs">
        <div className="aboutUs__images">
          <img
            className="fChild"
            src="assets/home-page-bottom-layer-img.png"
            alt="home page"
          />
          <img
            className="sChild"
            src="assets/home-page-middle-layer-img.png"
            alt="home page"
          />
          <img
            className="tChild"
            src="assets/home-page-top-layer-img.png"
            alt="home page"
          />
        </div>

        <div className="aboutUs__info">
          <h2>About us</h2>
          <h1>The core mission behind all our work</h1>
          <p className="aboutUs__long-text">
            The noble mission of our dedicated group of individuals is rooted in
            the unwavering commitment to fostering positive change and creating
            a better world for all. With a profound sense of purpose, we aim to
            address the diverse needs of society through collective efforts and
            transformative initiatives.
          </p>
          <div className="aboutUs__numbers">
            <section>
              <p className="bigNumber">330 +</p>
              <p className="smallNumber">Companies helped</p>
            </section>
            <section>
              <p className="bigNumber">230 +</p>
              <p className="smallNumber">Revenue generated</p>
            </section>
          </div>
          <FreeTrial bg="white" />
        </div>
      </section>
      {/* ABOUT-US SECTION END */}

      {/* PROCESS SECTION START */}
      <section className="process">
        <h2>Process</h2>
        <h1>Process that moves things forward</h1>
        <div className="process__flex">
          {processes.map((item, index) => (
            <ProcessBlock key={index} item={item} index={index} />
          ))}
        </div>
      </section>
      {/* PROCESS SECTION END */}

      {/* SHOWCASES SECTION START */}
      <section className="showcases">
        <h2>Recent Showcase</h2>
        <div className="showcases__flexbox">
          <div className="showcases__left-part">
            {showcases1.map((item, index) => (
              <ShowcaseBlock key={index} item={item} />
            ))}
          </div>
          <div className="showcases__right-part">
            <div className="showcases__btn">
              <FreeTrial bg="black" />
            </div>
            {showcases2.map((item, index) => (
              <ShowcaseBlock key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      {/* SHOWCASES SECTION START */}

      {/* TESTIMONIAL SECTION START */}
      <section className="testimonial">
        <img src="assets/testimonial-person-01.png" alt="testimonial" />
        <h2>
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </h2>
        <div>
          <h3>Jacqueline Miller</h3>
          <p>CEO of an eduport</p>
        </div>
        <div className="testimonial__btns">
          <img
            onMouseOver={() => setIsHovered((p) => ({ ...p, left: true }))}
            onMouseOut={() => setIsHovered((p) => ({ ...p, left: false }))}
            src={`assets/${
              isHovered.left ? "arrow-left-hover" : "arrow-left"
            }.png`}
            alt="left arrow icon"
          />
          <img
            onMouseOver={() => setIsHovered((p) => ({ ...p, right: true }))}
            onMouseOut={() => setIsHovered((p) => ({ ...p, right: false }))}
            src={`assets/${
              isHovered.right ? "arrow-right-hover" : "arrow-right"
            }.png`}
            alt="right arrow icon"
          />
        </div>
      </section>
      {/* TESTIMONIAL SECTION START */}

      <Footer />
    </div>
  );
};

export default Home;

function ServiceBlock({ item }) {
  return (
    <article className="services__aService">
      <Icon size={80} icon={item.icon} bg="black" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

function ProcessBlock({ item, index }) {
  return (
    <article className="process__aProcess">
      <div className="process__icon-title-div">
        <Icon size={80} icon={item.icon} bg="black" />
        <h3>{item.title}</h3>
      </div>
      <p>{item.description}</p>
      <img
        className="wrapper"
        src={`assets/${
          window.innerWidth <= 1900
            ? "wrapper2"
            : index === processes.length - 1
            ? "wrapper2"
            : "wrapper"
        }.png`}
        alt="wrapper icon"
      />
      {index !== processes.length - 1 && (
        <img className="arrow" src="assets/gray-arrow.svg" alt="arrow icon" />
      )}
    </article>
  );
}

function ShowcaseBlock({ item }) {
  return (
    <article className="showcases__aShowcase">
      <img src={`assets/${item.photo}.png`} alt="showcase" />
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}
