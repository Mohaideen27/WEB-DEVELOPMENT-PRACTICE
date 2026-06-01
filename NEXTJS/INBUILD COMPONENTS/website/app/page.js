import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5 size-80 bg-red-50 relative">
      <div>I am home</div>
      <Image
        className="container mx-auto object-contain"
        fill={true}
        src="https://res.cloudinary.com/cloudinary-marketing/images/v1649726043/Web_Assets/blog/Lazy-Loading-React_2209601c04/Lazy-Loading-React_2209601c04-png?_i=AA"
        alt="Lazy Loading"
      />
    </div>
  );
}
