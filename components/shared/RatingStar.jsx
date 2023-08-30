import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function RatingStar({ rating }) {
    const MAX_STARS = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
    <div className='flex gap-1'>{stars(MAX_STARS,fullStars,hasHalfStar)}</div>
  )
}

const stars = (MAX_STARS,fullStars,hasHalfStar) => {
    const stars = [];

    for (let i = 1; i <= MAX_STARS; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };
