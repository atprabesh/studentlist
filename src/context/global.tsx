import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { data } from "../../data.json";
import { IStudentData } from "../contant/types";

//  NOTE: Since there is no api for adding marks/ remark to the student, I created global state for it to be handled

type GlobalStateContextType = {
  state: IStudentData[];
  updateGradeMarks: (id: string, newMarks: string, remark?: string) => void;
};

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<IStudentData[]>(data as IStudentData[]);

  const updateGradeMarks = (id: string, newMarks: string, remark?: string) => {
    setState((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            grade: {
              marks: newMarks,
              remark: remark ?? "",
            },
          };
        }
        return item;
      });
    });
  };

  const contextValue: GlobalStateContextType = {
    state,
    updateGradeMarks,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state and update function
const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
