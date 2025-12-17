import Image from 'next/image';
import styles from './styles.module.scss';

export default function Index(params) {
    return (
        <>
            <section id='header' className={styles.header} component="header">
                <div className={styles.logo}>
                    <Image src={'/images/logo.svg'} alt="Logo" width={233} height={82} />
                </div>
                <div className={styles.navbar}>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Programs</a></li>
                        <li><a href='#'>Shops</a></li>
                        <li><a href='#'>Pages</a></li>
                        <li><a href='#'>News</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className={styles.apply_now}>
                    <button>Apply now</button>
                    <Image src={'/images/grid.svg'} alt="Grid" width={37} height={37} />
                </div>
            </section>
        </>
    );
}
