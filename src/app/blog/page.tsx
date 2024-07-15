import Header from "../components/Header";
import PagePagination from "../components/PagePagination";
import { fetchApi } from "../helpers/fetch-api";
import { Post } from "../interfaces/post";

import PageCardImage from "@/app/components/PageCardImage";
import PageHeader from "@/app/components/PageHeader";

interface Props {
  searchParams: {
    page?: string;
  };
}

const getData = async (page = 1, pageSize = 2) => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page,
      pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);

  return {
    data,
    pagination: meta.pagination,
  };
};

const Blog = async ({ searchParams }: Props) => {
  const { page } = searchParams;

  let pageNumber = page ? parseInt(page) : 1;

  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }
  const { data, pagination } = await getData(pageNumber);

  return (
    <div className="space-y-5">
      <PageHeader tittle="Latest POSTS" />
      <PagePagination pagination={pagination} />
      {data.map((post: Post) => (
        <PageCardImage key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Blog;
