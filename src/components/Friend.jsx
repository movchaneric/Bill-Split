import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "close" : "select"}
        </Button>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {friend.balance}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owe's you {friend.balance}$
          </p>
        )}
        {friend.balance === 0 && (
          <p className="">You and your friend are even</p>
        )}
      </li>
    </>
  );
};

export default Friend;
