"use client";
import React, { useRef, useState } from "react";
import { GalleryBar, ImagePreview } from "./components";

export default function Page() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => {
      const updated = [...prev, ...newImages];
      if (!selectedImage && updated.length > 0) setSelectedImage(updated[0]);
      return updated;
    });
  };

  const handleImageSelect = (img) => setSelectedImage(img);

  const handleImageDelete = (img) => {
    setImages((prev) => {
      const updated = prev.filter((i) => i !== img);
      if (selectedImage === img) setSelectedImage(updated[0] || null);
      return updated;
    });
  };

  const openFileDialog = () => fileInputRef.current.click();
  return (
    <div className="flex flex-col h-[100vh] w-full bg-white">
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
