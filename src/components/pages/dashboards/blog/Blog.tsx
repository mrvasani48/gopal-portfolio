import { Icon } from "@iconify/react";
import BlogModal from "components/common/modal/BlogModal";
import CommonModal from "components/common/modal/CommonModal";
import { BLOG_DATA } from "utils/constant";

const Blog = () => {
  const { title, description, blogContent } = BLOG_DATA;

  return (
    <div className="blog-container" id="blog">
      {/* Header Section */}
      <div className="mt-16">
        <p className="text-sm text-center text-[var(--mantine-color-theme-7)]">
          {description}
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          {title}
        </h2>
      </div>

      {/* Blog Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-14">
        {blogContent.map((blog) => (
          <CommonModal
            key={blog.id}
            title={blog.title}
            size="70%"
            modalContent={<BlogModal blog={blog} />}
            modalChildren={
              <div
                className="group p-10 rounded-xl shadow-2xl shadow-dark-500"
                key={blog.id}
              >
                {/* Blog Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.altText}
                    className="rounded-xl group-hover:scale-125"
                  />
                </div>

                {/* Blog Details */}
                <div className="flex justify-between items-center pt-5">
                  <p className="text-sm text-[var(--mantine-color-theme-7)]">
                    {blog.category}
                  </p>
                  <p className="flex gap-1 items-center text-sm">
                    <Icon icon="material-symbols:schedule-outline" />
                    {blog.readTime}
                  </p>
                </div>

                {/* Blog Title and Description */}
                <p className="text-gray-300 text-xl text-start pt-5 group-hover:text-[var(--mantine-color-theme-7)]">
                  {blog.title}
                </p>
                <p className="text-gray-400 text-sm pt-3 text-left group-hover:text-[var(--mantine-color-theme-7)]">
                  {blog.description}
                  <span className="group-hover:visible invisible  text-sm text-[var(--mantine-color-theme-7)]">
                    <Icon
                      icon="material-symbols:arrow-outward"
                      className="inline"
                    />
                  </span>
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
