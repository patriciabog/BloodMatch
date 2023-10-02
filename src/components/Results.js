
import React from 'react';

function Results({ typeBloodFiltred, typeDonateFiltered }) {
  
    return (
       <article>
            <h2>Resultados</h2>
            {typeBloodFiltred.length > 0 ? (
                typeBloodFiltred.map((typeInfo) => (
                    <div key={typeInfo.type}>
                        <h3>If you have a blood type: {typeInfo.type}</h3>
                        {typeDonateFiltered.length > 0 ? <p> You can donate blood to : {typeInfo.donate.join(', ')}</p> : <p> You can receive blood from : {typeInfo.receive.join(', ')}</p>}
                    </div>
                ))
            ) : (
                <p>No hay resultados para mostrar.</p>
            )}
       </article>
    )
}

export default Results;