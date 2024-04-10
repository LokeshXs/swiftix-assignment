import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { allPosts, Post } from "contentlayer/generated";
import Head from "next/head";
import Link from "next/link";
import { Mdx } from "@/components/mdx-components";
import RecentPostsCard from "@/components/RecentPostsCard";
import CategoriesCard from "@/components/CategoriesCard";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Comments } from "@/components/Comments";
import { Heart, MessageCircle } from "lucide-react";

export default function Blog({ params }: { params: { slug: string } }) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  )!;

  return (
    <main className="p-6 max-w-[1400px] max-sm:p-2  min-h-screen w-full mx-auto  ">
      <header className="py-12 px-6 max-sm:px-2 max-sm:py-6 bg-muted flex max-lg:flex-col items-center justify-between gap-12 rounded-2xl">
        <div className="space-y-6 max-sm:space-y-4 ">
          <p className="text-muted-foreground">April 3, 2024</p>
          <h1 className="text-4xl max-sm:text-3xl max-w-[72%] max-md:max-w-[90%] max-sm:w-full leading-tight font-medium">
            Q1 2024 Ramp Roundup: New capabilities to make managing spend a
            breeze
          </h1>
          <div className="flex items-center gap-4">
            <Avatar className="w-14 h-14">
              <AvatarImage
                src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb"
                className="object-cover object-center"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p>Laura Clugston</p>
              <p className="text-muted-foreground">
                Senior Product Manager, Ramp
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/blog.jpg"
            width={1200}
            height={1200}
            alt="Blog Title"
            className="rounded-2xl"
          />
        </div>
      </header>

      <section className="flex max-lg:flex-col gap-12 relative items-start mt-24 max-sm:mt-12 ">
        <div className="flex-1">
          <Mdx code={post.body.code} />

          <div className="flex gap-4 items-center mt-12 max-sm:mt-6">
            <Button
              size="icon"
              variant="ghost"
              className="bg-none hover:bg-transparent"
            >
              <Heart />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="bg-none hover:bg-transparent"
                >
                  <MessageCircle />
                </Button>
              </SheetTrigger>

              <Comments />
            </Sheet>
          </div>
        </div>
        <article className="space-y-12 max-lg:space-y-4 max-md:space-y-6 max-sm:hidden sticky top-0 py-6 max-lg:flex max-xl:flex-col max-sm:items-center max-lg:w-full ">
          <div className=" py-8  flex flex-col gap-4 items-center ">
            <Avatar className="w-40 h-40">
              <AvatarImage
                src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb"
                className="object-cover object-center"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-medium">Laura Clugston</p>
            <p className="max-w-60 text-center text-muted-foreground ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, eos.
            </p>
          </div>

          <div className=" px-4 max-md:px-6 py-8 rounded-2xl space-y-6 ">
            <h4 className="text-2xl font-bold">Related Posts</h4>
            <div className="flex flex-col gap-4">
              <RecentPostsCard />
              <RecentPostsCard />
              <RecentPostsCard />
              <RecentPostsCard />
              <RecentPostsCard />
              <RecentPostsCard />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
