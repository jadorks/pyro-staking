import React from 'react';
import Logo from '../../assets/images/pyro-logo.svg'
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__left}>
        <img src={Logo} alt="" />
      </div>
      <div className={style.navbar__right}>
        <button className={style.connect_btn}>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar