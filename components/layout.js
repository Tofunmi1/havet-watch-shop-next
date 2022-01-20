import Navbar from './nav'
import style from '../styles/layout.module.css'

const Layout = ({children}) => {
  return(
    <div id={style.Layout}>
      <div><Navbar/></div>
      {children}
    </div>
  )
}

export default Layout
