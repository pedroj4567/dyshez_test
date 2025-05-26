"use client";
import React, { useEffect, useRef, useState } from "react";
import { GalleryBar, ImagePreview } from "./components";
import { useRouter } from "next/navigation";
import { useAuthSession } from "@/hooks/useAuthSession";
import { Spinner } from "@/ui/components";
import { PicturesServices } from "@/lib/supabase/services";
import { supabase } from "@/lib/supabase/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ImageType = {
  url: string;
  filePath: string;
};

export default function Page() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const { loading: authLoading, session } = useAuthSession(true, "/auth");

  useEffect(() => {
    if (!session) return;

    const loadImages = async () => {
      try {
        setIsLoading(true);
        const files = await PicturesServices.getPictures("user-uploads");

        const imageUrls = await Promise.all(
          files.map(async (filePath) => {
            const {
              data: { publicUrl },
            } = supabase.storage
              .from(PicturesServices.BUCKET_NAME)
              .getPublicUrl(filePath);
            return { url: publicUrl, filePath };
          })
        );

        setImages(imageUrls);
        if (imageUrls.length > 0) {
          setSelectedImage(imageUrls[0]);
        }
        toast.success("Imágenes cargadas correctamente");
      } catch (error) {
        console.error("Error loading images:", error);
        toast.error("Error al cargar las imágenes");
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [session]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;

    const files: File[] = Array.from(event.target.files);
    const uploadedImages: ImageType[] = [];

    try {
      setIsLoading(true);
      for (const file of files) {
        const filePath = await PicturesServices.uploadPictures(
          file,
          "user-uploads"
        );
        const {
          data: { publicUrl },
        } = supabase.storage
          .from(PicturesServices.BUCKET_NAME)
          .getPublicUrl(filePath);
        uploadedImages.push({ url: publicUrl, filePath });
      }

      setImages((prev) => {
        const updated = [...prev, ...uploadedImages];
        if (!selectedImage && updated.length > 0) {
          setSelectedImage(updated[0]);
        }
        return updated;
      });
      toast.success("Imágenes subidas correctamente");
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Error al subir las imágenes");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageSelect = (img: ImageType) => setSelectedImage(img);

  const handleImageDelete = async (img: ImageType) => {
    try {
      setIsLoading(true);
      await PicturesServices.deletePictures(img.filePath);
      setImages((prev) => {
        const updated = prev.filter((i) => i.filePath !== img.filePath);
        if (selectedImage?.filePath === img.filePath) {
          setSelectedImage(updated[0] || null);
        }
        return updated;
      });
    } catch (error) {
      console.error("Error deleting image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    if (!authLoading && !session) {
      router.push("/auth");
    }
  }, [authLoading, session, router]);

  if (authLoading || !session || isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col h-[100vh] w-full bg-white">
      <ToastContainer />
      <div className="pt-6 pb-4 px-6">
        <h2 className="font-bold text-3xl">Pictures</h2>
      </div>
      <div className="flex flex-1 min-h-0">
        <GalleryBar
          images={images}
          selectedImage={selectedImage}
          onImageSelect={handleImageSelect}
          onImageDelete={handleImageDelete}
          onUploadClick={openFileDialog}
          fileInputRef={fileInputRef}
          onImageUpload={handleImageUpload}
        />
        <ImagePreview selectedImage={selectedImage} />
      </div>
    </div>
  );
}
