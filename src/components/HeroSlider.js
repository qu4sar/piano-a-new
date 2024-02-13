import { t } from "i18next";
import { useEffect, useState } from "react";
import { sliderManagement } from "./HeroSliderUtils";
// Definizione della struttura dei dati degli slider
const sliderData = [
  { src: "/img/imgss/10.png", alt: "Slide 1", hasVideo: false },
  { src: "/img/imgss/8.png", alt: "Slide 2", hasVideo: false },
  { src: "/img/imgss/11.png", alt: "Slide 3", hasVideo: true, videoUrl: "https://www.youtube.com/embed/7e90gBu4pas" },
  { src: "/img/imgss/9.png", alt: "Slide 3", hasVideo: true, videoUrl: "https://www.youtube.com/embed/7e90gBu4pas" },
];


// Esempio di dataset dinamico per gli slider
const sliderComponentData = [
  { id: 1, src: "/img/slider/1.jpg", alt: "Slide 1", hasVideo: false },
  { id: 2, src: "/img/slider/2.jpg", alt: "Slide 2", hasVideo: false },
  { id: 3, src: "/img/slider/3.jpg", alt: "Slide 3", hasVideo: true, videoUrl: "https://www.youtube.com/embed/7e90gBu4pas" },
  // Aggiungi altri elementi dello slider qui
];

const HeroSliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Imposta l'indice iniziale a 0

  useEffect(() => {
    sliderManagement();
  }, []);
  // Codice semplificato del componente slider
  return (
    <div className="slider_top">
      <ul>
        {sliderComponentData.map((item, index) => {
          // Determina le classi per gli elementi prev, active e next
          const itemClass = index === activeIndex ? "active" :
            index === activeIndex - 1 ? "prev" :
              index === activeIndex + 1 ? "next" : "";
          return (
            <li key={item.id} className={itemClass} data-index={index + 1}>
              <div className="item">
                <img src="/img/1x1.jpg" alt={item.alt} />
                <div className="item_in">
                  <div className="img" style={{ backgroundImage: `url(${item.src})` }}></div>
                  {item.hasVideo && (
                    <a className="popup-youtube metaportal_fn_videobutton" href={item.videoUrl}>
                      <img src="/svg/play.svg" alt="" className="fn__svg" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const HeroSlider = () => {
  // Hero slider
  useEffect(() => {
    sliderManagement();
  }, []);

  return (
    <section id="home">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text={t("events.title")}
          data-align="center"
        >
          {t("events.title")}
        </h3>

        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src="/img/1x1.jpg" alt="" />
            <ul>
              {
                sliderData.map((item, index) => {
                  const itemClass = index === 1 ? "active" : index === 0 ? "prev" : index === 2 ? "next" : "";
                  return (
                    <li key={index} className={itemClass} data-index={index + 1}>
                      <div className="item">
                        <img src="/img/1x1.jpg" alt="" />
                        <div className="item_in">
                          <div className="img" data-bg-img={item.src} />
                          {item.hasVideo && (
                            <a className="popup-youtube metaportal_fn_videobutton" href={item.videoUrl}>
                              <img src="/svg/play.svg" alt="" className="fn__svg" />
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>


        <div className="fn_cs_desc">
          <p>
            {t("home.description")}
          </p>
          <a
            href="https://instagram.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>{t("home.findUsOnInstagram")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSlider;
