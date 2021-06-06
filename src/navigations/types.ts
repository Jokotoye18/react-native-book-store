import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
  HomeTab: undefined;
  BookDetails: { book: any };
};

type BookDetailsScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "BookDetails"
>;
type BookDetailsScreenRouteProp = RouteProp<MainStackParamList, "BookDetails">;

export type BookDetailsProps = {
  navigation: BookDetailsScreenNavigationProp;
  route: BookDetailsScreenRouteProp;
};

export type MainTabParamList = {
  Home: undefined;
  Favourite: undefined;
  Cart: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, "Home">,
  StackNavigationProp<MainStackParamList>
>;
type HomeScreenRouteProp = RouteProp<MainTabParamList, "Home">;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type AuthStackParamList = {
  Login: undefined;
};

// navigation prop
type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, "Login">,
  StackNavigationProp<MainStackParamList>
>;

// route prop
type LoginScreenRouteProp = RouteProp<AuthStackParamList, "Login">;

export type LoginProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};
