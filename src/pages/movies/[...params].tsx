// Components
import Seo from "@/components/Seo";

interface IParams {
  params: [string, number];
}

export default function Detail({ params }: IParams) {
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading.."}</h4>
    </div>
  );
}

export function getServerSideProps({
  params: { params },
}: {
  params: IParams;
}) {
  return {
    props: { params },
  };
}
