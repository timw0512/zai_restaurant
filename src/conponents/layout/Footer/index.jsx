import React from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import LogoImage from "@/assets/images/logo_white.svg";
import ProgressBar from "@/conponents/common/ProgressBar";
import { SOCIAL_LIST } from "@/constants/social";
import { useNavigate } from "react-router-dom";

const FooterStyled = styled.div`
  .get-notice-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8f1f1;
    height: 208px;
    margin-top: 60px;
  }
  .get-notice-content {
    display: flex;
    align-items: center;
    gap: 35px;
    max-width: var(--max-width-desktop);
    color: #183354;
    .get-notice {
      display: flex;
      gap: 35px;
      form {
        display: flex;
        align-items: center;
        gap: 35px;
        input {
          width: 250px;
          height: 50px;
          color: #000;
          background: #ffffff;
          padding: 16.5px 20px;
          border-radius: 6px;
          border: none !important;
          &::placeholder {
            font-family: Inter;
            font-weight: 500;
            font-size: 14px;
            color: #6f6f6f;
          }
          &:focus-visible,
          &:focus {
            outline: unset;
          }
        }
        button[type="submit"] {
          padding: 0 45px;
          height: 50px;
          border-radius: 4px;
          background-color: #f4796c;
          font-weight: 700;
          font-size: 14px;
          text-align: center;
          text-transform: capitalize;
          color: #fff;
        }
      }
      p.get-notice-label {
        font-weight: 700;
        font-size: 24px;
        line-height: 28.8px;
        text-transform: capitalize;
        max-width: 175px;
        flex: 1;
      }
    }
    p.social-follow {
      font-weight: 700;
      font-size: 18px;
      line-height: 21.6px;
      text-transform: capitalize;
    }
    .social-list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      .social-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #183354;
        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0c1622;
    height: 535px;
    .footer-content {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 65px;
      max-width: var(--max-width-desktop);
      width: 100%;
      .about-company {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        max-width: 256px;
        img {
          width: 171px;
          height: 50px;
        }
        p.company-description {
          font-family: Inter;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          text-transform: capitalize;
          color: #bacce1;
        }
      }
      .other-menu {
        flex: 1;
        display: flex;
        gap: 30px;
        .menu-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
          .menu-title {
            font-weight: 800;
            font-size: 20px;
            line-height: 24px;
            text-transform: capitalize;
            color: #ffffff;
          }
          .sub-menu {
            display: flex;
            flex-direction: column;
            gap: 10px;
            button {
              font-family: Inter;
              font-weight: 500;
              font-size: 15px;
              line-height: 26.25px;
              text-transform: capitalize;
              color: #bacce1;
            }
          }
          .progress-bar {
            background: transparent;
            .other,
            .intersection {
              border: none;
            }
          }
        }
      }
    }
    .policy-and-copyright {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: var(--max-width-desktop);
      width: 100%;
      height: 100px;
      p {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #7c91aa;
      }
      .policy-and-term {
        display: flex;
        align-items: center;
        gap: 11px;
        .dot-split {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #7c91aa;
        }
      }
    }
  }
`;

function Footer() {
  const navigate = useNavigate();
  const fakeMenu = [
    {
      title: "Company",
      children: [
        { title: "About Us", url: "" },
        { title: "The Test Kitchen", url: "" },
        { title: "Podcast", url: "" },
        { title: "Events", url: "" },
        { title: "Jobs", url: "" },
      ],
    },
    {
      title: "Get Help",
      children: [
        { title: "Contact & Faq", url: "" },
        { title: "Oders & Returns", url: "" },
        { title: "Gift Cards", url: "" },
        { title: "Register", url: "" },
        { title: "Catalog", url: "" },
      ],
    },
    {
      title: "Explore",
      children: [
        { title: "The Shop", url: "" },
        { title: "Recipes", url: "" },
        { title: "Food", url: "" },
        { title: "Travel", url: "" },
        { title: "Hotline", url: "" },
      ],
    },
    {
      title: "Follow us On",
      children: [
        { title: "Facebook", url: "" },
        { title: "Twitter", url: "" },
        { title: "Instagram", url: "" },
        { title: "Youtube", url: "" },
        { title: "Pinterest", url: "" },
      ],
    },
  ];

  return (
    <FooterStyled>
      <div className="get-notice-container">
        <div className="get-notice-content">
          <div className="get-notice">
            <p className="get-notice-label">Get Our Latest News & Update</p>
            <form>
              <input
                type="text"
                placeholder="Name"
              />
              <input
                type="email"
                placeholder="E-mail"
              />
              <button type="submit">Submit Now</button>
            </form>
          </div>
          <p className="social-follow">Follow Us:</p>
          <div className="social-list">
            {SOCIAL_LIST.map((social) => (
              <button
                type="button"
                className="social-btn"
                key={social.name}
                onClick={() => window.open(social.url, "_blank")}
              >
                <Icon name={social.icon} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="about-company">
            <button type="button">
              <img
                src={LogoImage}
                alt="zaira_logo"
              />
            </button>
            <p className="company-description">
              Browned butter and brown sugar caramelly goodness, crispy edges
              thick and soft centers and melty little puddles of chocolate.
            </p>
          </div>
          <div className="other-menu">
            {fakeMenu?.map((menu, index) => (
              <div
                className="menu-item"
                key={`other_menu_${menu?.title}_${index}`}
              >
                <p className="menu-title">{menu?.title}</p>
                <ProgressBar
                  current={1}
                  total={4}
                />
                {menu?.children && (
                  <div className="sub-menu">
                    {menu?.children?.map((subMenu, idx) => (
                      <div
                        className="sub-menu-item"
                        key={`sub_menu_${subMenu?.title}_${idx}`}
                      >
                        <button
                          className="sub-menu-title"
                          onClick={() => navigate(`/${subMenu?.url}`)}
                        >
                          {subMenu?.title}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="policy-and-copyright">
          <div className="policy-and-term">
            <p>Privacy Policy & Terms</p>
            <p className="dot-split"></p>
            <p>Site Credits</p>
          </div>
          <p className="copyright">© 2023 All Rights Reserved</p>
        </div>
      </footer>
    </FooterStyled>
  );
}

export default Footer;
