import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties 
}

export const ProductImage = ({ img, className, style }:Props) => {
    const { product } = useContext(ProductContext);
    let image:string = '';
    
    if (img) {
        image = img;
    } else if (product.img) {
        image = product.img;
    } else {
        image = noImage;
    }

    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            style={ style }
            src={ image } 
            alt="Product" 
        />
    );
}