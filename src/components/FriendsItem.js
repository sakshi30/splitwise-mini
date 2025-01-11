import { Button } from "./Button";

export default function FriendsItem({
  friend,
  selectedFriend,
  handleSelectedFriend,
}) {
  const isOpen = selectedFriend !== null && friend.id === selectedFriend.id;

  const selectFriend = () => {
    handleSelectedFriend((currFriend) =>
      currFriend?.id === friend.id ? null : friend
    );
  };
  return (
    <li className={isOpen ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance === 0 ? "black" : "green"
        }
      >
        {friend.balance < 0
          ? `You owe ${friend.name} ${friend.balance} €`
          : friend.balance === 0
          ? `You are ${friend.name} are even`
          : `${friend.name} owes you ${friend.balance} €`}
      </p>
      <Button onClick={selectFriend}>{!isOpen ? "Select" : "Close"}</Button>
    </li>
  );
}
