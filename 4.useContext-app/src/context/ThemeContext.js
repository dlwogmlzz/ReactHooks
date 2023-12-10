import { createContext } from 'react';

// Provider로 감싸주지 않으면 createContext() 괄호안에 인자로 넘겨준 초기값을 받아오게 된다.
export const ThemeContext = createContext(null);