import { AsyncStorage } from "react-native";

export const saveState = async state => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem("state", serializedState);
  } catch (error) {}
};

export const retrieveState = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem("state");
    const userData = JSON.parse(retrievedItem)
    if (userData !== null) {
      return userData
    }
  } catch (error) {}
};

export const saveToken = async token => {
  try {
    const serializedToken = JSON.stringify(token);
    await AsyncStorage.setItem("token", serializedToken);
  } catch (error) {}
};

export const retrieveToken = async () => {
  try {
    const retrievedToken = await AsyncStorage.getItem("token");
    const token = JSON.parse(retrievedToken)
    if (token !== null) {
      return token
    }
  } catch (error) {}
};
