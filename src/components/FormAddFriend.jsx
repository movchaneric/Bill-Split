import Button from "./Button";
import { useState } from "react";

const FormAddFriend = ({ addFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const addFriendOnSumbit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    addFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <>
      <form className="form-add-friend" onSubmit={addFriendOnSumbit}>
        <label className="label">👨‍👦‍👦Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="label">🎆Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <Button>Add</Button>
      </form>
    </>
  );
};

export default FormAddFriend;
