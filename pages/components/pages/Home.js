import React from 'react';
import LandingPage from '../LandingPage';
import CardItem from "../CardItem";
import styles from "../../../styles/Cards.module.css";
import Footer from '../Footer';
import Navbar from '../Navbar';

var globalData = ""

export async function getStaticProps(){
  try{
    const mysql = require('serverless-mysql')({
      backoff: 'decorrelated',
      base: 5,
      cap: 200
    })
    mysql.config({
      host     : "sql12.freemysqlhosting.net",
      database : "sql12382581",
      user     : "sql12382581",
      password : "jBYcRrmaCX"
    })
  
    const rresults = await mysql.query("SELECT * FROM posts")
    var data=[]
    for(let i=0; i<5; i++){
      var post = {
        name: rresults[i].label,
        label: rresults[i].name
      }
      data.push(post)
    }
    mysql.end()
  }catch(error){
    console.log("Error:",error)
    data=[]
  }
  globalData=data
  return {
    props: {
      data,
    },
  }
}

function Home({data}) {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div className={styles.cards}>
        <h1 className={styles.heading}>Check out our EPIC Stories!</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsWrapper}>
            <ul className={styles.cardsItems}>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-9.jpg"
                  text={data[0].name}
                  label={data[0].label}
                  path="/services"
                />
              </a>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-2.jpg"
                  text={data[1].name}
                  label={data[1].label}
                  path="/services"
                />
              </a>
            </ul>
            <ul className={styles.cardsItems}>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-3.jpg"
                  text={data[2].name}
                  label={data[2].label}
                  path="/services"
                />
              </a>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-4.jpg"
                  text={data[3].name}
                  label={data[3].label}
                  path="/products"
                />
              </a>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-8.jpg"
                  text={data[4].name}
                  label={data[4].label}
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

export default Home;

export const GlobalData = async() => {
  console.log("gloabal data", globalData)
  return(globalData)
}