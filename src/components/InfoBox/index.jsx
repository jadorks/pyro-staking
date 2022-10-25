import React from "react";
import style from "./info-box.module.css";
import Info1 from "../../assets/images/info_one.svg";
import PyroSymbol from "../../assets/images/pyro-symbol.svg";

const InfoBox = ({title}) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p>{title}</p>
          <img src={Info1} alt="" />
        </div>
        <div className={style.info__value}>
          <img src={PyroSymbol} alt="" />
          <p>100</p>
        </div>
        <div className={style.usdt_value}>USDT Value: $0,000.00</div>
      </div>
    </div>
  );
};

export default InfoBox;
