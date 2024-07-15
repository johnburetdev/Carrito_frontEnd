import Link from "next/link";
import { cn } from "../helpers/classname";

interface Props {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const PagePagination = ({ pagination }: Props) => {
  const { page, pageSize, pageCount, total } = pagination;

  const classNumber =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNumberActive =
    "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const classBtnP =
    "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classBtnN =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <nav aria-label="Page navigation " className="text-center pb-4">
      <ul className="inline-flex -space-x-px ">
        <li>
          <Link
            href={page === 1 ? `/blog?page=${page}` : `/blog?page=${page - 1}`}
            className={cn(classBtnP, {
              "opacity-30 pointer-events-none": page === 1,
            })}
          >
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>
        {Array.from({ length: pageCount }).map((_, index) => (
          <li>
            <Link
              href={`/blog?page=${index + 1}`}
              className={`${
                index + 1 === page ? classNumberActive : classNumber
              }`}
            >
              {index + 1}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={
              page === pageCount
                ? `/blog?page=${page}`
                : `/blog?page=${page + 1}`
            }
            className={cn(classBtnN, {
              "opacity-30 pointer-events-none": page === pageCount,
            })}
          >
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default PagePagination;
