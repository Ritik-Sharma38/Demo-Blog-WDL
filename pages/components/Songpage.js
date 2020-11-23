import styles from "../../styles/Songpage.module.css";
// import { PrismaClient } from "@prisma/client";
// import Link from "next/link";
import React from "react";
import SongModule from "../components/pages/songs/SongModule"

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <SongModule/>
        <h1>Hey</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
