/* EXAMPLE */

import React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "twin.macro";
import { Box, Flex } from "@chakra-ui/react";
// import EmbedYoutube from "../components/EmbedYoutube";
import ScrollToTop from "react-scroll-to-top";
import "../styles/global.css";
// import GbiBridged from '../components/text'

// import SVGLogoInlineSVG from "../images/svg_logo.inline.svg";
// import W3CLogoSVG from "../images/w3c_logo.svg";
import {
  // motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Svg from "../components/Svg";

// const Input = () => <input tw="border hover:border-black" />;

// markup
const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.219999, 0.22], [0, 1]);
  // const white = useTransform(scrollYProgress, [0, 0.25], [0.1, 1]);
  // const offset = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);
  // const red = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);
  // const view = useInView();
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  console.log(ref);
  // const { reff, inViews } = useInView();

  const animation = useAnimation();
  const removeAnimation = useAnimation();
  // const colorAnimation = useAnimation();

  const contents = [
    {
      number: "01",
      title: "machinien",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni iure excepturi quisquam fuga? Magnam molestiae autem similique? Atque suscipit, harum tempore quis quam delectus aspernatur excepturi consequuntur assumenda praesentium!",
      pic: false,
    },
    {
      number: "02",
      title: "supachinen",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni iure excepturi quisquam fuga? Magnam molestiae autem similique? Atque suscipit, harum tempore quis quam delectus aspernatur excepturi consequuntur assumenda praesentium!",
      pic: false,
    },
    {
      number: "03",
      title: "comporomachinen",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni iure excepturi quisquam fuga? Magnam molestiae autem similique? Atque suscipit, harum tempore quis quam delectus aspernatur excepturi consequuntur assumenda praesentium!",
      pic: true,
    },
    {
      number: "04",
      title: "sulachimez",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni iure excepturi quisquam fuga? Magnam molestiae autem similique? Atque suscipit, harum tempore quis quam delectus aspernatur excepturi consequuntur assumenda praesentium!",
      pic: true,
    },
  ];

  useEffect(() => {
    // if (view.inView) {
    // console.log('it is in view now: ', inView)
    // colorAnimation.start({
    // fill: "white",
    // stroke: 'white'
    // });
    // }
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
      removeAnimation.start({
        // opacity: 0,
        y: "-25vh",
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100vh",
      });
      removeAnimation.start({
        // opacity: 1,
        originY: -0.5,
        originX: 0.4,
        // fill: 'green',
        // stroke: 'white',

        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Layout refrence={ref} animation={animation}>
      <SEO title="My Amazing Gatsby App" />
      <ScrollToTop
        aria-label="scroll to top"
        style={{ backgroundColor: "" }}
        className="scroll-to-top"
        /*
        Example with custom SVG component:
        component={
          <FontAwesomeIcon
            tw=" w-full h-full text-white outline-none"
            icon={faChevronUp}
          />
        }
        */
        smooth
        top={0}
      />

      {/* <Box ref={ref}>
        <Footer animate={animation} />
      </Box> */}
      <main>
        <title>Home Page</title>
        {/* <div>
          <img src={W3CLogoSVG} />
        </div> */}

        {/* <section>
          <div>
            <EmbedYoutube videoId="WFOxZAmB_1Y" />
          </div>
          <div>
            <SVGLogoInlineSVG />
          </div>
        </section> */}
        <Box className="">
          <Flex w="full" className="image z-0 justify-center w-full">
            <Svg
              removeAnimation={removeAnimation}
                    opacity={opacity}
                    scale={scale}
            />
          </Flex>
          <Hero />

          {contents.map((cont, i) => {
            // console.log(cont)
            return (
              <Content
                info={cont.info}
                title={cont.title}
                number={cont.number}
                key={i}
                cofee={cont.pic}
              />
            );
          })}
        </Box>
        {/* <GbiBridged/> */}
      </main>
    </Layout>
  );
};;;

export default IndexPage;
