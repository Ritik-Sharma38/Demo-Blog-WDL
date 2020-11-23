import React from 'react';
import LandingPage from '../LandingPage';
import CardItem from "../CardItem";
import styles from "../../../styles/Cards.module.css";
import Footer from '../Footer';
import Navbar from '../Navbar';

export async function getStaticProps(){
  try{
    const mysql = require('serverless-mysql')({
      backoff: 'decorrelated',
      base: 5,
      cap: 200
    })
    mysql.config({
      host     : "sql12.freemysqlhosting.net",
      database : "sql12377971",
      user     : "sql12377971",
      password : "Qv6mRXVnqL"
    })
  
    const rresults = await mysql.query("SELECT * FROM posts")
    var data=[]
    for(let i=0; i<5; i++){
      var post = {
        name: rresults[i].name,
        label: rresults[i].label
      }
      data.push(post)
    }
    mysql.end()
  }catch(error){
    console.log("Error:",error)
    data=[]
  }

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
                  text={data[1].name}
                  label={data[1].label}
                  path="/services"
                />
              </a>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-4.jpg"
                  text={data[1].name}
                  label={data[1].label}
                  path="/products"
                />
              </a>
              <a href="posts/post1" className={styles.cardsItems}>
                <CardItem
                  src="/images/img-8.jpg"
                  text={data[1].name}
                  label={data[1].label}
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
