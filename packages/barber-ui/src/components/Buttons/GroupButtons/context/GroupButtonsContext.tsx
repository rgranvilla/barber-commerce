import { createContext, ReactNode, useState } from "react";

interface GroupButtonsContextType {
  showContent: boolean;
  toggleShowContent: () => void;
}

interface GroupButtonsProviderProps {
  children: ReactNode;
}

export const GroupButtonsContext = createContext({} as GroupButtonsContextType);

export function GroupButtonsProvider({ children }: GroupButtonsProviderProps) {
  const [showContent, setShowContent] = useState<boolean>(false);

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <GroupButtonsContext.Provider value={{ showContent, toggleShowContent }}>
      {children}
    </GroupButtonsContext.Provider>
  );
}
