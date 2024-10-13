import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link"; // Import Link

export default function Home() {
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

  return (
    <div className="main-container">
      <Header />
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card swirl-in-bck">
            <Image src={blog.image} alt={blog.title} width={550} height={150} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-text">{blog.text}</p>
            <Link href={`/blog/${blog.id}`}>
              <button className="read-more">Read More</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
