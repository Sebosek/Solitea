import {useEffect, useState} from "react";
import {User} from "../types/User";

interface UsersResponse {
  users: Array<User>;
  skip: string;
  limit: number;
  total: number;
}

const URL = 'https://dummyjson.com/users';
const ITEMS_PER_PAGE = 10;

const useUsers = () => {
  const [limit, setLimit] = useState<number>(ITEMS_PER_PAGE);
  const [skip, setSkip] = useState<number>(0);
  const [error, setError] = useState<string | undefined>();
  const [users, setUsers] = useState<Array<User> | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fn = async () => {
      const request = await fetch(`${URL}?skip=${skip}&limit=${limit}&select=id&select=firstName&select=lastName&select=address`);
      if (!request.ok) {
        setError('Unable to read data');

        return;
      }

      const json = await request.json() as UsersResponse;

      setUsers(json.users);
      setTotal(json.total);
    };

    fn().catch(() => console.log('Unable to read users'));
  }, [skip, limit]);
  
  const page = skip / ITEMS_PER_PAGE;
  const isPrevEnabled = page >= 1;
  const isNextEnabled = (page * ITEMS_PER_PAGE) + (users?.length ?? 0) < total;
  const prev = () => {
    if (!isPrevEnabled) return;
    
    setSkip(state => {
      const x = state - ITEMS_PER_PAGE;
      if (x < 0) return state;
      
      return x;
    });
  };
  const next = () => {
    if (!isNextEnabled) return;

    setSkip(state => state + ITEMS_PER_PAGE);
  };
  
  return ({
    users, 
    error,
    isPrevEnabled,
    isNextEnabled,
    prev,
    next,
  });
};

export default useUsers;