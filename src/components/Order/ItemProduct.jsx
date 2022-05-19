import React,  {Fragment} from 'react';
import imagen from '../../camiseta.jpg';
import ItemInfoProduct from './ItemInfoProduct';

function ItemProduct() { 

  return (<Fragment>
            <div className="row row-item"> 
                <div className="col-12 col-md-5 col-lg-5 col-imagen-item">
                    <img className="img-pedidos" src={imagen}></img>
                </div>
                <div className="col-12 col-md-7 col-lg-7 col-information-item">
                    <ItemInfoProduct classCol="row-name-product" value="CAMISETA NEGRA DE ALGODÓN"/>
                    <ItemInfoProduct classCol="row-description-product" value="Descripción breve"/>
                    <ItemInfoProduct classCol="row-stock-product" value="2 x 16,87 €"/>
                    <ItemInfoProduct classCol="row-price-product" value="33,74 €"/>
                    <div className="row row-xsm-order">
                        <div className="col-12">
                            <span className='price-separado-span'>2 x 16,87</span>
                            <span className='price-total-span'>33,74 €</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>);  
}; 

export default ItemProduct;