import styles from './index.module.scss'
// import closeImg from '@renderer/assets/home/livehome_6.png'
import { useLocation } from 'react-router'

const Nav = () => {
  const location = useLocation()
  const closeApp = () => {}
  return (
    <div className={styles['custom-title-bar']}>
      {location.pathname == '/' && (
        <div className={styles['custom-title-bar__imgMain']} onClick={closeApp}></div>
      )}
    </div>
  )
}

export default Nav
