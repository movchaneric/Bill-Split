import Button from "./Button";
import { useState } from "react";

const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPayByUser] = useState("");
  const [whosPaying, setWhosPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Bill input is empty
    if (!bill || !paidByUser) return;

    handleSplitBill(whosPaying === "user" ? paidByFriend : -paidByUser);
    
  };

  return (
    <form className="form-split-bill" onSubmit={handleOnSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label className="label">💵Bill value</label>
      <input
        type="text"
        className="input"
        placeholder="value"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />

      <label type="text" className="label">
        💰Your expense
      </label>
      <input
        type="text"
        className="input"
        placeholder="expense"
        value={paidByUser}
        onChange={(e) =>
          setPayByUser(
            e.target.value > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label type="text" className="label">
        💰{selectedFriend.name} expense
      </label>
      <input type="text" className="input" disabled value={paidByFriend} />

      <label>Who is paying the bill</label>
      <select
        className=""
        value={whosPaying}
        onChange={(e) => setWhosPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
};

export default FormSplitBill;
