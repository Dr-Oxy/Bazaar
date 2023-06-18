import Image from 'next/image';
import { starIconGray, heartIconRed } from '@/public/assets/icons';

const FlashCard = ({ product }) => {
  const total_stock = 10;
  const units_left = (product?.units * 100) / total_stock;
  const left_num = Math.round(total_stock - product?.units);

  return (
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
          <span className="text-xs text-bazaar-black">{product?.ratings}</span>
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
          <span className="text-xs text-[#3A3A3A] ">
            {' '}
            {left_num} items left
          </span>
          <div className="w-full bg-off-white rounded-full">
            <div
              className="bg-primary-red  text-blue-100 text-center p-1 rounded-full"
              style={{ width: `${units_left}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
