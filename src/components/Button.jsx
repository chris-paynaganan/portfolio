import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

function Button({ label, to, onClick, variant = 'primary', type = 'button' }) {
  if (to) {
    return (
      <NavLink to={to} className={`${styles.btn} ${styles[variant]}`}>
        {label}
      </NavLink>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {label}
    </button>
  )
}

export default Button