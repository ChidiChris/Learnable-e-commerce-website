import styles from "../../styles/sponsor.module.css"
import image1 from "../../assets/Vector (1).svg";
import image2 from "../../assets/Vector (2).svg";
import image3 from "../../assets/fa-brands-3.svg";
import image4 from "../../assets/fa-brands-4.svg";
import image5 from "../../assets/fa-brands-5.svg";
import image6 from "../../assets/Vector 2.svg";

const images = [image1, image2, image3, image4, image5, image6];

const SponsorSection = () => {
  return (
    <div className={styles["sponsor-mainContainer"]}>
      <div className={styles["sponsor-container"]}>
        <div className={styles.icons}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Sponsor ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
