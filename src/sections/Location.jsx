import { motion } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useLayoutEffect, useRef } from "react"
import styled from "styled-components"
import "./LocationCards.css"
import img1 from "../assets/Images/varthur.webp"
import img2 from "../assets/Images/mahadeva.avif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;

    height: 60vh;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`
const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  const ScrollingRef = useRef(null)

  useLayoutEffect(() => {
    let element = ref.current

    let scrollingElement = ScrollingRef.current
    let t1 = gsap.timeline()
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight
      element.style.height = `calc(${mainHeight / 4}px)`
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: "none",
      })

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
            // markers: true,
          },
        }
      )

      ScrollTrigger.refresh()
    }, 1000)
    ScrollTrigger.refresh()

    return () => {
      t1.kill()
      ScrollTrigger.kill()
    }
  }, [])
  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Find Our Locations...
      </Title>

      <div className="card-container">
        <div className="location-card">
          <img src={img1} alt="Varthur Location" />
          <h3>Varthur Location</h3>
          <p>
            <strong>Address:</strong> 36/3 Sai Gandhi Square, Varthur Main Rd,
            opposite Sigma Tech Park, Ramagondanahalli, Whitefield, Bengaluru,
            Karnataka 560066
          </p>
          <p>
            <strong>Contact:</strong> +91 81973 96646
          </p>
          <a
            href="https://maps.app.goo.gl/GXBWB5Nk5DxYbx8R6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> View on Map
          </a>
          &nbsp;&nbsp;
          <a
            href="https://wa.me/918197396646"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>

        <div className="location-card">
          <img src={img2} alt="Mahadevapura Location" />
          <h3>Mahadevapura Location</h3>
          <p>
            <strong>Address:</strong> chummys challete, 32/4, MTB JJV School
            road, near MTB School, Garudachar Palya, Mahadevapura, Bengaluru,
            Karnataka 560048
          </p>
          <p>
            <strong>Contact:</strong> +91 79471 09212
          </p>
          <a
            href="https://maps.app.goo.gl/kYQScnynaUK4Nitw9"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> View on Map
          </a>
          &nbsp;&nbsp;
          <a
            href="https://wa.me/917947109212"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>
      </div>
    </Section>
  )
}

export default NewArrival
