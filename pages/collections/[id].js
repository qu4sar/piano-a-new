import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../../src/layout/Layout";
import { getNfts, getWorks, getSingleCollection ,getColletions} from "../../src/redux/actions/nfts";
import { t } from "i18next";
const Nft = ({ getSingleCollection, nft, getWorks, nfts, getColletions }) => {
  const router = useRouter();
  const { id } = router.query;
  const [similarItem, setSimilarItem] = useState([]);
  
  useEffect(() => {
    getColletions();
    getSingleCollection(id);
    getWorks();
  }, [id]);

  useEffect(() => {
    if (nfts && nft) {
      setSimilarItem(
        nfts.filter(
          (nft_) =>
            nft_.type === nft.type ||
            nft.special === nft_.special ||
            nft.clothing == nft_.clothing
        )
      );
    }
  }, [nfts]);

  const [quantity, setQuantity] = useState(nft ? nft.quantity : 0);

  const updateQuantity = (type) => {
    if (type == "+") {
      setQuantity((nft.quantity = nft.quantity + 1));
    } else {
      setQuantity((nft.quantity = nft.quantity == 1 ? 1 : nft.quantity - 1));
    }
  };

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div
                  className="img_in"
                  style={{ backgroundImage: `url(${nft && nft.image})` }}
                >
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/facebook-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/instagram-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/pinterest-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/behance-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/collection">
                    <a>Collection</a>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">{nft && nft.title}</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text={nft && nft.title}
                data-align="left"
              >
                {nft && nft.title}
              </h3>
              <div className="desc">
                <p>
                  {nft && nft.description}
                </p>
                <p>
                  {nft && nft.description1}
                </p>
              </div>
              {/* <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/portal.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>{t("singlecollection.info")}</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>{t("singlecollection.works")}</h4>
                      <h3>{nft && nft.works}</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>{t("singlecollection.date")}</h4>
                      <h3>{nft && nft.date}</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>{t("singlecollection.location")}</h4>
                      <div className="qnt">

                        <span className="summ" data-price={nft && nft.location}>
                          {nft && nft.location}
                        </span>

                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>{t("singlecollection.city")}</h4>
                      <h3>
                        {nft && nft.city}
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">

                <p>
                  {nft && nft.description}
                </p>

                <p>
                  {nft && nft.description1}
                </p>
              </div>
            </div>
            
          </div>
          {/* !Mint Box */}
          {/* NFT Categories */}
          
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Works">
              Works
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                {nfts &&
                  similarItem.map(
                    (nft, i) =>
                      nft.id < 8 && (
                        <li key={nft.id}>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={nft.image} alt="" />
                              <Link href={`/work/${nft.id}`}>
                                <a className="full_link"></a>
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <a href="#">{nft.title}</a>
                              </h3>
                            </div>
                          </div>
                        </li>
                      )
                  )}
              </ul>
            </div>
          </div>

          {/* !NFT Categories */}
          {/* Similar Items */}
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Similar Items">
              Similar Items
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                {nfts &&
                  similarItem.map(
                    (nft, i) =>
                      nft.id < 8 && (
                        <li key={nft.id}>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={nft.image} alt="" />
                              <Link href={`/collections/${nft.id}`}>
                                <a className="full_link"></a>
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <a href="#">{nft.title}</a>
                              </h3>
                            </div>
                          </div>
                        </li>
                      )
                  )}
              </ul>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  nft: state.nfts.nft,
  nfts: state.nfts.data,
});

export default connect(mapStateToProps, { getSingleCollection, getWorks , getColletions})(Nft);
