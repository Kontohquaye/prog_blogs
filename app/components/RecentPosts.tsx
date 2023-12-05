import backendInstance from "../libs/backendInstance";
import {
  parseISO,
  formatDistanceToNow,
  format,
  differenceInDays,
} from "date-fns";
import Authors from "./Author";
import Link from "next/link";

// const date = parseISO(isoDateString);
// return formatDistanceToNow(date, { addSuffix: true });
// format(date, 'MM/dd/yyyy')

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

const fetchData = async () => {
  const res = await fetch(`${backendInstance}/posts`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const RecentPost = async () => {
  const data = await fetchData();

  return (
    <div className="content  lg:flex lg:gap-3 ">
      <div className="blogs basis-3/4 ml-2">
        <h2 className="font-bold text-xl mb-3">Recent Posts</h2>
        <div className="grid-blogs md:grid grid-cols-2 gap-6 mx-2 lg:mr-0">
          {data &&
            data.map((data: DataType) => {
              const date = parseISO(data.date);
              const agoDate = formatDistanceToNow(date, { addSuffix: true });
              const formattedDate = format(date, "MM/dd/yyyy");
              const difference = differenceInDays(new Date(), date);
              return (
                <div key={data.id} className="blog  mb-4">
                  <div className="image-box overflow-hidden  rounded-md max-h-[300px]">
                    <Link href={`/blogs/${data.id}`}>
                      <img
                        src={data.image}
                        className="sm:h-full h-44 sm:min-h-[200px]  md:min-h-[300px] min-w-full max-w-[400px] object-cover"
                        alt={data.image}
                      />
                    </Link>
                  </div>
                  <div className="info sm:max-h-[200px] sm:h-[200px]  flex flex-col justify-between">
                    <p className="date text-primary opacity-60 dark:opacity-70 dark:text-darktext font-semibold mt-2">
                      {difference > 1 ? formattedDate : agoDate}
                    </p>
                    <h2 className="font-bold text-xl dark:text-darkAccent opacity-50 mt-2">
                      {data.title}
                    </h2>
                    <p className="text-[#999] mt-4">
                      {data.body.slice(0, 110) + "..."}
                    </p>
                    <p className="opacity-70 font-semibold mt-2">
                      by: {data.author.name}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="right basis-1/4 lg:mt-0 mt-20 ml-3 lg:ml-0 lg:mr-2 ">
        <Authors />
      </div>
    </div>
  );
};

export default RecentPost;
