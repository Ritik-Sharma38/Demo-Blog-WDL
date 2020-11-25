import React from "react";
import { Button } from "./Button";
import styles from "../../styles/Home.module.css";

function LandingPage() {
  return (
    <div className={styles.heroContainer}>
      <video
        className={styles.video}
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
      />
      <div className={styles.sub_heroContainer}>
        <h1>MoonLight Sunshine</h1>
        <p>I've been a fool!</p>
      </div>
      <div className={styles.mainbutton}>
        <div className={styles.leftbutton}>
          <Button>GET STARTED</Button>
        </div>
        <div className={styles.rightbutton}>
          <Button>WATCH STORIES</Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
