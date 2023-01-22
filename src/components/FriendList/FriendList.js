// export const FriendList = ({ friends }) => {
//   return (
//     <div>
//       {friends.map(friend => (
//         <div key={friend.id}>{friend.name}</div>
//       ))}
//     </div>
//   );
// };
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {
  FriendListdiv,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListdiv>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListdiv>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
