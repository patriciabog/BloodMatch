
import React from 'react';

function Results({ typeBloodFiltered}) {
 
    return (
       <article className='section2'>
            <h2 className='section2__title'>Results</h2>
            {typeBloodFiltered.length > 0 ? (
                typeBloodFiltered.map((typeInfo) => (
                    <aside className='results' key={typeInfo.type}>
                        <h3 className='results__type'>If you have a blood type: <span className='results__type__blood'>{typeInfo.type}</span></h3>
                        <section className='results__box'>
                            <div className='results__box__donate'>
                                <p className='results__box__donate__text'>This is the list of blood types that you are eligible to donate: <span className='results__box__donate__text__list'>{typeInfo.donate.join(' ')}</span></p>
                            </div>
                            <div className='results__box__receive'>
                                <p className='results__box__receive__text'>This is the list of blood types you are eligible to receive: <span className='results__box__receive__text__list'>{typeInfo.receive.join(' ')}</span></p>
                            </div>
                        </section>
                    </aside>
                ))
            ) : (
                <p>There are no results to show.</p>
            )}
       </article>
    )
}

export default Results;