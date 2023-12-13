import Logo from "./Logo/Logo";
import styles from "./style.module.css"

export default function Header(){
    return(
        <div className={styles.header}>
            <Logo />
        </div>
        
    )
}