import React , {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'
import i18next from 'i18next'

const handleLanguageChange = (lng) => {
  i18next.changeLanguage(lng)
  localStorage.setItem('lng', lng)
}

const Navbar = () => {
  const {t} = useTranslation();
  
  const Menu = () => (
    <>  
      <p> <a href='#home'>{t("NavBar.Home")}</a></p>
      <p> <a href='#wgpt3'>{t("NavBar.What is GPT3?")}</a></p>
      <p> <a href='#posibility'>{t("NavBar.Open AI")}</a></p>
      <p> <a href='#features'>{t("NavBar.Case Studies")}</a></p>
      <p> <a href='#blog'>{t("NavBar.Library")}</a></p>
    </>
  );

  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar" >
        <div className="gpt3__navbar-links">
            <div className='gpt3__navbar-links_logo'>
              <img src ={logo} alt='logo' />
            </div>
            <div className='gpt3__navbar-links_container'>
              <Menu />
            </div>
        </div>
            <div className='gpt3__navbar-language'>
              <select defaultValue={localStorage.getItem("lng")} onChange={(e) => handleLanguageChange(e.target.value)} className='gpt3__navbar-select'>
                        <option value='en'>English</option>
                        <option value='fr'>Francais</option>
              </select>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>{t("NavBar.Sign In")}</p>
                <button type='button'>{t("NavBar.Sign Up")}</button>  
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu
                  ? <RiCloseLine color='#fff'  size={27} onClick={() => setToggleMenu(false)} />
                  :<RiMenu3Line color='#fff'  size={27} onClick={() => setToggleMenu(true)} />
                }
                { toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                       <div className='gpt3__navbar-menu_container-links'>
                          <Menu />
                      </div>
                      <div className='gpt3__navbar-menu_container-links-sign'>
                          <p>{t("NavBar.Sign In")}</p>
                          <button type='button'>{t("NavBar.Sign Up")}</button>  
                      </div>
                    </div>
                )}
            </div>
    </div>
  );
};

export default Navbar
