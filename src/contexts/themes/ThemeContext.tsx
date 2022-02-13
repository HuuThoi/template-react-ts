
import { createContext} from 'react';

export type ThemeContextType = {
    theme: string;
    changeTheme: () => void;
}

const initialValue = {
    theme: 'light',
    changeTheme: () => {}
}

//Partial: cho phép gía trị khuyết hợp lệ, tức là ko cần khai báo, khởi tạo những fields đã được đăng kí ở type
export const ThemeContext = createContext<ThemeContextType>(initialValue);
