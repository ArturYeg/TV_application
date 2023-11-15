import Trending from '../Trending/Trending';
import FeaturedView from '../Featured/FeaturedView';
import styles from './home.module.css';
import data from '../../data.json';
import { useState } from 'react';

function Home() {
  const { Featured, TendingNow } = data
  const [selectedItem, setSelectedItem] = useState(null)

  const handleImageClick = (item) => {
    setSelectedItem(item)
  }

  return (
    <div className={styles.container}>
      <FeaturedView data={Featured} selectedItem={selectedItem} />
      <Trending data={TendingNow} onImageClick={handleImageClick} />
    </div>
  )
}

export default Home
