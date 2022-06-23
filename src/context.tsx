import { createContext } from 'react';

export interface AppContextI {
  isMobile: boolean;
}

const AppContext = createContext<AppContextI | null>(null);

export default AppContext;