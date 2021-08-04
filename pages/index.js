import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="font-josefine">
      <Head>
        <title>TODO List</title>
        <meta name="description" content="Created by Paula" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-light dark:bg-dark">
        <h1 className="text-4xl text-white">TODO</h1>
      </header>

      <main className={styles.main}>
        <p>TodoList</p>
      </main>

      <footer className={styles.footer}>
       Footer
      </footer>
    </div>
  )
}
