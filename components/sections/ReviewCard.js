import Image from 'next/image';
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
  return (
    <div className="h-fit lg:h-36 w-full md:w-[95%] xl:w-[98%] p-5 bg-white text-black flex items-start gap-x-4">
      <div>
        <Image src={review.image} alt={review.name} />
      </div>
      <div className="flex-1">
        <h6 className="font-medium text-sm capitalize">{review.name}</h6>
        <p className="text-sm text-primary-gray">{review.review}</p>

        <div className="mt-2">
          <ReactStars
            count={5}
            value={review?.rating}
            size={15}
            edit={false}
            color="#dadada"
            activeColor="#104141"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
