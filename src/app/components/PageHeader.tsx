interface Props {
  tittle: string;
}

const PageHeader = ({ tittle }: Props) => {
  return (
    <h1 className="text-5xl font-extrabold text-center m-10 ">{tittle}</h1>
  );
};
export default PageHeader;
