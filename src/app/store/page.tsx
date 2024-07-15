import PageCardStore from "../components/PageCardStore";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/PagePagination";
import { fetchApi } from "../helpers/fetch-api";
import { Sneaker } from "../interfaces/snaker";

const getSneakers = async (page = 1, pageSize = 10) => {
  const path = "/sneakers";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);
  return { data: data, pagination: meta.pagination };
};

const Store = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page } = searchParams;
  let pageNumber = page ? parseInt(page) : 1;
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
    console.log(
      "Valor no válido como parámetro de página. Se establece a 1. 🐤"
    );
  }

  const { data, pagination } = await getSneakers(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeader tittle="Sneakers Store" />
      <Pagination pagination={pagination} />
      <section className="grid grid-cols-2 gap-4 pb-8">
        {data.map((sneaker: Sneaker) => (
          <PageCardStore key={sneaker.id} sneaker={sneaker} />
        ))}
      </section>
    </div>
  );
};
export default Store;
