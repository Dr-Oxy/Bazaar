import { tomatoes } from '@/public/assets/images';
import { starIconGray } from '@/public/assets/icons';
import Image from 'next/image';

const ProductImage = () => {
  return (
    <div className="relative bg-off-white rounded-lg h-60 w-60 flex items-center justify-center">
      <Image src={tomatoes} alt="product image" />

      <div className="absolute right-4 lg:right-6  bottom-4 flex items-center gap-x-1 bg-primary-green/10 p-2 w-fit rounded-md">
        <Image src={starIconGray} alt="starred" />
        <span className="text-xs text-bazaar-black">3.5 </span>
      </div>
    </div>
  );
};

export default ProductImage;
