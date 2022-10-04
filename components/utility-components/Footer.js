import Link from 'next/link'
import styles from '../../styles/footer.module.css'

export default function Footer() {
  return (
    <div className={`${styles.footer_Container}`}>
        <div className="container">
          <div className="flex-wrap d-flex justify-content-center align-items-center">
            <Link href="/"><a className="nav-link text-light me-3">Destinations</a></Link>
            <Link href="/#about"><a className="nav-link text-light me-3">About</a></Link>
            <Link href="/#faq"><a className="nav-link text-light me-3">FAQ</a></Link>
            <Link href="/#impressions"><a className="nav-link text-light me-3">Impressions</a></Link>
            <Link href="/#contacts"><a className="nav-link text-light me-3">Contacts</a></Link>
            <Link href="/Packages"><a className="nav-link text-light me-3">Packages</a></Link>
            <Link href="/"><a className="nav-link text-light me-3">Home</a></Link>

          </div>
          <div className="mt-4">
            <p className="text-center text-light fw-light">Budget Excursions 2022 &copy;</p>
          </div>
        </div>
    </div>
  )
}
