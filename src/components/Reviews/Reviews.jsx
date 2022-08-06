import { useGetProductReviewsQuery } from '../../services/productApi';
import RateStars from '../Product/RateStars';

export default function Reviews({ productId }) {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetProductReviewsQuery(productId);

  if (isError) return <div>There is error</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <ul className="my-6 flex flex-col gap-y-7">
      {reviews?.map((review) => (
        <li
          key={review._id}
          className="flex flex-col gap-2 basis-28 grow-0 shadow-md p-1 rounded justify-center md:justify-start"
        >
          <div className="flex justify-center md:justify-start">
            <RateStars value={review?.rating} />
          </div>
          <div className="avatar placeholder gap-x-2 justify-center md:justify-start">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs capitalize">
                {review?.user?.name?.substring(0, 2) || 'U'}
              </span>
            </div>
            <h4 className="capitalize text-lg">{review?.user?.name}</h4>
          </div>
          <p className="text-slate-600 leading-5 font-normal   text-center md:text-start">
            {review?.review}
          </p>
        </li>
      ))}
    </ul>
  );
}
