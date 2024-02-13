import { t } from "i18next";
import { useEffect, useState } from "react";
import { sliderManagement } from "./HeroSliderUtils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Hero4Slider } from "../sliderProps";

// Import Swiper styles
import 'swiper/css';
import { getSlides } from "../redux/actions/nfts";


// Esempio di dataset dinamico per gli slider
const sliderComponentData = [
  { id: 1, src: "/img/imgss/1.png", alt: "Slide 1", hasVideo: false },
  { id: 2, src: "/img/imgss/2.png", alt: "Slide 2", hasVideo: false },
  { id: 3, src: "/img/imgss/3.png", alt: "Slide 3", hasVideo: true, videoUrl: "" },
];


const HeroSliderFull = () => {

  const [slides, setSlides] = useState(sliderComponentData);
  useEffect(() => {
   
    sliderManagement();
  }, []);

  return (
    <section id="home" style={{ width: '100vw', height: '90vh', overflow: 'hidden' }}>
      <div className="container" style={{ height: '100%' }}>
        {/* Full screen image */}
        <div className="slider_part" style={{ height: '100%' }}>
          <Swiper {...Hero4Slider} className="swiper-container" style={{ height: '100%' }}>
            <div className="swiper-wrapper">
              {
                slides?.map((item, index) => {
                  return (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="item">
                        <div className="img_holder">
                          <div
                            className="abs_img"
                            data-bg-img={item.src}
                            style={{}}
                          />
                          <img src="/img/1x1.jpg" alt="" />
                          {item.hasVideo && (
                            <a className="popup-youtube metaportal_fn_videobutton" href={item.videoUrl}>
                              <img src="/svg/play.svg" alt="" className="fn__svg" />
                            </a>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }


            </div>
          </Swiper>



        </div>
      </div>
    </section>
  );
};
export default HeroSliderFull;
