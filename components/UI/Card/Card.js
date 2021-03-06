import Link from 'next/link';
import style from '../../shared/Header/Header.module.css'

const Card = ({ slug, image, title, description, tag }) => {

  return (
    <div className={`w-full lg:p-8 p-5 pt-0 ${style.animateCards}`}>
      <Link href={'/blog/[category]/[postSlug]'} as={`/blog/${tag}/${slug}`}>
        <div className="w-full h-full p-3 rounded-xl bg-bitGreen-50 cursor-pointer">
          <img src={image} className="w-full object-cover h-40 rounded-xl" alt='' />
          <h1 className="ml-1 capitalize text-green-500 text-sm font-semibold mt-3">
            {title}
          </h1>
          <p className="ml-1 mb-3 text-black-900 font-semibold leading-5 mt-1 text-sm">
            {description.slice(0, 60)}.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
