import Wrapper from "@/app/components/Wrapper";
import backendInstance from "../../../libs/backendInstance";
import {
  parseISO,
  formatDistanceToNow,
  format,
  differenceInDays,
} from "date-fns";

import Link from "next/link";
import ReadMore from "@/app/components/MoreSection";

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

const fetchData = async (id: string) => {
  const res = await fetch(`${backendInstance}/posts/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const BlogModal = async ({ params }: { params: { id: string } }) => {
  const blog: DataType = await fetchData(params.id);
  const date = parseISO(blog.date);
  const agoDate = formatDistanceToNow(date, { addSuffix: true });
  const formattedDate = format(date, "MM/dd/yyyy");
  const difference = differenceInDays(new Date(), date);
  return (
    <Wrapper>
      {blog.title && (
        <div key={blog.id} className="text-sm sm:text-base">
          <div className="image-box overflow-hidden  rounded-md max-h-[300px]">
            <img
              src={blog.image}
              className="sm:h-full h-44 sm:min-h-[200px]  md:min-h-[300px] min-w-full max-w-[400px] object-cover"
              alt={blog.image}
            />
          </div>

          <div className="info sm:max-h-[200px] sm:h-[200px]  flex flex-col justify-between">
            <p className="date text-primary opacity-60 dark:opacity-70 dark:text-darktext font-semibold mt-2">
              {difference > 1 ? formattedDate : agoDate}
            </p>
            <h2 className="font-bold text-xl dark:text-darkAccent opacity-50 mt-2">
              {blog.title}
            </h2>
            <p className="blog_body_modal text-[#999] mt-4  max-h-[150px] ">
              {blog.body}
            </p>
            <p className="opacity-70 font-semibold mt-2">
              by: {blog.author.name}
            </p>
            <ReadMore />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default BlogModal;
