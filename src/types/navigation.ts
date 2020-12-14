export enum Routes {
  Friends = 'Friends',
  Friend = 'Friend',
  Home = 'Home',
  Login = 'Login',
  Register = 'Register',
  Search = 'Search',
}

export type AuthStackParamList = {
  [Routes.Login]: undefined
  [Routes.Register]: undefined
}

export type HomeStackParamList = {
  [Routes.Friends]: undefined
  [Routes.Friend]: {
    name: string
  }
}

export type HomeTabsParamList = {
  [Routes.Home]: undefined
  [Routes.Search]: undefined
}
