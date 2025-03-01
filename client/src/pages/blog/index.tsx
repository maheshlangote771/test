import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Clock, Search, Tag, User } from "lucide-react";
import type { Blog } from "@shared/schema";
import { useState } from "react";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  // const { data: blogs, isLoading } = useQuery<Blog[]>({
  //   queryKey: ["/api/blogs"],
  // });
  const { data: blogs, isLoading, error } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    queryFn: async () => {
      const response = await fetch("/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return response.json();
    }
  });
  

  const filteredBlogs = blogs?.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
            Latest Insights
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-12">
            Discover the latest trends, insights, and updates in technology and education.
          </motion.p>

          <motion.div variants={fadeIn} className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          {isLoading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-48 bg-gray-200 rounded-lg mb-4" />
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <motion.div variants={staggerChildren} className="space-y-8">
              {filteredBlogs?.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <Card className="cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="aspect-[16/9] relative">
                            <img
                              src={blog.coverImage}
                              alt={blog.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {blog.readingTime}
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {blog.author}
                              </div>
                            </div>
                            <h2 className="text-2xl font-semibold mb-3 line-clamp-2">
                              {blog.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {blog.summary}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {blog.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
