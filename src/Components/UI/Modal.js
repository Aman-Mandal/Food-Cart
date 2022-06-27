import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
  return <div onClick={props.onClick} className={styles.backdrop} />
}

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
