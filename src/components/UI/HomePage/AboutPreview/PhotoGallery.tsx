"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
  location?: string;
  date?: string;
}

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate Photos
  const generatePhotos = (): Photo[] => {
    let id = 1;

    const daPhotos = Array.from({ length: 25 }, (_, i) => ({
      id: id++,
      url: `/images/da${i + 1}.jpg`,
      category: "Dature",
      title: `Dature Photo ${i + 1}`,
      location: "Dhaka",
      date: "2024",
    }));

    const familyPhotos = Array.from({ length: 30 }, (_, i) => ({
      id: id++,
      url: `/images/f${i + 1}.jpg`,
      category: "Family",
      title: `Family Photo ${i + 1}`,
      location: "Home",
      date: "2023",
    }));

    const lumanPhotos = Array.from({ length: 30 }, (_, i) => ({
      id: id++,
      url: `/images/L${i + 1}.jpg`,
      category: "Luman",
      title: `Luman Photo ${i + 1}`,
      location: "Bangladesh",
      date: "2024",
    }));

    return [...daPhotos, ...familyPhotos, ...lumanPhotos];
  };

  const images = generatePhotos();

  const categories = ["All", ...new Set(images.map((i) => i.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter((img) => img.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  const openModal = (image: Photo) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex((i) => i.id === image.id));
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (dir: "prev" | "next") => {
    let newIndex =
      dir === "prev"
        ? currentIndex > 0
          ? currentIndex - 1
          : filteredImages.length - 1
        : currentIndex < filteredImages.length - 1
          ? currentIndex + 1
          : 0;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <FiCamera className="mx-auto text-3xl text-blue-400 mb-2" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Moments with Abdullah Al Luman
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedCategory === cat
                ? "bg-blue-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-blue-400 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => openModal(img)}
            className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={img.url}
              alt={img.title}
              width={800}
              height={600}
              quality={100}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white"
          >
            <FiX size={30} />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-5 text-white"
          >
            <FiChevronLeft size={40} />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-5 text-white"
          >
            <FiChevronRight size={40} />
          </button>

          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
