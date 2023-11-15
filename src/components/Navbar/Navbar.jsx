import WatchLater from '../../assets/icons/WatchLater.png';
import TvShows from '../../assets/icons/TvShows.png';
import Search from '../../assets/icons/Search.png';
import Movies from '../../assets/icons/Movies.png';
import Genres from '../../assets/icons/Genres.png';
import Home from '../../assets/icons/Home.png';
import styles from './style.module.css';
import { useState } from 'react';

const links = [
  { icon: Search, label: 'Search' },
  { icon: Home, label: 'Home' },
  { icon: TvShows, label: 'TV Shows' },
  { icon: Movies, label: 'Movies' },
  { icon: Genres, label: 'Genres' },
  { icon: WatchLater, label: 'Watch Later' },
]

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState('Home')

  const handleMouseEnter = () => {
    setSidebarOpen(true)
  }

  const handleMouseLeave = () => {
    setSidebarOpen(false)
  }
  const handleLinkClick = (link) => {
    setSelectedLink(link)
  }
  return (
    <div className={`${styles.container} ${isSidebarOpen ? styles.open : ''} `}>
      <div
        className={styles.nav_item}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isSidebarOpen && (
          <div className={styles.profile_info}>
            <div className={styles.profile_icon}>Profile Icon</div>
            <div className={styles.profile_name}>Daniel</div>
          </div>
        )}

        <nav className={styles.nav}>
          <ul className={styles.main_menu}>
            {links.map((item, index) => (
              <li
                key={index}
                className={`${
                  isSidebarOpen ? styles.menu_item_open : styles.menu_item
                } ${selectedLink === item.label ? styles.selected : ''}`}
                onClick={() => handleLinkClick(item.label)}
              >
                <img src={item.icon} alt={item.label} />
                {isSidebarOpen && <span>{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
          {isSidebarOpen && (
            <ul className={styles.additional_menu_items}>
              <li className={styles.additional_menu_items_link}>Language</li>
              <li className={styles.additional_menu_items_link}>Get Help</li>
              <li className={styles.additional_menu_items_link}>Exit</li>
            </ul>
          )}
      </div>
    </div>
  ) 
}

export default Navbar
