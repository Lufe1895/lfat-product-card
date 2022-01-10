import * as React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../../src/data/products';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
    test('should mostrar el componente correctamente con el título personalizado', () => {
        const wrapper = render.create(
            <ProductImage img='hola.jpg' />
        )

        expect(wrapper).toMatchSnapshot();
    });
    
    test('should mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper).toMatchSnapshot();
    })
    
})
