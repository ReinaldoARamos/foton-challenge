/* eslint-disable @next/next/no-img-element */
interface AvatarProps {
  src: string;

}
export function Avatar({ src }: AvatarProps) {
  return (
    <div className="overflow-hidden rounded-full border  border-gray-950">

      <img
        src={src}
        alt=""
        className="h-10 w-10 rounded-full"
      />
    </div>
  );
}
