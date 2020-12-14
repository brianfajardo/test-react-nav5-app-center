export enum Routes {
  Friends = 'Friends',
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
}

export type HomeTabsParamList = {
  [Routes.Home]: undefined
  [Routes.Search]: undefined
}
