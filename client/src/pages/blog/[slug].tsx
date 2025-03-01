import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Facebook, Linkedin, Twitter, Tag, ChevronLeft } from "lucide-react";
import type { Blog } from "@shared/schema";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: blog, isLoading } = useQuery<Blog>({
    queryKey: [`/api/blogs/${slug}`],
  });

  const { data: relatedBlogs } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    select: (blogs) =>
      blogs
        .filter((b) => b.slug !== slug)
        .slice(0, 3),
  });

  if (isLoading) {
    return (
      <div className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg mb-8" />
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="container mx-auto px-4 max-w-4xl"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={fadeIn} className="aspect-[2/1] relative rounded-lg overflow-hidden mb-8">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div variants={fadeIn} className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={blog.authorImage} alt={blog.author} />
                <AvatarFallback>{blog.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{blog.author}</div>
                <div className="text-sm text-gray-500">{blog.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              {blog.readingTime}
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, '_blank')}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Tweet
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.linkedin.com/shareArticle?url=${shareUrl}`, '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Post
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="prose prose-lg max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {relatedBlogs && relatedBlogs.length > 0 && (
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                        <img
                          src={relatedBlog.coverImage}
                          alt={relatedBlog.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedBlog.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{relatedBlog.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}