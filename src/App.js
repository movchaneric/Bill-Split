import { useState } from "react";

import "./index.css";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState([]);
  const [splitBill, setSplitBill] = useState([]);
  const [onSplitBill, setOnSplitBill] = useState("");

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  const addFormToggle = () => {
    setShowAddFriend((prevState) => !prevState);
    setSelectedFriend(null);
  };

  const addFriendHandler = (friend) => {
    setFriends((prevState) => [...prevState, friend]);
    setShowAddFriend(false);
  };

  const handleFriendSelection = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleFriendSelection}
          selectedFriend={selectedFriend}
          splitBill={splitBill}
        />

        {showAddFriend && (
          <FormAddFriend
            addFriend={addFriendHandler}
            addFormToggle={addFormToggle}
          />
        )}

        <Button onClick={addFormToggle}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          splitBillData={setSplitBill}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
