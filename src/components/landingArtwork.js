import React, { useState } from "react";
import { shuffle } from "lodash";
import { StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";
import { useIntervalWhen } from "rooks";

import TwContainer from "./twContainer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Icon from "./icon";
import styled from "@emotion/styled";
import asanoha from "../images/asanoha.svg";

function RandomWords({ words }) {
  const shuffled = words.slice(0, 1).concat(shuffle(words.slice(1)));
  const [{ i, arr }, setState] = useState({ i: 0, arr: shuffled });
  useIntervalWhen(() => {
    setState({ arr, i: i === arr.length - 1 ? 0 : i + 1 });
  }, 800);
  return <span tw="whitespace-nowrap text-green-300">{arr[i]} </span>;
}

function Text({ text, randomWords }) {
  return (
    <div tw="flex flex-col md:text-left text-center font-display tracking-wider font-bold text-[6vw] md:text-[4vw] lg:text-6xl lg:leading-normal text-primary-lightest">
      {text.split("%%").map((str) =>
        str === "$$" ? (
          <RandomWords key={str} words={Object.values(randomWords)} />
        ) : (
          <span key={str} tw="whitespace-nowrap text-white">
            {str.trim()}{" "}
          </span>
        )
      )}
    </div>
  );
}

function LandingArtworkInner({ i18n }) {
  return (
    <div
      css={[
        tw`h-96 sm:h-[44rem] md:h-[34rem]`,
        tw`bg-gradient-to-b from-shade-light to-backdrop-dark dark:from-black`,
      ]}
    >
      <div tw="h-[200vh] sm:h-[100vh] w-full overflow-hidden">
        <TwContainer>
          <div tw="relative pointer-events-none select-none">
            {/* BG CIRCLE */}
            <div tw="absolute top-[-16rem] md:top-[-36rem] -left-2/4 opacity-40">
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/bg circle.png"
                placeholder="none"
              />
            </div>
            {/* BG BLURS RIGHT */}
            <div tw="absolute -right-1/4 -top-96">
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/blurred spot.png"
                placeholder="blurred"
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/blurred spot.png"
                placeholder="blurred"
              />
            </div>
            {/* BG BLURS LEFT */}
            <div tw="absolute -left-1/3 -top-72">
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/blurred spot.png"
                placeholder="blurred"
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/blurred spot.png"
                placeholder="blurred"
              />
            </div>
            {/* HALO */}
            <div tw="absolute left-12 right-8 -top-10 sm:top-0 sm:left-16 sm:right-10 text-center md:text-left md:left-11 md:top-10">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, 20]}
                opacity={[1, 0]}
              >
                <StaticImage
                  tw="dark:hidden"
                  alt=""
                  src="../images/banner/light mode/Halo effect.png"
                  placeholder="blurred"
                  blurredOptions={{ width: 120 }}
                />
                <StaticImage
                  tw="light:hidden"
                  alt=""
                  src="../images/banner/dark mode/Halo effect.png"
                  placeholder="blurred"
                  blurredOptions={{ width: 120 }}
                />
              </Parallax>
            </div>
            {/* GRID */}
            <div tw="absolute top-56 sm:top-80 -left-1/4">
              <Parallax shouldAlwaysCompleteAnimation opacity={[1, 0]}>
                <StaticImage
                  tw="dark:hidden"
                  alt=""
                  src="../images/banner/light mode/grid.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#ccdaf7" }}
                />
                <StaticImage
                  tw="light:hidden"
                  alt=""
                  src="../images/banner/dark mode/grid.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#2a569e" }}
                />
              </Parallax>
            </div>
            {/* WAVE */}
            <div tw="absolute top-56 sm:top-96 -left-32 -right-32">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, 80]}
                opacity={[1, -1]}
              >
                <StaticImage
                  tw="dark:hidden"
                  alt=""
                  src="../images/banner/light mode/wave.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#44c2a7" }}
                />
                <StaticImage
                  tw="light:hidden"
                  alt=""
                  src="../images/banner/dark mode/wave.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#44c2a7" }}
                />
              </Parallax>
            </div>
            {/* LOGO  */}
            <div tw="absolute text-center top-14 left-14 right-14 sm:left-0 sm:right-0 sm:top-32 md:text-left md:left-10 md:top-40">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, 60]}
                opacity={[2, -2.5]}
              >
                <StaticImage
                  tw="dark:hidden"
                  alt=""
                  src="../images/banner/light mode/big logo.png"
                  placeholder="blurred"
                  blurredOptions={{ width: 120 }}
                />
                <StaticImage
                  tw="light:hidden"
                  alt=""
                  src="../images/banner/dark mode/big logo.png"
                  placeholder="blurred"
                  blurredOptions={{ width: 120 }}
                />
              </Parallax>
            </div>
            {/* CUBE RIGHT */}
            <div tw="absolute right-5 top-20 sm:right-20 sm:top-20">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, 340]}
                opacity={[1, 0]}
                rotate={[0, 500]}
              >
                <StaticImage
                  tw="dark:hidden"
                  alt=""
                  src="../images/banner/light mode/cube 1.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#52b0af" }}
                />
                <StaticImage
                  tw="light:hidden"
                  alt=""
                  src="../images/banner/dark mode/cube 2.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#d78bad" }}
                />
              </Parallax>
            </div>
            {/* CUBE LEFT */}
            <div tw="absolute top-60 left-7 sm:top-96 sm:left-10">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, 60]}
                rotate={[120, -120]}
                opacity={[2, 0]}
              >
                <StaticImage
                  tw="dark:hidden"
                  alt=""
                  src="../images/banner/light mode/cube 2.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#c158f5" }}
                />
                <StaticImage
                  tw="light:hidden"
                  alt=""
                  src="../images/banner/dark mode/cube.png"
                  placeholder="tracedSVG"
                  tracedSVGOptions={{ color: "#5ac093" }}
                />
              </Parallax>
            </div>
            {/* STARS LEFT */}
            <div tw=" absolute left-36 top-10">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, -40]}
                opacity={[2, 0]}
              >
                <StaticImage
                  tw="dark:hidden ml-10 opacity-40"
                  alt=""
                  src="../images/banner/light mode/green stars.png"
                  placeholder="none"
                  // tracedSVGOptions={{ color: "#0cb673", threahold: 1 }}
                />
                <StaticImage
                  tw="light:hidden opacity-80"
                  alt=""
                  src="../images/banner/dark mode/stars.png"
                  placeholder="none"
                />
              </Parallax>
            </div>
            {/* STAR RIGHT */}
            <div tw="absolute right-0 top-96">
              <Parallax
                shouldAlwaysCompleteAnimation
                translateY={[0, -60]}
                opacity={[2, 0]}
              >
                <StaticImage
                  tw="dark:hidden opacity-40"
                  alt=""
                  src="../images/banner/light mode/green star.png"
                  placeholder="none"
                />
                <StaticImage
                  tw="light:hidden opacity-80"
                  alt=""
                  src="../images/banner/dark mode/star.png"
                  placeholder="none"
                />
              </Parallax>
            </div>
            {/* TEXT */}
            <div tw="absolute left-10 right-10 top-80 sm:top-[32rem] md:top-44 md:left-96 md:ml-20 lg:ml-0 lg:left-2/4">
              <Text {...i18n} />
            </div>
          </div>
        </TwContainer>
      </div>
    </div>
  );
}

