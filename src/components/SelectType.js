import React from 'react';

function SelectType({ handleFilterTypeBlood, typeFilter }) {
    const handleSelectType = (ev) => {
        handleFilterTypeBlood(ev.target.value);
        console.log(`You have chosen the blood type: ${ev.target.value}`)
    }
    return (
        <div className='select'>
            <p className='select__parraf'>Welcome to the Blood Match app. Below, you can select your blood type to find compatibilities for both receiving and donating based on your blood type.</p>
            <label className='select__label'>Select the Blood type here</label>
            <select 
            className='select__type'
            type="select" 
            name="type" 
            id={typeFilter} 
            onChange={handleSelectType}
            value={typeFilter}
            >
                <option value="all">Select one type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            <div className='select'>
                <i className="fa-solid fa-magnifying-glass select__icon"></i>
            </div>
        </div>
    )
}

export default SelectType;