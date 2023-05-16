import css from '../FriendList/FriendList.module.css';
import  {FriendListItem}  from '../FriendListItem/FriendListItem';

export const FriendList = ({friends}) => (
    <ul className={css.friendList}>
     {friends.map(friend => <FriendListItem 
        key= {friend.id}
        avatar = {friend.avatar}
        name = {friend.name}
        isOnline = {friend.isOnline} />)}
    </ul>
)