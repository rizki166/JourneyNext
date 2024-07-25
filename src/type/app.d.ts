export interface IJourney {
  id: number;
  image: string[];
  user: IUser;
  userId: number;
  title: string;
  createdAt: date;
  description: string;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  password: string;
  phone: string;
  verified: boolean;
}
