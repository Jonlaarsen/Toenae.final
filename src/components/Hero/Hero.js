import React from "react";
import "./Hero.css";

import {
  ScrollContainer,
  Animator,
  ScrollPage,
  Sticky,
  batch,
  ZoomOut,
  FadeIn,
  FadeOut,
  ZoomIn,
  StickyIn,
  StickyOut,
  Fade,
} from "react-scroll-motion";

const Hero = () => {
  const ZoomInScrollOut = batch(
    FadeIn(0, 0, 0, 10, 40, 60, 80, 100),
    Sticky(),
    ZoomOut(3, 25),
    FadeOut(2, 0)
  );

  const HeroScroll = batch(Sticky(), ZoomOut(5, 18), FadeOut(2, 0));

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={HeroScroll}>
            <p className="logo">scroll down</p>
            <div>
              <img
                src="https://assets.bigcartel.com/theme_images/60399594/TOENAE_text_logo.png?auto=format&fit=max&h=400&w=1068"
                width="100"
                alt="Free Download Of Blank T Shirt Icon Clipart"
              />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <div className="">
              <a
                href="https://www.freeiconspng.com/img/30268"
                title="Image from freeiconspng.com"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/581499b8e58c627afce6221c/1581466535600-K13XTW44G4XOOC0RFPN5/winky.gif?format=500w"
                  width="50"
                  alt="Free Download Of Blank T Shirt Icon Clipart"
                />
              </a>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <div className="">
              <a
                href="https://www.freeiconspng.com/img/30268"
                title="Image from freeiconspng.com"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/581499b8e58c627afce6221c/1581466535600-K13XTW44G4XOOC0RFPN5/winky.gif?format=500w"
                  width="50"
                  alt="Free Download Of Blank T Shirt Icon Clipart"
                />
              </a>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <div className="">
              <a
                href="https://www.freeiconspng.com/img/30268"
                title="Image from freeiconspng.com"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/581499b8e58c627afce6221c/1581466535600-K13XTW44G4XOOC0RFPN5/winky.gif?format=500w"
                  width="50"
                  alt="Free Download Of Blank T Shirt Icon Clipart"
                />
              </a>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <div className="">
              <a
                href="https://www.freeiconspng.com/img/30268"
                title="Image from freeiconspng.com"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/581499b8e58c627afce6221c/1581466535600-K13XTW44G4XOOC0RFPN5/winky.gif?format=500w"
                  width="50"
                  alt="Free Download Of Blank T Shirt Icon Clipart"
                />
              </a>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage></ScrollPage>
      </ScrollContainer>
      {/* <div className="new-herocontainer">
        <h1>NEW SHIT</h1>
        <a
          href="https://www.freeiconspng.com/img/30268"
          title="Image from freeiconspng.com"
        >
          <img
            src="https://www.freeiconspng.com/uploads/blank-t-shirt-png-21.png"
            width="500"
            alt="Free Download Of Blank T Shirt Icon Clipart"
          />
        </a>
        <h1>BUY IT CUNT</h1>
      </div> */}
    </div>
  );
};

export default Hero;
