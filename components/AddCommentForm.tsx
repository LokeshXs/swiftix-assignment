"use client";

import { Button } from "./ui/button";
import { SheetClose, SheetFooter } from "./ui/sheet";
import { Textarea } from "./ui/textarea";


export default function AddCommentForm(){

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert("Feature not implemented")
    }} className="space-y-4">
    <Textarea name="comment" placeholder="Type your message here." />
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit" className="rounded-full">Comment</Button>
      </SheetClose>
    </SheetFooter>
  </form>
  )
}