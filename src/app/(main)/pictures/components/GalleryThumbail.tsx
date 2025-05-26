import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";
import { ImageType } from "../page";

type GalleryThumbnailProps = {
  img: ImageType;
  isActive: boolean;
  onSelect: () => void;
  onDelete: () => void;
};

export default function GalleryThumbnail({
  img,
  isActive,
  onSelect,
  onDelete,
}: GalleryThumbnailProps) {
  return (
    <div
      className={`relative w-[120px] h-[120px] rounded-md overflow-hidden border-2 transition flex-shrink-0 cursor-pointer
        ${
          isActive
            ? "border-pink-500 shadow-lg"
            : "border-transparent hover:border-gray-300"
        }
      `}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-label="Seleccionar imagen"
    >
      <Image
        src={img.url}
        width={250}
        height={250}
        alt="miniatura"
        className="object-cover w-full h-full"
        draggable={false}
      />
      <button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity z-10"
        style={{ pointerEvents: "auto" }}
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        title="Eliminar"
        tabIndex={-1}
        type="button"
      >
        <span className="bg-white p-2 border-2 shadow-lg rounded-full flex items-center justify-center">
          <FaRegTrashCan size={32} className="text-black" />
        </span>
      </button>
    </div>
  );
}
