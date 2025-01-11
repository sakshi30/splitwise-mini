import { useState } from "react";
import { Button } from "./Button";

export function FriendSplitBill({ selectedFriend, handleBillChange }) {
  const [bill, setBill] = useState("");
  const [myexpense, setMyExpense] = useState("");
  const friendExpense = bill ? bill - myexpense : "";
  const [paidBy, setPaidBy] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !myexpense) return;
    handleBillChange(paidBy === "user" ? friendExpense : -myexpense);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Enter your bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍🏻 Your expense</label>
      <input
        type="text"
        value={myexpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) <= bill ? Number(e.target.value) : myexpense
          )
        }
      />
      <label>👬 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>😝 You is paying the bill?</label>

      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
