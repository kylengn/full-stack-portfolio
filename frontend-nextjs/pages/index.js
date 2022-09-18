import Head from "next/head";
import Intro from "../src/containers/Intro/Intro";
import About from "../src/containers/About/About";
import Skills from "../src/containers/Skills/Skills";
import Qualifications from "../src/containers/Qualifications/Qualifications";
import Services from "../src/containers/Services/Services";
import Portfolio from "../src/containers/Portfolio/Portfolio";
import CallToAction from "../src/containers/CallToAction/CallToAction";
import Testimonials from "../src/containers/Testimonials/Testimonials";
import Contact from "../src/containers/Contact/Contact";
import { client } from "../src/client";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import { useEffect, useLayoutEffect } from "react";

import { UilArrowUp } from "@iconscout/react-unicons";

export default function Home({
  intro,
  about,
  skills,
  qualifications,
  services,
  portfolio,
  callToAction,
  testimonials,
  contact,
}) {
  useEffect(() => {
    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll(".nav__link");

    const linkAction = () => {
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove("show-menu");
    };
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };
    window.addEventListener("scroll", scrollActive);

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    const scrollHeader = () => {
      const scrollY = window.pageYOffset;
      const nav = document.getElementById("header");
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (scrollY >= 80) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", scrollHeader);

    /*==================== SHOW SCROLL UP ====================*/
    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrollUp);

    /*==================== DARK LIGHT THEME ====================*/
    // const themeButton = document.getElementById("theme-button");
    // const darkTheme = "dark-theme";
    // const iconTheme = "uil-sun";

    // // Previously selected topic (if user selected)
    // const selectedTheme = localStorage.getItem("selected-theme");
    // const selectedIcon = localStorage.getItem("selected-icon");

    // // We obtain the current theme that the interface has by validating the dark-theme class
    // const getCurrentTheme = () =>
    //   document.body.classList.contains(darkTheme) ? "dark" : "light";
    // const getCurrentIcon = () =>
    //   themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

    // // We validate if the user previously chose a topic
    // if (selectedTheme) {
    //   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    //   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    //     darkTheme
    //   );
    //   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    //     iconTheme
    //   );
    // }

    // // Activate / deactivate the theme manually with the button
    // themeButton.addEventListener("click", () => {
    //   // Add or remove the dark / icon theme
    //   document.body.classList.toggle(darkTheme);
    //   themeButton.classList.toggle(iconTheme);
    //   // We save the theme and the current icon that the user chose
    //   localStorage.setItem("selected-theme", getCurrentTheme());
    //   localStorage.setItem("selected-icon", getCurrentIcon());
    // });
  }, []);
  return (
    <>
      <Head>
        <title>Kyle | Frontend Developer</title>
        <meta name="description" content="Kyle's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="main">
        <section className="home section" id="home">
          {intro.map((item, idx) => (
            <Intro intro={item} key={idx} />
          ))}
        </section>

        <section className="about section" id="about">
          {about.map((item, idx) => (
            <About about={item} key={idx} />
          ))}
        </section>

        <section className="skills section" id="skills">
          {skills.map((item, idx) => (
            <Skills skills={item} key={idx} />
          ))}
        </section>

        <section className="qualification section">
          {qualifications?.map((item, idx) => (
            <Qualifications qualifications={item} key={idx} />
          ))}
        </section>

        <section className="services section" id="services">
          {services?.map((item, idx) => (
            <Services services={item} key={idx} />
          ))}
        </section>

        <section className="portfolio section" id="portfolio">
          {portfolio?.map((item, idx) => (
            <Portfolio portfolio={item} key={idx} />
          ))}
        </section>

        <section className="project section">
          {callToAction?.map((item, idx) => (
            <CallToAction callToAction={item} key={idx} />
          ))}
        </section>

        <section className="testimonial section">
          {testimonials?.map((item, idx) => (
            <Testimonials testimonials={item} key={idx} />
          ))}
        </section>

        <section className="contact section" id="contact">
          {contact?.map((item, idx) => (
            <Contact contact={item} key={idx} />
          ))}
        </section>
      </main>

      <Footer />

      {/* <!--==================== SCROLL TOP ====================--> */}
      <a href="#" className="scrollup" id="scroll-up">
        <UilArrowUp width={30} height={30} className="scrollup__icon" />
      </a>
    </>
  );
}

export async function getStaticProps() {
  const intro = await client.fetch(`*[_type == "intro"]`);
  const about = await client.fetch(`*[_type == "about"]`);
  const skills = await client.fetch(`*[_type == "skills"]`);
  const qualifications = await client.fetch(`*[_type == "qualifications"]`);
  const services = await client.fetch(`*[_type == "services"]`);
  const portfolio = await client.fetch(`*[_type == "portfolio"]`);
  const callToAction = await client.fetch(`*[_type == "callToAction"]`);
  const testimonials = await client.fetch(`*[_type == "testimonials"]`);
  const contact = await client.fetch(`*[_type == "contact"]`);

  return {
    props: {
      intro,
      about,
      skills,
      qualifications,
      services,
      portfolio,
      callToAction,
      testimonials,
      contact,
    },
  };
}
