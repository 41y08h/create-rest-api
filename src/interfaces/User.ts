export default interface IUser {
  name: string;
  email: string;
  provider: { name: string; accountId: string };
}
