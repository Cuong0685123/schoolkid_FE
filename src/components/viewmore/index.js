import styles from './styles.module.scss';
import clsx from 'clsx';
export default function Index(params) {
    return (
        <>
            <section id="viewmore" className={styles.viewmore} component="viewmore">
                <div className={styles.viewmore_container}>
                    <h2>Join Our New Session</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.</p>
                    <button className={clsx("cta", styles.cta)}>View more</button>
                </div>
            </section>
        </>
    );
}
