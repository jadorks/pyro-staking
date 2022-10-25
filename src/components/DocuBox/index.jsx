import React from "react";
import style from "./docu-box.module.css";
import ExternalLink from "../../assets/images/external-link.svg";
import PyroSymbol from "../../assets/images/pyro-symbol.svg";

const DocuBox = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p className={style.info__title}>More Info</p>
          <a
            href="https://pyrodapp.com"
            target="_blank"
            rel="noreferrer"
            className={style.info__link}
          >
            View Pyro on Etherscan
            <img src={ExternalLink} alt="" />
          </a>
        </div>
        <div className={style.info__body}>
          <div className={style.body__content}>
            <p>Pyro Max Supply</p>
            <div className="flex items-center gap-2">
              <img src={PyroSymbol} alt=""/>
              <p className="pt-1">1000000</p>
            </div>
          </div>
          <div className={style.body__content}>
            <p>Pyro Staking Instructions</p>
            <a
              href="https://pyrodapp.com"
              target="_blank"
              rel="noreferrer"
              className={style.info__link}
            >
              View Instructions
              <img className="w-4" src={ExternalLink} alt="" />
            </a>
          </div>
          <div className={style.body__content}>
            <p>Pyro APR</p>
            <div className={style.apr}>10.0%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocuBox;
