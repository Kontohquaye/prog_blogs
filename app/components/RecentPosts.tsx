// import Image from "next/image";
import backendInstance from "../libs/backendInstance";
import {
  parseISO,
  formatDistanceToNow,
  format,
  differenceInDays,
} from "date-fns";
import Authors from "./Author";

// const date = parseISO(isoDateString);
// return formatDistanceToNow(date, { addSuffix: true });
// format(date, 'MM/dd/yyyy')

const fetchData = async () => {
  const res = await fetch(`${backendInstance}/posts`, {
    next: { revalidate: 0 },
  });
  return res.json();
};

type DataType = {
  id: string;
  title: string;
  image: string;
  body: string;
  date: string;
  user: string;
  author: {
    name: string;
    profileImage: string;
  };
};

const RecentPost = async () => {
  const data = await fetchData();
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="content flex gap-3">
      <div className="blogs basis-3/4 ml-2">
        <h2 className="font-bold text-xl">Recent Posts</h2>
        {data &&
          data.map((data: DataType) => {
            const date = parseISO(data.date);
            const agoDate = formatDistanceToNow(date, { addSuffix: true });
            const formattedDate = format(date, "MM/dd/yyyy");
            const difference = differenceInDays(new Date(), date);
            return (
              <div key={data.id} className="blog flex  items-center mb-4">
                <div className="image-box overflow-hidden mr-3 max-h-[150px]">
                  <img
                    src={data.image}
                    className="h-full min-w-full max-w-[400px] object-cover"
                    alt={data.image}
                  />
                </div>
                <div className="info max-h-[150px] h-[150px]  flex flex-col justify-between">
                  <p className="date text-primary opacity-60 dark:opacity-100 dark:text-white font-semibold">
                    {difference > 1 ? formattedDate : agoDate}
                  </p>
                  <h2 className="font-bold text-xl">{data.title}</h2>
                  <p className="text-[#999]">
                    {data.body.slice(0, 160) + "..."}
                  </p>
                  <p className="opacity-70 font-semibold">
                    by: {data.author.name}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="right basis-1/4">
        <Authors />
      </div>
    </div>
  );
};

export default RecentPost;
