import React from "react";
import style from "./footer.module.css";
import Etherscan from "../../assets/images/pyro-etherscan.svg";
import Linktree from "../../assets/images/pyro-linktree.svg";
import Telegram from "../../assets/images/pyro-tg.svg";
import Twitter from "../../assets/images/pyro-twitter.svg";
import Uniswap from "../../assets/images/pyro-uniswap.svg";

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
          <a href="https://app.uniswap.org/#/swap?inputCurrency=0x89568569DA9C83CB35E59F92f5Df2F6CA829EEeE&outputCurrency=ETH&chain=mainnet" target="_blank" rel="noreferrer">
              <img src={Uniswap} alt="" />
            </a>
            <a href="https://etherscan.io/token/0x89568569da9c83cb35e59f92f5df2f6ca829eeee" target="_blank" rel="noreferrer">
              <img src={Etherscan} alt="" />
            </a>
            <a href="https://linktr.ee/pyromatic" target="_blank" rel="noreferrer">
              <img src={Linktree} alt="" />
            </a>
            <a href="https://t.me/PyroToken" target="_blank" rel="noreferrer">
              <img src={Telegram} alt="" />
            </a>
            <a href="https://twitter.com/PyroTokenErc" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
