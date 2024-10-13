import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Define all the blog data here
  const blogs = [
    { id: 1, title: "Blog Post 1", text: "This is the first blog post.", image: "/blog1.jpg" },
    { id: 2, title: "Blog Post 2", text: "This is the second blog post.", image: "/blog2.jpg" },
    { id: 3, title: "Blog Post 3", text: "This is the third blog post.", image: "/blog3.jpg" },
    { id: 4, title: "Blog Post 4", text: "This is the fourth blog post.", image: "/blog4.jpg" },
    { id: 5, title: "Blog Post 5", text: "This is the fifth blog post.", image: "/blog5.jpg" },
    { id: 6, title: "Blog Post 6", text: "This is the sixth blog post.", image: "/blog6.jpg" },
    { id: 7, title: "Blog Post 7", text: "This is the seventh blog post.", image: "/blog7.jpg" },
    { id: 8, title: "Blog Post 8", text: "This is the eighth blog post.", image: "/blog8.jpg" },
    { id: 9, title: "Blog Post 9", text: "This is the ninth blog post.", image: "/blog9.jpg" },
    { id: 10, title: "Blog Post 10", text: "This is the tenth blog post.", image: "/blog10.jpg" },
  ];

  // Finding the blog post by ID
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <div>Loading...</div>; // Handling loading state or no blog found

  return (
    <div className="blog-post-container">
      <Header />
      <div className="blog-post">
        <Image src={blog.image} alt={blog.title} width={600} height={400} />
        <h2>{blog.title}</h2>
        <p>{blog.text}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;