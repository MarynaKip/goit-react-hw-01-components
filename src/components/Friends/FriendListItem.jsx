import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.statusGreen : styles.statusRed}>
      {isOnline}
    </span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
export default FriendListItem;
