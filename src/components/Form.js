import React from 'react';
import SelectType from "./SelectType";
import SelectDonate from "./SelectDonate";

function Form({ handleFilterTypeBlood, typeFilter, handleFilterDonate, donateFilter, handleSumbit, handleReset }) {
  

    
    return (
       <section>
            <form action="" onSubmit={handleSumbit}>
               <SelectType
                    handleFilterTypeBlood={handleFilterTypeBlood}
                    typeFilter={typeFilter}
                    handleReset={handleReset}
                   
               />
               <SelectDonate
                    handleFilterDonate={handleFilterDonate}
                    donateFilter={donateFilter}
                    handleReset={handleReset}
               />
            </form>
          
       </section>
    )
}

export default Form;