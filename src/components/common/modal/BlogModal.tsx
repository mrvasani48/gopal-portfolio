import { ScrollArea } from "@mantine/core";

const BlogModal = ({ blog }) => {
  return (
    <div className="blog-modal-content p-6 bg-gray-900 text-white rounded-xl shadow-xl">
      <ScrollArea style={{ height: "70vh" }}>
        {/* Image Section */}
        <div className="relative">
          <img
            src={blog.image}
            alt={blog.altText}
            className="rounded-xl w-full h-[300px] object-cover mb-6"
          />
          {/* Overlay Text */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black opacity-40 rounded-xl"></div>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-semibold text-center mb-4">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-400 text-center mb-6">
          {blog.description}
        </p>

        {/* Blog Content */}
        <div className="space-y-4">
          {blog.content.map((content, index) => (
            <p key={index} className="text-md text-gray-300 leading-relaxed">
              {content}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BlogModal;
