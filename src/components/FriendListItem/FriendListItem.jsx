import css from "./FriendListItem.module.css"

const friendStatus = st => {
  if (st === false) {
    return '#ff0000';
  } else {
    return '#008000';
  }
};


export const FriendListItem = ({avatar,name, isOnline}) => (

  <li className={css.item}>
    <span className={css.status} 
     style={{ backgroundColor: friendStatus(isOnline)}}
    >{isOnline}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>

  
);
