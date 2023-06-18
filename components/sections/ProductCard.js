import Image from 'next/image';
import Link from 'next/link';
import { starIconGray, heartIconRed } from '@/public/assets/icons';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/${product?.id}`}>
      <div>
        <div className=" bg-off-white p-4 lg:p-6 relative">
          <div className="flex items-center justify-between mb-2">
            <Image
              className="cursor-pointer"
              src={heartIconRed}
              alt="rate product"
            />
            <div className="text-xs text-primary-green capitalize bg-primary-green/10 p-2 w-fit rounded-md">
              promo
            </div>
          </div>

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
            <span className="text-xs text-bazaar-black">
              {product?.ratings}
            </span>
          </div>
        </div>

        <div className="pt-6 ">
          <div>
            <h6 className="w-full md:w-11/12 text-primary-gray  text-sm md:text-lg font-medium">
              {' '}
              {product.name}
            </h6>
            <span className="text-primary-red ttext-xs md:text-base ">
              {product.price}
            </span>
          </div>

          <div className="mt-4">
            <button className="py-3 w-full bg-primary-green hover:bg-primary-green/80 text-sm font-medium text-white rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
