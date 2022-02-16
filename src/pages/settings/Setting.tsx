import { useTheme } from 'contexts/themes/hookTheme';
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import Switch from 'react-switch';
import 'react-dropdown/style.css';
import './Setting.scss';

const options = [
    'vi', 'en', 'fr'
];

const Setting = () => {
    const [check, setCheck] = useState(false);
    const { changeTheme, theme } = useTheme();

    const handleChangeTheme = () => {
        setCheck(!check);
        changeTheme();
    }

    const onSelect = (value: any) => {
        console.log(value);

    }

    return (
        <div className="setting">
            <Switch
                height={16}
                width={30}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleChangeTheme}
                checked={check}
                onColor="#219de9"
                offColor="#bbbbbb"
            />
            <span>Change Theme</span>

            <Dropdown className="custom-dropdown" options={options} onChange={onSelect} placeholder="Select language" />
        </div>
    )
}

export default Setting;