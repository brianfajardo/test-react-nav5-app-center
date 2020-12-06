export enum Routes {
  Home = 'Home',
  Search = 'Search',
  Login = 'Login',
  Register = 'Register',
}

export type AuthStackParamList = {
  [Routes.Login]: undefined
  [Routes.Register]: undefined
}

export type HomeTabsParamList = {
  [Routes.Home]: undefined
  [Routes.Search]: undefined
}
