import { createContext, useContext, useReducer } from "react";
import {
  CLOSE_MODAL,
  FORM_ADD,
  OPEN_MODAL,
} from "../common/constants/constants";

const ModalContext = createContext(null);

const DispatchModalContext = createContext(null);

const init = {
  isOpen: false,
  formType: FORM_ADD,
};

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
    case OPEN_MODAL: {
      state.isOpen = action.open;
      state.formType = action.formType;
      return { ...state };
    }

    case CLOSE_MODAL: {
      state.isOpen = action.close;
      return { ...state };
    }

    default: {
      return state;
    }
  }
}
