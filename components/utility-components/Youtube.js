import styles from '../../styles/embed.module.css'
import PropTypes from "prop-types";

const Youtube = ({ embedId }) => (
  <div className={`${styles.video_responsive}`}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Youtube;