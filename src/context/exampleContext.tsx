import { createContext, ReactNode, useReducer } from "react";

type ExampleContextType = {
  counter: number;
  incrementCounter: () => void;
};

type Props = {
  children: ReactNode;
};

const initialState = { counter: 1 };

const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export const ExampleContext = createContext<ExampleContextType>({
  counter: initialState.counter,
  incrementCounter: () => {
    console.log('incrementCounter')
  },
});

export const ExampleProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCounter = () => dispatch({ type: "INCREMENT" });

  const value = { counter: state.counter, incrementCounter };

  return (
    <ExampleContext.Provider value={value}>
      {props.children}
    </ExampleContext.Provider>
  );
};