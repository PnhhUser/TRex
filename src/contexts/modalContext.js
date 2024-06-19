import { createContext, useContext, useReducer } from "react";

const ModalContext = createContext(null);

const DispatchModalContext = createContext(null);

const init = {};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <ModalContext.Provider value={state}>
      <DispatchModalContext.Provider value={dispatch}>
        {children}
      </DispatchModalContext.Provider>
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}

export function useModalDispatch() {
  return useContext(DispatchModalContext);
}

function reducer(state, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
