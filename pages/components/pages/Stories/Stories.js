import CardItem from "./CardItemsStories";
import React, { useState } from 'react'
import styles from "../../../../styles/Stories.module.css";
import Navbar from '../../Navbar'
import Footer from '../../Footer'

export default function Cards() {

  return ( 
    <>
      <Navbar/>
      <div className={styles.cards}>
        <h1 className={styles.heading}>Check out our EPIC Stories!</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsWrapper}>
            <ul className={styles.cardsItems}>
              <a href="../posts/Post" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-17.jpg"
                  text='The heart of non sleeping city, Marine drive, Mumbai - The city of love            '
                  label="Peace"
                  path="/services"
                />
              </a>
              <a href="../posts/Post" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-18.jpg"
                  text="God never be angry with me, even if the whole world gets angry"
                  label="Place of God"
                  path="/services"
                />
              </a>
            </ul>
            <ul className={styles.cardsItems}>
              <a href="../posts/Post" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-3.jpg"
                  text="Set Sail in the Indian Ocean visiting Uncharted Waters"
                  label="Mystery"
                  path="/services"
                />
              </a>
              <a href="../posts/Post" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-4.jpg"
                  text="Experience Football on Top of the Karnala Mountains"
                  label="Adventure"
                  path="/products"
                />
              </a>
              <a href="../posts/Post" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-8.jpg"
                  text="Ride through the Thar Desert on a guided camel tour"
                  label="Adrenaline"
                  path="/sign-up"
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