// const FadingBackgroundDiv = styled.div`
//   ${tw`relative w-full h-full overflow-hidden`}
//   &:before {
//     content: "";
//     ${tw`absolute w-full h-full`}
//     background-image: linear-gradient(to bottom, rgba(255,0,0,0.5), rgba(0,255,0,0.5)), url('${asanoha}');
//     background-repeat: repeat;
//     mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
//     -webkit-mask-image: linear-gradient(
//       to top,
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 0.9)
//     );
//   }
// `;

const FadingBackgroundDiv = styled.div`
  ${tw`w-full h-full overflow-hidden inset-0 absolute`}
  &:after {
    content: "";
    ${tw`absolute w-full h-full`}
    background-image: linear-gradient(to bottom, rgba(74, 222, 128, 0.08), rgba(74, 222, 128, 0.01));
    mask-image: url("${asanoha}");
    mask-repeat: repeat;
    -webkit-mask-image: url("${asanoha}");
    -webkit-mask-repeat: repeat;
  }
`;

export default function LandingArtwork({ i18n }) {
  return (
    <div tw="h-96 sm:h-[44rem] md:h-[34rem] relative bg-green-900 overflow-hidden shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
      <FadingBackgroundDiv />
      <div tw="absolute w-full h-full">
        <TwContainer tw="h-full flex items-center z-10">
          {/* <div tw="text-6xl">Ethereum Classic</div> */}
          <div className="text-center md:text-right">
            <Icon tw="h-[40rem] -my-40 mx-24 text-green-400" icon="etc" />
          </div>
          <div>
            <Text {...i18n} />
          </div>
        </TwContainer>
      </div>
    </div>
  );
  return (
    <ParallaxProvider>
      <LandingArtworkInner {...{ i18n }} />
    </ParallaxProvider>
  );
}
