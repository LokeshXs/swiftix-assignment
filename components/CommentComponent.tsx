import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import clsx from "clsx";

type Props = {
  isReply? :boolean,
  content :string,
  authorName: string,
  isAuthor? :boolean,
  authorImage:string,
}

export default function CommentComponent({
  isReply = false,
  content,
  authorName,
  isAuthor = false,
  authorImage,
}: Props) {
  return (
    <div
      className={clsx("space-y-2", {
        "ml-4": isReply,
      })}
    >
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={authorImage}
            className="object-cover object-center"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p>{authorName} </p>
          <p className="text-muted-foreground text-sm">12 hrs ago</p>
        </div>
      </div>

      <p>{content}</p>

      <div>
        <Button
          size="icon"
          variant="ghost"
          className="bg-none hover:bg-transparent"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
