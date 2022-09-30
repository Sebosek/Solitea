import {Address} from './Address';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  address?: Address;
}