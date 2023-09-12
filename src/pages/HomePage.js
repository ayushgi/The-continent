import styles from "./HomePage.module.css";
import ImageComponent from "../components/ImageComponents";
import "./temp.css"
const HomePage = () => {
  return (
    <>
    <div className={styles.homePage}>
      <div className={styles.homePageChild} />
      <div className={styles.homePageItem} />
      <div className={styles.homePageInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.homePageChild1} />
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <img
        className={styles.leafPlantLeavesFlowerPngFIcon}
        alt=""
        src="/leafplantleavesflowerpngfavpngw8nipqstkckgwxfnfhwap4byaremovebgpreview-1@2x.png"
      />
      <img
        className={styles.istockphoto1180581523612x612Icon}
        alt=""
        src="/istockphoto1180581523612x612removebgpreview-2@2x.png"
      />
      <img
        className={styles.istockphoto1180581523612x612Icon1}
        alt=""
        src="/istockphoto1180581523612x612removebgpreview-1@2x.png"
      />
      <b className={styles.plantsMakeAContainer}>
        <p className={styles.plantsMakeA}>{`Plants make a positive impact `}</p>
        <p className={styles.plantsMakeA}>on your environment.</p>
      </b>
      <div className={styles.homePageChild2} />
      <b className={styles.knowMore}>Know More</b>
      <img className={styles.lineIcon} alt="" src="/line-1.svg" />
      <div className={styles.mainTab}>
        <div className={styles.homeParent}>
          <div className={styles.home}><button class="transparent-button">Home</button></div>
          <div className={styles.history}><button class="transparent-button">History</button></div>
          <div className={styles.about}><button class="transparent-button">About</button></div>
          <div className={styles.about}><button class="transparent-button">Contact</button></div>
        </div>
        <div className={styles.nature}>n.a.t.u.r.e</div>
        <div className={styles.frameParent}>
          <div className={styles.bidownloadWrapper}>
            <div className={styles.bidownload} />
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <img
        className={styles.instagramCircleIcon}
        alt=""
        src="/instagram-circle@2x.png"
      />
      <img className={styles.facebookIcon} alt="" src="/facebook@2x.png" />
      <img className={styles.twitterIcon} alt="" src="/twitter@2x.png" />
    </div>

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" id="first" src="/istockphoto1180581523612x612removebgpreview-1@2x.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" id="first" src="/istockphoto1180581523612x612removebgpreview-1@2x.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" id="first" src="/istockphoto1180581523612x612removebgpreview-1@2x.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<ImageComponent/>

    
    </>
  );
};

export default HomePage;
