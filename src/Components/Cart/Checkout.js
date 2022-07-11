import { useRef, useState } from 'react'
import styles from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isSixDigits = value => value.trim().length === 6

const Checkout = props => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  })

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

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostalCodeIsValid = isSixDigits(enteredPostalCode)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalCodeIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid

    if (!formIsValid) {
      return
    }
  }

  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? '' : styles.invalid
  }`

  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? '' : styles.invalid
  }`

  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? '' : styles.invalid
  }`

  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postal ? '' : styles.invalid
  }`

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && (
          <p>Please enter a postal code (6 digits).</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
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
