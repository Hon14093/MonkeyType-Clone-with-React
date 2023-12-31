import React, { useState } from 'react';
import English from './languages/English';
import English1k from './languages/English1k';

const SelectLanguage = ({ value }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        // Update the state with the selected value
        const newValue = event.target.value;
        setSelectedValue(newValue);
    };

    const renderSelectedComponent = () => {
        switch (selectedValue) {
            case 'english':
                return <English value={value} />
            case 'english1k':
                return <English1k />
            default:
                return <English value={value} />
        }
    }

    return (
        <>
            <div className='flex justify-center items-center mb-2 Ani duration-400 text-lg'>
                <i className='fa-solid fa-earth-asia pr-3'></i>
                <select className='text-chaosTxt bg-chaosBG Ani duration-400 px-1' onChange={handleSelectChange}>
                    <option value="english">english</option>
                    <option value="english1k">english 1k</option>
                </select>
            </div>

            <div className='text-2xl h-28'>
                { renderSelectedComponent() }
                
            </div>
        </>
    );
};

export default SelectLanguage;
