import style from '../styles/nav.module.css'
import Image from 'next/image'
import NextLink from 'next/link'
import Logo from '../public/logo-600x.png'
import LogoSvg from '../public/logo-havet-4_600x.svg'
import { MdPersonOutline } from 'react-icons/md'//person
import { MdFavoriteBorder } from 'react-icons/md'//favourite,hearth
import { MdOutlineShoppingBag } from 'react-icons/md' //shopping-bag

const Navbar = () => {
  return (
    <div id={style.nav}>

      <div className={style.navLinks}>
        <NextLink href='/for-men'>
          <button className={style.navLinkButton}>
          <h1>For Men</h1>
          </button>
        </NextLink>
         <NextLink href='/for-men'>
          <button className={style.navLinkButton}>
          <h1>For women</h1>
          </button>
          </NextLink>
           <NextLink href='/for-men'>
          <button className={style.navLinkButton}>
          <h1>The breaking point</h1>
          </button>
          </NextLink>
      </div>

        <Image src={LogoSvg} alt='logo' height={40} width={80} className={style.logo}/>

      <div className={style.utilityIcons}>
    <div className={style.utilityIcon}>
        <MdPersonOutline/>
       </div>
       <div className={style.utilityIcon}>
        <MdFavoriteBorder/>
       </div>
       <div className={style.utilityIcon}>
        <MdOutlineShoppingBag/>
      </div>
        <div className={style.itemNumber}><h1 style={{fontSize:'0.8rem', margin:'auto'}}>12</h1></div>
      </div>

    </div>
  )
}

export default Navbar
