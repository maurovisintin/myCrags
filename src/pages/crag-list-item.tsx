import Image from "next/image";

type Props = {
  data: any;
};

export const CragListItem = ({ data }: Props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {data.photo?.styles.size_m.url && (
            <Image
              src={data.photo?.styles.size_l.url}
              alt="crag image"
              width={256}
              height={256}
              layout="fixed"
            />
          )}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {data.name}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            lat {data.latitude} long {data.longitude}
          </a>
          <p className="mt-2 text-gray-500">{data.access_info}</p>
        </div>
      </div>
    </div>
  );
};
