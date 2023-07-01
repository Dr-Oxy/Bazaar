import ReviewCard from './ReviewCard';

import Slider from 'react-slick';

import { reviews } from '@/utils/data';

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: null,
    dotsClass: 'button__bar',
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="my-8">
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
