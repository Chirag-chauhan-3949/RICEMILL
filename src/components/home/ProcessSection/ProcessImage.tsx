interface ProcessImageProps {
  imageUrl: string;
  altText: string;
}

export default function ProcessImage({ imageUrl, altText }: ProcessImageProps) {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={altText}
        className="rounded-lg shadow-lg object-cover w-full h-[400px]"
      />
      <div className="absolute inset-0 bg-amber-600 opacity-10 rounded-lg"></div>
    </div>
  );
}