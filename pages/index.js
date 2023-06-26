import Image from 'next/image';

import {
  GroceryCard,
  ProductCard,
  FlashCard,
  ReviewCard,
  Testimonial,
} from '@/components/sections';

import { ads1, ads2, ads3 } from '@/public/assets/images';
import { cateogories, products } from '@/utils/data';

function Home() {
  return (
    <main>
      {/* ads */}
      <section className="mb-8 hidden lg:grid grid-cols-12 gap-x-6">
        <article className="col-span-4 flex flex-col justify-between">
          <div className="h-60 bg-gray-200">
            <Image className="h-full w-full" src={ads1} alt="ads" />
          </div>

          <div className="h-40  bg-gray-200">
            <Image className="h-full w-full" src={ads2} alt="ads" />
          </div>
        </article>

        <article className="col-span-8">
          <Image className="h-full w-full" src={ads3} alt="ads" />
        </article>
      </section>

      {/* categories */}
      <section className=" mb-12">
        <h2 className="text-primary-gray capitalize text-sm lg:text-2xl">
          categories
        </h2>

        <article className="mt-6 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-6">
          {cateogories.map((item) => (
            <GroceryCard key={item.id} item={item} />
          ))}
        </article>

        <div className="mt-8">
          <button className="w-full bg-primary-red/10 lg:bg-white text-primary-red text-xs md:text-base font-medium py-2 lg:py-6 rounded-lg">
            See all
          </button>
        </div>
      </section>

      {/* flash sales */}
      <section className="mb-16">
        <article className="bg-gradient-flash px-14 py-6 flex items-center justify-between">
          <h3 className="text-white font-medium capitalize text-sm lg:text-2xl">
            flash sales
          </h3>

          <div className="text-white text-lg font-bold">
            Time Left: 12h : 23m: 23s
          </div>

          <button className="font-normal text-base text-white">See all</button>
        </article>

        <article className="pt-4 pb-8 lg:pb-14 px-4 lg:px-14 bg-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product) => (
            <FlashCard key={product.id} product={product} />
          ))}
        </article>
      </section>

      {/* hot deals*/}
      <section className="mb-10">
        <article className="bg-[#FFF2ED] px-14 py-5 flex items-center justify-between">
          <h3 className="text-bazaar-black font-medium capitalize text-sm lg:text-2xl">
            hot deals
          </h3>

          <button className="font-normal text-base text-primary-red">
            See more
          </button>
        </article>

        <article className="pt-4 pb-8 lg:pb-14 px-4 lg:px-14 bg-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </article>
      </section>

      {/* food stuff */}
      <section className="mb-10">
        <article className="bg-[#ECFFFF] px-14 py-5 flex items-center justify-between">
          <h3 className="text-bazaar-black font-medium capitalize text-sm lg:text-2xl">
            food stuff
          </h3>

          <button className="font-normal text-base">See more</button>
        </article>

        <article className="pt-4  pb-8 lg:pb-14 px-4 lg:px-14 bg-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </article>
      </section>

      {/* drinks */}
      <section>
        <article className="bg-[#ECFFFF] px-14 py-5 flex items-center justify-between">
          <h3 className="text-bazaar-black font-medium capitalize text-sm lg:text-2xl">
            drinks
          </h3>

          <button className="font-normal text-base">See more</button>
        </article>

        <article className="pt-4 pb-8 lg:pb-14 px-4 lg:px-14 bg-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </article>
      </section>

      {/* testimonial */}

      <Testimonial />

      <section className="mb-10 bg-white text-primary-gray px-4 py-8 lg:p-14 rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vitae
        tortor urna, porttitor urna turpis hendrerit semper eu. Nunc nec, ut
        nisi sem. Vulputate et cursus varius massa cum arcu nibh ridiculus
        imperdiet. Nunc in elit tristique mauris. Amet, vel vitae quis purus.
        Sit velit turpis cursus tincidunt aenean ultricies egestas tempor
        malesuada. Blandit massa, fusce mauris cras pharetra ultricies faucibus
        ut. Erat accumsan risus facilisis fames ut placerat hac tellus. Vivamus
        phasellus at sem quis quis ipsum fermentum velit. Ut senectus eget
        adipiscing integer. Justo mi non platea diam at vitae quis. Ornare sit
        praesent et blandit ac mauris. Ultrices tempus scelerisque ullamcorper
        commodo. Nisi, venenatis eu morbi mi feugiat purus laoreet leo. Aenean
        in commodo in enim ut magna egestas sed ut. Adipiscing vestibulum arcu
        et dictum. Dictum viverra consectetur gravida velit rutrum. Ultricies
        nibh orci fringilla vel id tristique tristique morbi rhoncus. Id donec
        faucibus tristique id magna tempor donec. Etiam pretium id morbi eu.
        Adipiscing integer tellus dolor integer ultrices. Tortor, dignissim ut
        diam interdum. Lobortis eleifend donec vestibulum id placerat ipsum.
        Volutpat, sed a mauris accumsan, vitae sit ac. Iaculis scelerisque et
        malesuada tristique dui lectus ornare porta. Amet arcu diam lectus eu
        vestibulum. Libero etiam donec diam gravida neque. Ultricies iaculis
        pulvinar in ut pharetra et eros, in in. Pharetra, pharetra fermentum
        nunc, duis praesent.
      </section>
    </main>
  );
}

export default Home;
