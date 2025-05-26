import Image from "next/image";
import { ImageType } from "../page";

export default function ImagePreviews(
  { selectedImage }: { selectedImage: ImageType },
  className = ""
) {
  return (
    <div
      className={`w-1/2 bg-gray-100 p-8 flex justify-center items-center h-full ${className}`}
    >
      {selectedImage ? (
        <div className="w-full max-w-[500px] mx-auto flex flex-col items-center gap-12">
          {/* Vista previa 1:1 */}
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2">PREVIEW 1:1</span>
            <div className="w-[180px] h-[180px] bg-white rounded-md shadow overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage.url!}
                alt="preview-1-1"
                className="object-cover w-full h-full"
                height={100}
                width={100}
              />
            </div>
          </div>
          {/* Vista previa 16:9 */}
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2">PREVIEW 16:9</span>
            <div className="w-[288px] h-[162px] bg-white rounded-md shadow overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage.url!}
                alt="preview-16-9"
                className="object-cover w-full h-full"
                height={100}
                width={100}
              />
            </div>
          </div>
          {/* Vista previa 9:16 */}
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2">PREVIEW 9:16</span>
            <div className="w-[101px] h-[180px] bg-white rounded-md shadow overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage.url!}
                alt="preview-9-16"
                className="object-cover w-full h-full"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400 text-lg">
          Selecciona una imagen para previsualizar
        </div>
      )}
    </div>
  );
}
