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

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [filteredImages, setFilteredImages] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Luman"); // default category
  const [isLoading, setIsLoading] = useState(false); // loading state

  // Generate Photos
  const generatePhotos = (): Photo[] => {
    let id = 1;

    const daPhotos = Array.from({ length: 26 }, (_, i) => ({
      id: id++,
      url: `/images/da${i + 1}.jpg`,
      category: "Daughter",
      title: `Daughter Photo ${i + 1}`,
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

    const lumanPhotos = Array.from({ length: 24 }, (_, i) => ({
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

  const categories = ["Luman", "Daughter", "Family"]; // only these 3

  // Filter images by category with loading effect
  useEffect(() => {
    const filterImages = async () => {
      setIsLoading(true); // Start loading

      // Simulate 1 second loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFilteredImages(
        images.filter((img) => img.category === selectedCategory),
      );

      setIsLoading(false); // End loading
    };

    filterImages();
  }, [selectedCategory]);

  // Open modal
  const openModal = (image: Photo) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex((i) => i.id === image.id));
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Navigate modal
  const navigateImage = (dir: "prev" | "next") => {
    const length = filteredImages.length;
    let newIndex =
      dir === "prev"
        ? currentIndex > 0
          ? currentIndex - 1
          : length - 1
        : currentIndex < length - 1
          ? currentIndex + 1
          : 0;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="relative h-96 rounded-xl overflow-hidden bg-gray-800 animate-pulse"
        >
          <div className="w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header - Updated to match About Me section style */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl rounded-full border border-gray-800 mb-4">
          <FiCamera className="text-blue-400" />
          <span className="text-sm text-gray-300">Photo Gallery</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Moments with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Abdullah Al Luman
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Capturing precious memories and special moments
        </p>
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

      {/* Image Grid with Loading State */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          filteredImages.map((img) => (
            <div
              key={img.id}
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

              {/* Hover overlay with View Details */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button
                  onClick={() => openModal(img)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
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
