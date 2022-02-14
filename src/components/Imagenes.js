import React from "react";

function Imagenes({ datos = [] }) {
    return (
        <div className="row">
            {
                datos.map(item => (
                    <div key={item.id} className="col mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card.title">{item.name}</h5>
                                <hr/>
                                <p>Especie: {item.species}</p>
                                <p>locacion: {item.location.name}</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}
export default Imagenes;