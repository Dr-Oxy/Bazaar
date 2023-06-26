import React from 'react';
import Image from 'next/image';

import GoBack from '@/components/elements/GoBack';
import { ProductImage, RelatedProduct } from '@/components/sections';
import ProductQuickNav from '@/components/layouts/ProductQuickNav';

import { fullHeartRed, buyCart, walletBlack } from '@/public/assets/icons';

import { products } from '@/utils/data';

const Product = () => {
  return (
    <main>
      <ProductQuickNav />

      <section className="mt-20">
        <GoBack />
        <section className="mt-5 px-6 lg:px-14 py-7 lg:py-12 bg-white rounded-lg">
          <h1 className="text-xl lg:text-2xl font-medium text-bazaar-black capitalize">
            product details
          </h1>

          <div className="lg:flex gap-x-12 mt-8">
            <article className="flex lg:block items-center justify-center">
              <ProductImage />
            </article>
            <article className="lg:flex-1 mt-6 lg:mt-0">
              <h2 className="text-bazaar-black font-medium text-lg lg:text-2xl">
                Amadi farms Apples <span className="text-xl"> (2kg)</span>
              </h2>

              <div className="flex gap-x-4 my-6">
                <span className="text-primary-red text-xs md:text-base ">
                  N2035
                </span>
                <span className=" line-through text-primary-gray text-xs md:text-base ">
                  N3500
                </span>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center border border-primary-red">
                  <Image src={fullHeartRed} alt="save this item" />
                </div>

                <p className="text-base text-bazaar-black">Save this item</p>
              </div>

              <div className="mt-6 md:flex  gap-x-4">
                <button className="flex items-center justify-center gap-x-1 py-3 px-7 w-full md:w-fit  bg-primary-green hover:bg-primary-green/80 text-sm font-medium text-white rounded-lg">
                  <Image src={buyCart} alt="add to cart" />
                  <span>Add to Cart</span>
                </button>

                <button className="mt-4 md:mt-0 py-3 px-7 flex justify-center  items-center gap-x-1 w-full md:w-fit  bg-white border border-primary-green text-sm font-medium text-primary-green rounded-lg">
                  <Image src={walletBlack} alt="proceed to pay" />{' '}
                  <span>Proceed to Buy this item</span>
                </button>
              </div>
            </article>
          </div>

          <article className="mt-14 mb-8 bg-off-white p-6 lg:p-10 rounded-lg">
            <h3 className="capitalize text-base text-bazaar-black font-medium mb-4">
              product description
            </h3>
            <p className="text-sm md:text-base text-primary-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              orci turpis volutpat egestas proin. Ut accumsan eu, non sem elit,
              curabitur. A, nulla ac venenatis nunc et dui massa ac. Vitae non
              sed sollicitudin turpis rhoncus sed. Praesent ipsum, odio eu duis
              accumsan odio erat praesent ut. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam sed orci turpis volutpat
              egestas proin. Ut accumsan eu, non sem elit, curabitur. A, nulla
              ac venenatis nunc et dui massa ac. Vitae non sed sollicitudin
              turpis rhoncus sed. Praesent ipsum, odio eu duis accumsan odio
              erat praesent ut.
            </p>

            <p className="text-base text-primary-gray mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              orci turpis volutpat egestas proin. Ut accumsan eu, non sem elit,
              curabitur. A, nulla ac venenatis nunc et dui massa ac. Vitae non
              sed sollicitudin turpis rhoncus sed. Praesent ipsum, odio eu duis
              accumsan odio erat praesent ut.
            </p>
          </article>

          <article className=" bg-off-white p-6 lg:p-10  rounded-lg">
            <h3 className="capitalize text-base text-bazaar-black font-medium mb-4">
              product information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-y-6  lg:w-5/6">
              <div className="md:col-span-4">
                <h4 className="text-sm text-primary-gray capitalize">
                  Categories
                </h4>

                <div className="mt-3 grid grid-cols-3 lg:gap-x-2 gap-y-4 lg:w-4/5">
                  <span className="block text-center w-fit bg-orange-1 py-1 px-4 rounded-2xl text-base text-white capitalize">
                    fruits
                  </span>

                  <span className="block text-center w-fit bg-orange-1 py-1 px-4 rounded-2xl text-base text-white capitalize">
                    apple
                  </span>

                  <span className="block text-center w-fit bg-orange-1 py-1 px-4 rounded-2xl text-base text-white capitalize">
                    veggies
                  </span>
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm text-primary-gray capitalize mb-3">
                  Weight
                </h4>
                <span className="text-base text-bazaar-black">2kg</span>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm text-primary-gray capitalize mb-3">
                  Package type
                </h4>
                <span className="text-base text-bazaar-black">Net pack</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-8 gap-y-6 lg:w-5/6">
              <div className="md:col-span-4">
                <h4 className="text-sm text-primary-gray capitalize mb-3">
                  Storage
                </h4>

                <span className="text-base text-bazaar-black">
                  Store in a cool, dry place.
                </span>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm text-primary-gray capitalize mb-3">
                  Brand
                </h4>
                <span className="text-base text-bazaar-black">None</span>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm text-primary-gray capitalize mb-3">
                  From?
                </h4>
                <span className="text-base text-bazaar-black">Amadi farm</span>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-8 mb-12 px-6 lg:px-14 py-7 lg:py-12 bg-white rounded-lg">
          <h2 className="text-lg lg:text-2xl font-medium text-bazaar-black capitalize">
            related products
          </h2>

          <article className="mt-4 bg-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {products?.map((product) => (
              <RelatedProduct key={product.id} product={product} />
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default Product;
