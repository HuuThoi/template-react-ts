import { useTheme } from 'contexts/themes/hookTheme';
import './ThemeButton.scss'
import * as React from 'react';

function ThemeButton() {
    const { changeTheme } = useTheme();

    const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        changeTheme();
    }

    return (
        <button onClick={handleOnClick}>Toggle mode</button>
    )
}

export default ThemeButton;