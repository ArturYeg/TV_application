import secondsToHoursMinutes from '../../utils/ConvertTime'
import bg from '../../assets/FeaturedCoverImage.png'
import styles from './FeaturedView.module.css'
import { useEffect, useState } from 'react'

function FeaturedView({ data, selectedItem }) {
  let item = selectedItem ? selectedItem : data
  var result = secondsToHoursMinutes(item.Duration)

  const [playVideo, setPlayVideo] = useState(false)
  const [video, setVideo] = useState('')
  const handleVideoEnded = () => {
    console.log('Video ended!')
    setPlayVideo(false)
  }
  useEffect(() => {
    if (selectedItem) {
      const timeoutId = setTimeout(() => {
        setPlayVideo(true)
        setVideo(selectedItem.VideoUrl)
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [selectedItem])
  console.log(playVideo)
  return (
    <div
      className={styles.featur_container}
      style={{ backgroundImage: `url(${bg})`, backgroundPositionX: '200px' }}
    >
      {playVideo && (
        <div className={styles.video}>
          <video
            autoPlay={playVideo}
            onEnded={handleVideoEnded}
            width="95%"
            height="full"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      <p className={styles.category}>{item.Category}</p>
      <div>
        <img
          src={require(`../../assets/${item.TitleImage}`)}
          alt={item.Title}
          width={'680px'}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <p className={styles.text}>{item.ReleaseYear}</p>
        <p className={styles.text}>{item.MpaRating}</p>
        <p className={styles.text}>
          {result.hours + ' h ' + result.minutes + ' m '}
        </p>
      </div>
      <div style={{ width: '800px' }}>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '18px', marginTop: '26px' }}>
        <button className={styles.play}>Play</button>
        <button className={styles.MoreInfo}>More Info</button>
      </div>
    </div>
  )
}

export default FeaturedView
