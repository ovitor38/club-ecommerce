export default interface IUser {
  firstName: string
  lastName: string
  email: string
  provider: 'firebase' | 'google'
}
