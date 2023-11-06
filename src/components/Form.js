import React from 'react';
import SelectType from "./SelectType";

function Form({ handleFilterTypeBlood, typeFilter, handleSubmit, handleReset }) {
   
   return (
      <section className='section1'>
         <form className='section1__form'>
            <SelectType
               handleFilterTypeBlood={handleFilterTypeBlood}
               typeFilter={typeFilter}
               handleReset={handleReset}
            />
         </form>
         <div className='section1__button'>
            <button 
                className='section1__button__btn' 
                type="button" 
                onClick={handleReset}>Reset</button>
            <button
               className='section1__button__btn'
               type="submit" 
               onClick={handleSubmit}>Enter</button>
         </div>
      </section>
   )
}

export default Form;