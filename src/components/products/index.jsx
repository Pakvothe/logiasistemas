import React from 'react';
import { products } from './products';
//Styles
import Fade from 'react-reveal/Fade';
import { StyledProducts } from '../styles/styled_products';

const Products = () => {
	return (
		<Fade big>
			<StyledProducts>
				<h1>Productos</h1>
				<div className='container'>
					{products &&
						products.map((prod) => (
							<div className='product' ctkey={prod.id}>
								<img
									className='productImg'
									src={prod.image}
									alt={prod.title}
								/>

								<div className='info'>
									<h3 className='title'>{prod.title}</h3>
									<p>{prod.info}</p>
								</div>
							</div>
						))}
				</div>
			</StyledProducts>
		</Fade>
	);
};
export default Products;
