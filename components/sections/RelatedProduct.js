import React from 'react';
import Image from 'next/image';
import { heartIconRed, starIconGray } from '@/public/assets/icons';

const RelatedProduct = ({ product }) => {
  return (
    <div>
      <div className=" bg-off-white p-4 lg:p-6 relative">
        <div className="h-32 w-5/6 relative">
          <Image
            className="mx-auto"
            src={product.image}
            alt={product.name}
            fill
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </div>

        <div className="absolute right-4 lg:right-6  bottom-4 flex items-center gap-x-1 bg-primary-green/10 p-2 w-fit rounded-md">
          <Image src={starIconGray} alt="starred" />
          <span className="text-xs text-bazaar-black">{product?.ratings}</span>
        </div>
      </div>

      <div className="pt-6 ">
        <div>
          <h6 className="w-full md:w-11/12 text-primary-gray  text-sm md:text-lg font-medium">
            {' '}
            {product.name}
          </h6>
          <span className="text-primary-gray text-xs md:text-base ">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
