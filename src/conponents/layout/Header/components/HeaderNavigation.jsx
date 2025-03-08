import Icon from "@/conponents/common/Icon";
import LogoImage from "@/assets/images/logo.svg";
import { HEADER_MENU } from "@/constants/headerMenu";
import NavMenuItem from "./NavMenuItem";

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <div className="header-content">
        <button type="button">
          <img
            src={LogoImage}
            alt="zaira_logo"
          />
        </button>
        <nav>
          {HEADER_MENU.map((item) => (
            <NavMenuItem
              key={item.title}
              item={item}
            />
          ))}
        </nav>
        <div className="header-other">
          <button
            className="wish-list"
            type="button"
          >
            <Icon name="heart" />
            <div className="info">
              <span className="value">0</span>
            </div>
          </button>
          <button
            className="cart-list"
            type="button"
          >
            <Icon name="cart" />
            <div className="info">
              <span className="value">0</span>
            </div>
          </button>
          <button
            className="my-account"
            type="button"
          >
            <Icon name="account" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavigation;
