import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      <p>
        {user.id}. {user.name} lives in {user.address.city} on the{" "}
        {user.address.street} street.
      </p>
    </div>
  );
};

export default UserItem;
