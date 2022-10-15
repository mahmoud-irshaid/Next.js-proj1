import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Head from 'next/head'


export default function Home({data}) {
  return (
    <>
    <Head>
      <title>ninjas | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div className={styles.container}>
      <h1>hi home </h1>
    </div>
    </>
  )
}
