'use client';
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import BookCard from "@/components/BookCard";
import {books} from "@/constants/mockData"
import { motion } from "framer-motion";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />

        <div className={styles.containerStyle}>
          <section className={styles.content}>
            <SideBar/>
          </section>

          <div className={styles.grouper}>
            <h1 className={styles.title}>All Books</h1>
            <ul className={styles.ulGroupStyle}>
              {
                books.map((book, index) => 
                  <motion.li
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    transition={{type: 'spring', damping:50, mass:0.75}}
                    initial={{x: 200 *(index+1), opacity:0}}
                    animate={{x:0, opacity:1}}
                    key={index}
                  >
                    <a href={`/book/${book.id}`} style={{textDecoration:'none'}}>
                      <BookCard title={book.title} coverImage={book.image} description={book.description}/>
                    </a>
                  </motion.li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}