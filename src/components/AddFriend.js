import { useState } from "react";
import { Button } from "./Button";

export function AddFriend({ onFriendAdded }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleFriendAdded = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID;
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };
    onFriendAdded(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <>
      <form className="form-add-friend">
        <label>👯‍♀️ Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🎆 Image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button onClick={handleFriendAdded}>Add</Button>
      </form>
    </>
  );
}
