
import { createContext} from 'react';
import { themeData } from './themeData';

export type ThemeContextType = {
    theme: string;
    changeTheme: () => void;
}

const initialValue = {
    theme: '',
    changeTheme: () => {}
}

//Partial: cho phép gía trị khuyết hợp lệ, tức là ko cần khai báo, khởi tạo những fields đã được đăng kí ở type
export const ThemeContext = createContext<ThemeContextType>(initialValue);
