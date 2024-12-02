import styles from './input.module.css'

const Input = ({label,id,error,...props}) => {
    return (
            <div className={styles.field}>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props}/>
                {/*console.log("Error email: " + error)*/}
                {/* {error && <p className={styles.error}>{error}</p>} */}
                {error && id === "email" && <p className={styles.error}>Email non valida</p>}
                {error && id === "password" && <p className={styles.error}>Password non valida</p>}
                {error && id === "displayName" && <p className={styles.error}>Nome non valido</p>}
            </div>
        
    )
}

export default Input;