import Link from "next/link";

export default function RecentPostsCard() {
  return (
    <Link href="/blog/post-01 ">
      <div className="flex flex-col  gap-2 bg-muted px-12 py-2 rounded-2xl">
      
          <h5 className="font-semibold max-w-[240px] max-lg:max-w-[400px] text-start break-words">
            New capabilities to make managing spend a breeze
          </h5>
          <p className="text-sm text-muted-foreground">
            Food Travel - Nov 17, 2024
          </p>
        
      </div>
    </Link>
  );
}
