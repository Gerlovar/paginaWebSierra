import React from "react";
import { Carrusel } from "../../Componentes/Carruseles/Carrusel";
import { CarruselInf } from "../../Componentes/Carruseles";
import arJason from "../../Assets/jpg/productosJpg/productos.json";
import "./_Home.scss";




export function Home() {
    return (
        <div className="inicio px-4 py-3">
            <section id="sierra">
                <div className="container-xxl p-0">
                    
                    <div className="row g-0 avi">
                        <div className="col ">
                            <div className="d-flex justify-content-center fs-2 gx-1">
                                <p>Eres <span> Ferretero? </span> tenemos precios especiales para ti... contactanos</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row g-0 py-3 gx-4">
                        <div className="col-5">
                        

                            <div className="row row-cols-1 g-0">

                                <div className="col ">
                                    <Carrusel
                                        idCarrusel={"c1"}
                                    />
                                </div>

                                <div className="col ">
                                    <Carrusel
                                        idCarrusel={"car2"}
                                    />
                                </div>


                            </div>   


                        </div>

                        <div className="col-7">
                            <div className="row row-cols-1 g-0">
                                
                                <div className="col">
                                    <video 
                                        width="100%"
                                        height="auto"
                                        src=""                                    
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                    />

                                </div>

                                <div className="col btn-catalogo">
                                    <a href="">
                                        Descarga nuestro catalogo
                                    </a>                                                                      
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="masProductos">
                <div className="container-xxl p-0">
                    <div className="row g-0">
                        <div className="col">
                            <div className="fs-2 gx-1">
                                <p><b>Conoce otros productos para ti</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col">
                            <CarruselInf 
                                lista1={arJason}                            
                            />
                        </div>                            
                    </div>
                </div>
            </section>

        </div>
    );
}
