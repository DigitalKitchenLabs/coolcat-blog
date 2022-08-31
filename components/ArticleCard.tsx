import { Article } from 'utils/types';
import Image from 'next/image';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <a href={`/blog/${slug}`} className="bg-white dark:bg-catred-500 rounded-xl overflow-hidden shadow-lg hover:ring-2 ring-catred-500 ">
      <div className="flex flex-col overflow-hidden cursor-pointer group">
        <div className="relative">
          <div className="absolute">
            {article?.categories?.map(category => (
              <div
                key={category}
                className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mr-2 text-xs font-bold text-slate-800 font-heading uppercase bg-offwhite-1 rounded-lg left-3 top-3"
              >
                {category}
              </div>
            ))}
          </div>
          <Image
            className="object-cover w-full transition rounded-t-xl group-hover:opacity-90"
            src={article.coverImage}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={article.coverImage}
            layout="intrinsic"
            width={800}
            height={400}
            alt={'article cover'}
          />
        </div>
        <div className="flex flex-col h-48 justify-around py-2 px-2 bg-white dark:bg-blue-800 rounded-b-xl">
          <div className="flex-1">
            <p className="text-xl font-bold text-gray-900 dark:text-white font-heading">{article.title}</p>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-50 line-clamp-2">{article.summary}</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm text-gray-400">
              {article.categories.map(category => (
                <div key={category}>
                  <span className="font-semibold text-slate-800 dark:text-gray-200">{category} </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time className="text-gray-500 dark:text-gray-50 font-bold" dateTime={formattedTime}>{formattedTime}</time>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
}
