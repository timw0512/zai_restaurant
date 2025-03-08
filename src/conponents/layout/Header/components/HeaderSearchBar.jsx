import Icon from "@/conponents/common/Icon";
import { useState } from "react";
import { SOCIAL_LIST } from "@/constants/social";

function HeaderSearchBar() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="header-search-bar">
      <div className="header-content">
        <button
          type="button"
          className="hamberger-menu"
          onClick={() => console.log("Hamberger menu clicked")}
        >
          <Icon name="hambuger_menu" />
        </button>
        <div className="social-site">
          <div className="social-icon">
            {SOCIAL_LIST.map((social) => (
              <button
                key={social.name}
                type="button"
                onClick={() => window.open(social.url, "_blank")}
              >
                <Icon name={social.icon} />
              </button>
            ))}
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search here . . ."
          />
          <button
            type="button"
            onClick={() => console.log({ keyword })}
          >
            <Icon name="search" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearchBar;
