
import React from 'react';

function Results({ typeBloodFiltred }) {
  
    return (
       <article>
            <h2>Resultados</h2>
            {typeBloodFiltred.length > 0 ? (
                typeBloodFiltred.map((typeInfo) => (
                    <div key={typeInfo.type}>
                        <h3>Si tienes un tipo de sangre: {typeInfo.type}</h3>
                        <p>Puedes donar sangre a: {typeInfo.donate.join(', ')}</p>
                        <p>Puedes recibir sangre de: {typeInfo.receive.join(', ')}</p>
                    </div>
                ))
            ) : (
                <p>No hay resultados para mostrar.</p>
            )}
       </article>
    )
}

export default Results;