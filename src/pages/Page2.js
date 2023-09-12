import styles from "./Page2.module.css";
const Page2 = () => {
  return (
    <div className={styles.page2}>
      <div className={styles.page2Child} />
      <div className={styles.page2Item} />
      <div className={styles.page2Inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.page2Child1} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
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
      <div className={styles.componentForInteraction}>
        <img className={styles.frameIcon} alt="" src="/frame1.svg" />
      </div>
      <div className={styles.page2Child2} />
      <b className={styles.name}>{`Name `}</b>
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
      <div className={styles.medPlant}>M.E.D P.L.A.N.T</div>
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.history}>HISTORY</div>
        <div className={styles.about}>about</div>
        <div className={styles.about}>contact</div>
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.upload}>Upload</div>
        <div className={styles.btnUpload}>
          <b className={styles.upload1}>Upload</b>
        </div>
      </div>
    </div>
  );
};

export default Page2;
