import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import { t } from "i18next";
import { menuItems } from "../Constants";
// export const menuItems = [
//   { label: t("header.Home"), href: "/#home" },
//   { label: t("header.About"), href: "/#about" },
//   { label: t("header.Collection"), href: "/#collection" },
//   { label: t("header.Blog"), href: "/#news" },
//   { label: t("header.Contact"), href: "/#contact" },
// ];

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            {/* <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div> */}
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <a className="creative_link">{t(item.name)}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
