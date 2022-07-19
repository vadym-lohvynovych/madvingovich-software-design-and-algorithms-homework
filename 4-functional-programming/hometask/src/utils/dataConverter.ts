import type { Image, User, Account, Payment } from "../../types";
import { Row } from "../components/Table";

const findByUserId = (userId: string) => (entity: Account | Image) => entity.userID === userId;
const reduceTotalSum = (acc: number, payment: Payment): number => acc + payment.totalSum;

const addAvatar = (images: Image[]) => (user: User) => ({
  ...user,
  avatar: images.find(findByUserId(user.userID)).url,
});

const addPosts = (accounts: Account[]) => (user: User) => ({
  ...user,
  posts: accounts.find(findByUserId(user.userID)).posts,
});

const addLastPayments = (accounts: Account[]) => (user: User) => ({
  ...user,
  lastPayments: accounts.find(findByUserId(user.userID)).payments.reduce(reduceTotalSum, 0),
});

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] => {
  // @ts-ignore
  return users.map(addAvatar(images)).map(addPosts(accounts)).map(addLastPayments(accounts));
};
