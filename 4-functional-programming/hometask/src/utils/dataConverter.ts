import type { Image, User, Account, Payment } from "../../types";
import { Row } from "../components/Table";

const findByUserId = (userId: string) => (entity: Account | Image) => entity.userID === userId;
const reduceTotalSum = (acc: number, payment: Payment): number => acc + payment.totalSum;

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] => {
  // @ts-ignore
  return users.map(({ userID, username, country, name }) => {
    const { url: avatar } = images.find(findByUserId(userID));
    const { posts, payments = [] } = accounts.find(findByUserId(userID));
    return {
      username,
      country,
      name,
      avatar,
      posts,
      lastPayments: payments.reduce(reduceTotalSum, 0),
    };
  });
};
