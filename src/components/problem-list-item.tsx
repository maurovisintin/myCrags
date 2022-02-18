import Image from "next/image";

type Props = {
  data: any;
};

const IMG_WIDTH = 400;

export const ProblemListItem = ({ data }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt="crag image"
              width={IMG_WIDTH * 0.78}
              height={IMG_WIDTH}
              layout="fixed"
            />
          )}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {data.name} - {data.grade}
          </div>
          <p className="mt-2 text-gray-500">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
