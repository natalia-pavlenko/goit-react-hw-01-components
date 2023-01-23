import PropTypes from 'prop-types';
import {
  FriendListItLi,
  FriendListItSpan,
  FriendListItp,
  FriendOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListItLi key={id}>
      <FriendListItSpan>
        <FriendOnline isOnline={isOnline}></FriendOnline>
      </FriendListItSpan>
      <img src={avatar} alt="User avatar" width="48" height="48" />
      <FriendListItp>{name}</FriendListItp>
    </FriendListItLi>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
