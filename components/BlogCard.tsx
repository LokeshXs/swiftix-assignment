import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function BlogCard() {
  return (
    <Link href="/blog/post-01">
      <div className="p-2 flex flex-col gap-4 justify-center max-w-[320px] max-lg:max-w-full hover:bg-muted rounded-2xl   ">
        <div className="w-[300px] max-lg:w-full h-[220px] overflow-hidden rounded-2xl relative   ">
          <Image
            src="/thumbnail.jpg"
            fill
            alt="thumbnail"
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-1  ">
          <p className="text-lg font-bold">Creating a better CX community</p>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            quaerat!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">
            Lana Steiner <span>/ 18 Jan 2024</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
