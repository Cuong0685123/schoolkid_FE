import Image from 'next/image';
import styles from './styles.module.scss';

export default function Index(params) {
    return (
        <>
            <footer className={styles.footer}>
                <div className='container'>
                    <div className={styles.footer_container}>
                        <div className={styles.col_left}>
                            <div>
                                <Image src="/images/logo.svg" alt="Logo" width={233} height={82} />
                            </div>
                            <div>
                                <p>It is our goal to provide age appropriate opportunity for every child enrolled in EduKid Kids Club enrichment classes.</p>
                            </div>
                        </div>

                        <div className={styles.col_right}>
                            <h2>Quick Links</h2>
                            <div className={styles.quick_links}>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>

                                <ul>
                                    <li><a href="#">Recently Viewed</a></li>
                                    <li><a href="#">New Programs</a></li>
                                    <li><a href="#">Curriculums</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">School stuff</a></li>
                                </ul>

                                <ul>
                                    <li><Image src="/images/components/footer/address.svg" alt="Location" width={20} height={20} /> <a href="#">Westlands Building, Nairobi, KE</a></li>
                                    <li><Image src="/images/components/footer/phone.svg" alt="Phone" width={20} height={20} /> <a href="#">012-345-6789</a></li>
                                    <li><Image src="/images/components/footer/email.svg" alt="Email" width={20} height={20} /> <a href="#">edukidsupport@email.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
