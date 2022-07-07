import themes from 'daisyui/src/colors/themes';
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
export default function RateStars({ size, value, onChange }) {
  return (
    <ReactStars
      count={5}
      size={size}
      filledIcon={<FaStar />}
      emptyIcon={<FaRegStar />}
      halfIcon={<FaStarHalfAlt />}
      a11y
      isHalf
      value={value}
      onChange={onChange}
      color={themes['[data-theme=light]']['neutral']}
      activeColor={themes['[data-theme=light]']['neutral']}
    />
  );
}
