import React from 'react';

function SelectType({ handleFilterTypeBlood, typeFilter }) {
    const handleSelectType = (ev) => {
        handleFilterTypeBlood(ev.target.value);
        console.log(`You have chosen the blood type: ${ev.target.value}`)
    }
    return (
        <div>
            <label>Select the type of Blood</label>
            <select 
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
        </div>
    )
}

export default SelectType;