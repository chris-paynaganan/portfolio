import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout