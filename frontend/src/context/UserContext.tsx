import { createContext } from 'react';
import { type FC, useState } from 'react';
import { User } from '../types/User';


export interface UserContextProps {
	user?: User
	setUser?: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextProps>({});


interface UserContextProviderProps {
	children: React.ReactNode
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>({ password: "", username: '' });

	return <UserContext.Provider value={{ user, setUser }}> {children} 	</UserContext.Provider>
};
