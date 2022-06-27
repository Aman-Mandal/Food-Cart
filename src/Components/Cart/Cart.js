import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = props => {
  console.log(props)

  const cartitems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Aman', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
