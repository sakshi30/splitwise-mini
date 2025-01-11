import FriendsItem from "./FriendsItem";

export function FriendsList({ friends, selectedFriend, handleSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendsItem
          friend={friend}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
