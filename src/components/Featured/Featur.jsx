import secondsToHoursMinutes from '../../utils/ConvertTime';
import bg from '../../assets/FeaturedCoverImage.png';
import styles from './Featur.module.css';

function Featured({ data, selectedItem }) {
  var result = secondsToHoursMinutes(data.Duration)

  return (
    <div
      className={styles.featur_container}
      style={{ backgroundImage: `url(${bg})`,backgroundPositionX:'200px' }}
    >
      {selectedItem && (
        <div className={styles.video}>
          <video autoPlay loop width="95%" height='full'>
            <source
              src={selectedItem && selectedItem.VideoUrl}
              type="video/mp4"
            />
          </video>
        </div>
      )}
      <p className={styles.category}>{data.Category}</p>
      <div>
        <img
          src={require(`../../assets/${data.TitleImage}`)}
          alt={data.Title}
          width={'680px'}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <p className={styles.text}>{data.ReleaseYear}</p>
        <p className={styles.text}>{data.MpaRating}</p>
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

export default Featured
