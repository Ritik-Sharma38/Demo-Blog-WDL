import React from "react";
import styles from "../../styles/Postpage.module.css";
import CardItem from "./CardItem";
import style from "../../styles/Cards.module.css";

export default function Post1() {

  return (
    <div className={styles.container}>
      <section className={styles.leftcard}>
        <video
          className={styles.image}
          src="/videos/video-1.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.overlay}>
          <p>
            <h1>Travel Itinerary {'>>'}</h1>
          </p>
        </div>
      </section>
      <section className={styles.rightcard}>
        <div className={styles.content}>
          <br />
          <br />
          <h3>Days 1-3: Fly from Los Angeles to “Apia” via Nadi, Fiji</h3>
          <h3>
            Overnight: Coconuts Beach Club Resort (Siumu, Upolu Island, Samoa)
          </h3>
          <p>
            This was a long travel day where we took a red-eye flight from LAX
            to Nadi, Fiji. Then, we had a 7-hour layover in Nadi so we took a
            taxi to Denerau to check out some of the resorts there before
            returning to the airport. After catching our flight to the Faleolo
            Airport in Samoa, we then hired our rental car and took the scenic
            route towards Apia before driving south on the Cross-Island Road
            towards our resort. We ultimately got there by around sunset, but we
            also stopped for Papapapaitai Falls along the way.
            <br />
            <br />
            <h3>Day 4: Day Touring of Eastern Upolu</h3>
            <h3>
              Overnight: Coconuts Beach Club Resort (Siumu, Upolu Island, Samoa)
            </h3>
            <br />
            On this day, we first went to the famous To Sua Ocean Trench for the
            better part of the morning before having lunch at Lalomanu Beach.
            The rest of the day was spent visiting three waterfalls – Sopoaga
            Falls, Fuipisia Falls, and Togitogiga Waterfall. We then ate at the
            Sinalei Reef Resort.
            <br />
            <br />
            <h3>Day 5: Day Touring of Northern Upolu</h3>
            <h3>
              Overnight: Coconuts Beach Club Resort (Siumu, Upolu Island, Samoa)
            </h3>
            <br />
            On this day, we did a different driving route in Upolu Island, where
            we made a loop taking in Falefa Falls, Piula Cave Pool, and Sauniatu
            Waterfall before having lunch in Apia at Nourish Cafe. After lunch,
            we checked out the Immaculate Conception Cathedral next door before
            returning to the south coast for culture night at the Sinalei Reef
            Resort.
            <br />
            <br />
            <h3>Day 6: Day Trip to the Savaia MPA and Apia</h3>
            <h3>
              Overnight: Coconuts Beach Club Resort (Siumu, Upolu Island, Samoa)
            </h3>
            <br />
            This was a slow day that started with checking out the Giant Clam
            Sanctuary at the Savaia Marine Protection Area. We then spent the
            better part of the afternoon after lunch at Lupe’s going to the
            Papaseea Sliding Rocks before having dinner at the Curry House. In
            hindsight, we should have done the Cultural Village Demonstration in
            the morning (it was only on during Thursday morning in the low
            season), and then do the Giant Clams after lunch. But alas, lesson
            learned. Piula Cave Pool – this was another swimming hole adjacent
            to the South Pacific Ocean, except this one was easier to get into
            compared to the To Sua Ocean Trench. This cool pool featured a cave
            as well as fish in the water, and it was all underneath the watch
            from an Episcopal Church.
            <br />
            <br />
            <h3>
              Day 7: Drive to Mulifanua and take the ferry to Salelologa on
              Savaii Island. Then, drive to Fagamalo.
            </h3>
            <h3>
              Overnight: Le Lagoto Resort (Fagamalo, Savaii Island, Samoa)
            </h3>
            <br />
            After an early morning checkout from Coconuts, we did a roughly
            hour-long drive to the Mulifanua Ferry Wharf, where we had a
            pre-booked ferry to get to Savaii. Once there, we then visited the
            Afu Aau Waterfall, the Mu Pagoa Waterfall, and the Alofaaga
            Blowholes before having lunch at the Savaiian Hotel. After lunch, we
            made a spontaneous stop at the Amoa Resort due to their impossibly
            beautiful lagoon adjacent to their property. Then, we ended the day
            at our resort in Fagamalo.
          </p>
          <br />
          <br />
        </div>
        <div className={style.relatedContent}>
          <br />
          <br />
          <h1>Related Posts</h1>
          <br />
          <br />
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
