import React from 'react';

function SelectDonate({ handleFilterDonate, donateFilter }) {
    const handleSelectDonate = (ev) => {
        handleFilterDonate(ev.target.value);
        console.log(`You have chosen: ${ev.target.value}`)
    }
    return (
        <div>
            <label>Select if you want to receive or donate blood</label>
            <select 
            type='option'
            name="donate" 
            id={donateFilter}
            onChange={handleSelectDonate}
            value={donateFilter}
            >
                <option value="all">Select one Option</option>
                <option value="receive">To Receive</option>
                <option value="donate">To Donate</option>
            </select>
        </div>
    )
}

export default SelectDonate;