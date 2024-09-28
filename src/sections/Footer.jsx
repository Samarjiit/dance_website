import { motion } from "framer-motion"
import React from "react"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import styled from "styled-components"

import Logo from "../assets/Svgs/star_white_48dp.svg"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`

const Footer = () => {
  const { scroll } = useLocomotiveScroll()

  const handleScroll = (id) => {
    let elem = document.querySelector(id)
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    })
  }

  return (
    <Section>
      <LogoContainer>
        <img
          width="300"
          height="300"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
        />
        <h3 data-scroll data-scroll-speed="-1">
          Tapping Feet Dance And Fitness Studio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            about
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#shop")}>
            FORMS
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            CONTACT US
          </li>

          <li>
            <a
              href="https://www.google.com/localservices/prolist?g2lbs=AOHF13mEEJBWxuwh2PJzpOiffLsfCnh9M6m5fBl_nnhdHgYNnUMwyAeBN7xMMzjGT7Vl5fLlEmBSoSkS2vpz04EW4bl9n16aYA%3D%3D&hl=en-IN&gl=in&ssta=1&oq=dance%20class%20near%20me&src=2&sa=X&sqi=2&q=dance%20class%20in%20varthur&ved=2ahUKEwjkuO-Ik-WIAxVcwYQAHVJQDToQjdcJegQIABAF&spp=Cg0vZy8xMXRkYmgwaDMxOpgBV2h3UUFCQUJJaFprWVc1alpTQmpiR0Z6Y3lCcGJpQjJZWEowYUhWeXFnRlFFQUVxRHlJTFpHRnVZMlVnWTJ4aGMzTW9BRElmRUFFaUc3WXBKbDNYR1JEOWtEUzNJSXJEdzNrWkppRzcwUEtNRDZMWjZ6SWFFQUlpRm1SaGJtTmxJR05zWVhOeklHbHVJSFpoY25Sb2RYST0%3D&slp=MgBAAVIECAIgAGgBiAEAmgEGCgIXGRAA&scp=ChFnY2lkOmRhbmNlX3NjaG9vbBIgIghtYXAgYXJlYSoUDcyurQcVkfhTLh0nDscHJYxmXS4aACoMRGFuY2Ugc2Nob29sOgJAAQ%3D%3D#ts=3"
              target={"_blank"}
              rel="noreferrer"
            >
              reviews
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2024. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by{" "}
            <a href="" target={"_blank"} rel="dofollow noreferrer">
              Samarjiit
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  )
}

export default Footer
