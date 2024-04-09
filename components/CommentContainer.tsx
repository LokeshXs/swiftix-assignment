import { Separator } from "@/components/ui/separator";
import CommentComponent from "./CommentComponent";

export default function CommentContainer(){

  return (
    <div>
     
       <CommentComponent authorName="Lokesh" authorImage="https://lh3.googleusercontent.com/a/ACg8ocJ1TtVyIg0w5Uu_IAw676YzmT3BrKmzRQZ11SPDdbfWpZH2FbVx=s96-c-rg-br100" content="Greate read 😀" />
      <CommentComponent authorName="Laura Clugston" authorImage="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb" content="Appreciate it 🐧" isReply />

      <Separator className="mt-6" />
    </div>
  )
}