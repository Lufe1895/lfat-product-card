import * as React from 'react';
import render from 'react-test-renderer';
import {} from '../../src/components';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product } from '../../src/data/products';

describe('ProductTitle', () => {
    test('should mostrar el componente correctamente con el título personalizado', () => {
        const wrapper = render.create(
            <ProductTitle title='Hola, mundo.' className='custom-class' />
        )

        expect(wrapper).toMatchSnapshot();
    });
    
    test('should mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard product={ product }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper).toMatchSnapshot();
    })
    
})
