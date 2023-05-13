import { createContext, ReactNode, useReducer } from "react";
import axios from "axios";

type UserContextType = {
  name: string;
  email: string;
  password: string;
  getAllUsers: () => void;
};

type Props = {
  children: ReactNode;
};

const initialState = { name: '', email: '', password: '' };

const API_BASE_URL = process.env.VITE_API_BASE_URL;

const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    case "getAllUsers":
      axios.get(`${API_BASE_URL}/api/v1/example`).then((res) => {
        const result = res.data
        return {
          name: state.name = result.name,
          email: state.email = result.email,
          password: state.password = result.password
        }
      }).catch((error) => {
        console.log(error)
      });
      return state;
    default:
      return state;
  }
};

export const UserContext = createContext<UserContextType>({
  name: initialState.name,
  email: initialState.email,
  password: initialState.password,
  getAllUsers: () => {
    console.log('fetchUser')
  },
});

export const UserProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllUsers = () => dispatch({ type: "getAllUsers" });

  const value = { name: state.name, email: state.email, password: state.password, getAllUsers };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};