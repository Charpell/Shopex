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