import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import AddCommentForm from "./AddCommentForm";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Heart } from "lucide-react";
import CommentComponent from "./CommentComponent";
import CommentContainer from "./CommentContainer";

export function Comments() {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle>Comments</SheetTitle>
        <SheetDescription>Write a thoughtful comment</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb"
              className="object-cover object-center"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Laura Clugston</p>
        </div>

        <AddCommentForm />
      </div>
      <Separator className="my-6" />
      <div id="comments" className="space-y-6">
        <CommentContainer />
        <CommentContainer />
        <CommentContainer />
      </div>
    </SheetContent>
  );
}
