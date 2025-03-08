import Icon from "@/conponents/common/Icon";
import { useState } from "react";

function HeaderSearchBar() {
  const socialList = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: "facebook",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: "twitter",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: "instagram",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "linkedin",
    },
  ];
  const [keyword, setKeyword] = useState("");

  return (
    <div className="header-search-bar">
      <Icon name="hambuger_menu" />
      <div className="social-site">
        <div className="social-icon">
          {socialList.map((social) => (
            <button
              key={social.name}
              type="button"
              onClick={() => window.open(social.url, "_blank")}
            >
              <Icon name={social.icon} />
            </button>
          ))}
        </div>
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
  );
}

export default HeaderSearchBar;
