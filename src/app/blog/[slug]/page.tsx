import PageHeader from "@/app/components/PageHeader";
import Image from "next/image";
import { fetchApi } from "@/app/helpers/fetch-api";
import { formatDate } from "@/app/helpers/fomat-date-helper";
import { Post } from "@/app/interfaces/post";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

const getData = async (slug = "") => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "image",
    filters: {
      slug: slug,
    },
  };

  const { data } = await fetchApi(path, urlParamsObject);
  return data[0];
};

interface Props {
  params: {
    slug: string;
  };
}

const Slug = async ({ params }: Props) => {
  const { slug } = params;
  const post: Post = await getData(slug);

  if (!post) {
    return notFound();
  }

  const { title, description, createdAt, image, body } = post.attributes;
  const { url, width, height } = image.data.attributes.formats.medium;

  return (
    <div className="space-y-8">
      <PageHeader tittle={title} />
      <p className="text-gray-500">{formatDate(createdAt)}</p>
      <Image
        className="h-auto rounded-lg"
        src={url}
        alt={`image - ${title}`}
        width={width}
        height={height}
      />
      <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
        {description}
      </p>
      <div className="prose">
        <MDXRemote source={body} />
      </div>
    </div>
  );
};
export default Slug;
