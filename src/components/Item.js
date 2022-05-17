import React,  {Fragment} from 'react';
import imagen from '../camiseta.jpg';

function Item() { 

  return (<Fragment>
            <div className="row row-item">
                <div className="col-3  col-imagen-item">
                    <img className="img-pedidos" src={imagen}></img>
                </div>
                <div className="col-9 col-information-item">
                    <div className="row row-name-product">
                        <div className="col-12 ">CAMISETA NEGRA DE ALGODÓN</div>
                    </div>
                    <div className="row row-description-product">
                        <div className="col-12 ">Descripción breve</div>
                    </div>
                    <div className="row row-stock-product">
                        <div className="col-12 ">2 x 16,87 €</div>
                    </div>
                    <div className="row row-price-product">
                        <div className="col-12 ">33,74 €</div>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default Item;