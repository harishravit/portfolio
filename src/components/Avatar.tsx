interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallBack: string;
}
export default function Avatar({
  fallBack,
  className,
  ...prop
}: AvatarProps & { className?: string }) {
  return (
    <img
      className={`size-12 object-cover rounded-full ${className}`}
      alt={fallBack}
      {...prop}
    />
  );
}
