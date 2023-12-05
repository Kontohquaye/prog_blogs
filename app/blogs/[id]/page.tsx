import backendInstance from "../../libs/backendInstance";
import {
  parseISO,
  formatDistanceToNow,
  format,
  differenceInDays,
} from "date-fns";

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

type ParamsType = {
  params: { id: string };
};

const fetchData = async (id: string) => {
  const res = await fetch(`${backendInstance}/posts/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const Blog = async ({ params }: ParamsType) => {
  const { id } = params;
  const blog: DataType = await fetchData(id);
  const date = parseISO(blog.date);
  const agoDate = formatDistanceToNow(date, { addSuffix: true });
  const formattedDate = format(date, "MM/dd/yyyy");
  const difference = differenceInDays(new Date(), date);
  return (
    <div className="website  mt-6">
      {blog.title && (
        <div key={blog.id} className="mx-12 lg:mx-6">
          <div className="image-box overflow-hidden  rounded-md max-h-[450px]">
            <img
              src={blog.image}
              className="sm:h-full h-44 sm:min-h-[400px]  md:min-h-[300px] min-w-full max-w-[500px] object-cover"
              alt={blog.image}
            />
          </div>

          <div className="info sm:max-h-[200px] sm:h-[200px]  flex flex-col justify-between">
            <p className="date text-primary opacity-60 dark:opacity-70 dark:text-darktext font-semibold mt-2">
              {date && difference > 1 ? formattedDate : agoDate}
            </p>
            <h2 className="font-bold text-xl dark:text-darkAccent opacity-50 mt-2">
              {blog.title}
            </h2>
            <p className="opacity-70 font-semibold mt-2">
              by: {blog.author.name}
            </p>
            <p className="text-[#999] mt-4">{blog.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
