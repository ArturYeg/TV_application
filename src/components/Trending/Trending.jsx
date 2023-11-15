import styles from './trending.module.css';
import Carousel from '../Carousel';

function Trending({ data, onImageClick }) {
  
  return (
    <div className={styles.container}>
      <p className={styles.trandingNow}> Tranding Now</p>
       
      <Carousel data={data}   onImageClick={onImageClick}/>
    </div>
  )
}

export default Trending
