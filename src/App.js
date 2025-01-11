import { useState } from "react";
import { FriendsList } from "./components/FriendsList";
import { Button } from "./components/Button";
import { FriendSplitBill } from "./components/FriendSplitBill";
import { AddFriend } from "./components/AddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const addFriend = (friend) => {
    setFriendsList((friends) => [...friends, friend]);
    setIsOpen(false);
  };

  const onFriendChange = (e) => {
    setSelectedFriend(e);
    setIsOpen(false);
  };

  const onBillChange = (value) => {
    setFriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: Number(selectedFriend.balance) + value,
            }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          selectedFriend={selectedFriend}
          handleSelectedFriend={onFriendChange}
        />
        {isOpen && <AddFriend onFriendAdded={addFriend} />}
        <Button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? `Add Friend` : `Close`}
        </Button>
      </div>
      {selectedFriend && (
        <FriendSplitBill
          selectedFriend={selectedFriend}
          handleBillChange={onBillChange}
        />
      )}
    </div>
  );
}
