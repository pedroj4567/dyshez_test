import { FaPlus } from "react-icons/fa";
import GalleryThumbnail from "./GalleryThumbail";

export default function GalleryBar({
  images,
  selectedImage,
  onImageSelect,
  onImageDelete,
  onUploadClick,
  fileInputRef,
  onImageUpload,
}) {
  return (
    <div className="flex-1 h-full p-6 flex flex-col">
      <div
        className="flex flex-wrap items-center gap-4 overflow-y-auto"
        style={{ maxHeight: "260px" }}
      >
        <div
          className="w-[120px] h-[120px] border rounded-md flex items-center justify-center cursor-pointer bg-white hover:bg-gray-50 transition"
          onClick={onUploadClick}
        >
          <FaPlus className="text-gray-500 text-2xl" />
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            ref={fileInputRef}
            onChange={onImageUpload}
          />
        </div>
        {images.map((img, idx) => (
          <GalleryThumbnail
            key={idx}
            img={img}
            isActive={selectedImage === img}
            onSelect={() => onImageSelect(img)}
            onDelete={() => onImageDelete(img)}
          />
        ))}
      </div>
    </div>
  );
}
