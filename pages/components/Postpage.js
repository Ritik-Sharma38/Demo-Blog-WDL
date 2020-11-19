import React from "react";
import styles from "../../styles/Postpage.module.css";
import CardItem from "./CardItem";
import style from "../../styles/Cards.module.css";

export default function Post1() {
  return (
    <div className={styles.container}>
      <section className={styles.leftcard}>
        <video className={styles.image} src='/videos/video-1.mp4' autoPlay loop muted>
            <h1>Dance</h1>
        </video>
        <div className={styles.overlay}>
          <h1>name of the tag</h1>
        </div>
      </section>
      <section className={styles.rightcard}>
        <div className={styles.content}>
         
            
        </div>
        <div className={style.relatedContent}>
          <h1>Related Posts</h1>
          <ul className={style.cardsItems}>
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall in Panvel, Navi Mumbai"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travel through the mountain range of kalyan in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </section>
    </div>
  );
}
