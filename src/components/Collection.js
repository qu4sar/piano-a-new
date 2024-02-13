import { t } from "i18next";
import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  const collectionData = [
    { id: 1, imgSrc: "./img/imgss/1.png" },
    { id: 2, imgSrc: "/img/imgss/2.png" },
    { id: 3, imgSrc: "/img/imgss/3.png" },
    { id: 4, imgSrc: "/img/imgss/4.png" },
    { id: 5, imgSrc: "/img/imgss/5.png" },
    { id: 6, imgSrc: "/img/imgss/6.png" },
    { id: 7, imgSrc: "/img/imgss/7.png" },
    { id: 8, imgSrc: "/img/imgss/8.png" },
    // Aggiungi altri elementi se necessario
  ];


  const CollectionComponent = () => {
    return (
      <div className="fn_cs_collection">
        <div className="collection_top">
          {collectionData.slice(0, 4).map((item) => (
            <div className="item" key={item.id}>
              <div className="item_in">
                <div className="img">
                  <div className="abs_img" style={{ backgroundImage: `url(${item.imgSrc})` }} />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue={item.imgSrc} />
            </div>
          ))}
        </div>
        <div className="collection_bottom">
          {collectionData.slice(4).map((item) => (
            <div className="item" key={item.id}>
              <div className="item_in">
                <div className="img">
                  <div className="abs_img" style={{ backgroundImage: `url(${item.imgSrc})` }} />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue={item.imgSrc} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text={t("collections.title")}
          data-align="center"
        >
          {t("collections.title")}
        </h3>

        {CollectionComponent()}
        <div className="fn_cs_desc">
          <p>
            {t("collections.description")}
          </p>
          <Link href="/collection">
            <a className="metaportal_fn_button">
              <span>{t("collections.allCollection")}</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collection;
