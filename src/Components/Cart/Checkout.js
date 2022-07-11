import { useRef } from 'react'
import styles from './Checkout.module.css'

const Checkout = props => {
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  const submitFormHandler = event => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value
  }
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Checkout
