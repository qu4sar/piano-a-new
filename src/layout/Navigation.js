import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
import { menuItems } from "../Constants";


const Navigation = ({ navigation, navigationToggle }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (name) => {
    setActiveSubMenu(activeSubMenu === name ? null : name);
  };

  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subMenu ? (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu(item.name);
                  }}
                  className={`${activeSubMenu === item.name ? "active" : ""}`}
                >
                  {item.name}
                </a>
              ) : (
                <Link href={item.path}>
                  <a onClick={() => navigationToggle(false)}>{item.name}</a>
                </Link>
              )}
              {activeSubMenu === item.name && (
                <ul className="sub-menu">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.path}>
                        <a onClick={() => navigationToggle(false)}>{subItem.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { navigationToggle })(Navigation);