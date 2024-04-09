import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import RecentPostsCard from "@/components/RecentPostsCard";
import CategoriesCard from "@/components/CategoriesCard";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="p-6 max-w-[1400px] max-sm:p-2  min-h-screen w-full flex justify-center mx-auto  flex-col gap-24 max-md:gap-12 relative" >
      <div className=" w-full h-[520px] max-sm:h-[400px]  relative rounded-2xl overflow-hidden    ">
        <Image
          src="/blog.jpg"
          alt="blog"
          fill
          className="object-cover object-center "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-primary"></div>
        <div className="absolute z-2 bottom-0 left-0 text-white flex items-end justify-between gap-6  w-full pb-12 max-sm:pb-6 px-8 max-sm:px-4  ">
          <div className="space-y-4">
            <Badge className="text-base max-sm:text-sm font-normal bg-muted-foreground/80 ">
              Featured
            </Badge>
            <p className="text-4xl max-sm:text-3xl max-w-96 font-medium">
              
              How to use message apps to communicate
            </p>
          </div>
          <Link href="/blog/post-01" className="bg-white p-2 rounded-full text-primary">
            <MoveUpRight />
          </Link>
        </div>
      </div>

      <div className="flex gap-4 relative items-start  ">
      <article className="space-y-12 max-md:space-y-6 max-sm:hidden sticky top-0 py-6 ">
        <div className="bg-muted px-12 max-md:px-6 py-8 rounded-2xl space-y-6 ">
          <h4 className="text-2xl font-bold">Recent Posts</h4>
          <div className="flex flex-col gap-4">
            <RecentPostsCard />
            <RecentPostsCard />
            <RecentPostsCard />
            <RecentPostsCard />
            <RecentPostsCard />
            <RecentPostsCard />
          </div>
        </div>

        <div>
        <div className=" py-8 rounded-2xl space-y-6 ">
          <h4 className="text-2xl font-bold ">Categories</h4>
          <div className="flex flex-col gap-4">
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
          </div>
        </div>
        </div>
      </article>
        <div className="flex flex-wrap gap-8  flex-1 max-lg:justify-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        
      </div>
    </main>
  );
}
