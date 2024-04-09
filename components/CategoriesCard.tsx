import Image from "next/image";

export default function CategoriesCard(){

  return (
    <div className="w-full h-12 relative rounded-2xl overflow-hidden">
      <Image src="/blog.jpg" fill alt="Category" className="object-cover object-center" />
      <div className="absolute top-0 left-0 w-full h-full bg-primary/30 flex justify-center items-center text-white font-semibold ">Culture</div>
    </div>
  )
}