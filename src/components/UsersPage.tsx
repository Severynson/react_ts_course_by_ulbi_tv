import { FC, useEffect, useState } from "react";
import UserItem from "./UserItem";
import List from "./List";
import axios from "axios";
import { IUser } from "../types/types";

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async() => {
      try {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (err) {
        alert(err)
      }
    };

    return(
        <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
    );
};

export default UsersPage