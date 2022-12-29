import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few steps.</h2>
          <p className={`${styles.paragraph} mx-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem laboriosam, voluptates nam eligendi cumque expedita autem consequuntur debitis quasi optio.</p>
          <Button styles="mt-10" />
        </div>
        
        <div className={layout.sectionImg}>
            <img src={card} alt="card" classname="w-[100%] h-[100%]" />
        </div>

    </section>
  )


export default CardDeal