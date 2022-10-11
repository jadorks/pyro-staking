import React from "react";
import style from "./footer.module.css";
import Etherscan from "../../assets/images/pyro-etherscan.svg";
import Linktree from "../../assets/images/pyro-linktree.svg";
import Telegram from "../../assets/images/pyro-tg.svg";
import Twitter from "../../assets/images/pyro-twitter.svg";

const Footer = () => {
  return (
    <div className={style.footer__container}>
      <div className={style.footer__content}>
        <div className={style.footer__left}>
          <h3>Pyro Matic 2022 All rights reserved.</h3>
          <p>Powered by Pyro</p>
        </div>
        <div className={style.footer__right}>
          <div className={style.socials}>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img src={Etherscan} alt="" />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img src={Linktree} alt="" />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img src={Telegram} alt="" />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
