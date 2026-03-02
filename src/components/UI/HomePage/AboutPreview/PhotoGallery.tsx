"use client";

import { useState, useEffect, useRef } from "react";
import {
  FiCamera,
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
  location?: string;
  date?: string;
}

interface PhotoGalleryProps {
  abdullahImages?: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState<Photo[]>([]);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  // Sample images data if none provided
  const defaultImages: Photo[] = [
    {
      id: 1,
      url: "/images/field1.jpg",
      category: "Field Work",
      title: "Pump Station Inspection",
      location: "Dhaka",
      date: "2023",
    },
    {
      id: 2,
      url: "/images/field2.jpg",
      category: "Field Work",
      title: "River Bank Protection",
      location: "Chattogram",
      date: "2023",
    },
    {
      id: 3,
      url: "/images/office1.jpg",
      category: "Office",
      title: "Team Meeting",
      location: "BWDB Office",
      date: "2024",
    },
    {
      id: 4,
      url: "/images/office2.jpg",
      category: "Office",
      title: "Project Planning",
      location: "Dhaka",
      date: "2024",
    },
    {
      id: 5,
      url: "/images/family1.jpg",
      category: "Family",
      title: "Eid Celebration",
      location: "Home",
      date: "2023",
    },
    {
      id: 6,
      url: "/images/family2.jpg",
      category: "Family",
      title: "Family Gathering",
      location: "Dhaka",
      date: "2023",
    },
    {
      id: 7,
      url: "/images/site1.jpg",
      category: "Site Visit",
      title: "Dam Construction",
      location: "Sylhet",
      date: "2024",
    },
    {
      id: 8,
      url: "/images/site2.jpg",
      category: "Site Visit",
      title: "Flood Control Project",
      location: "Rajshahi",
      date: "2023",
    },
    {
      id: 9,
      url: "/images/field3.jpg",
      category: "Field Work",
      title: "Water Quality Testing",
      location: "Barisal",
      date: "2024",
    },
    {
      id: 10,
      url: "/images/office3.jpg",
      category: "Office",
      title: "Presentation",
      location: "BWDB",
      date: "2024",
    },
    {
      id: 11,
      url: "/images/family3.jpg",
      category: "Family",
      title: "Vacation",
      location: "Cox's Bazar",
      date: "2023",
    },
    {
      id: 12,
      url: "/images/site3.jpg",
      category: "Site Visit",
      title: "Bridge Inspection",
      location: "Khulna",
      date: "2024",
    },
    {
      id: 13,
      url: "/images/field4.jpg",
      category: "Field Work",
      title: "Equipment Setup",
      location: "Mymensingh",
      date: "2023",
    },
    {
      id: 14,
      url: "/images/office4.jpg",
      category: "Office",
      title: "Training Session",
      location: "Dhaka",
      date: "2024",
    },
  ];

  const images = defaultImages;

  // Get unique categories
  const categories = ["All", ...new Set(images.map((img) => img.category))];

  // Filter images based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter((img) => img.category === selectedCategory),
      );
    }
  }, [selectedCategory, images]);

  const openModal = (image: Photo) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex((img) => img.id === image.id));
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => {
        const newIndex = prev > 0 ? prev - 1 : filteredImages.length - 1;
        setSelectedImage(filteredImages[newIndex]);
        return newIndex;
      });
    } else {
      setCurrentIndex((prev) => {
        const newIndex = prev < filteredImages.length - 1 ? prev + 1 : 0;
        setSelectedImage(filteredImages[newIndex]);
        return newIndex;
      });
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!selectedImage) return;
    const interval = setInterval(() => {
      navigateImage("next");
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedImage, currentIndex]);

  return (
    <div className="container py-28">
      {/* Header */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-800 mb-4">
            <FiCamera className="text-blue-400" />
            <span className="text-sm text-gray-300">Professional Gallery</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Moments with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Abdullah Al Luman
            </span>
          </h3>
          <p className="text-gray-400">
            A glimpse into professional journey and experiences
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full mb-4 px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <FiFilter className="text-blue-400" />
              Filter by Category
            </span>
            {showFilters ? <FiX /> : <FiFilter />}
          </button>

          {/* Category Buttons */}
          <div
            className={`flex flex-wrap gap-2 justify-center ${showFilters ? "block" : "hidden lg:flex"}`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowFilters(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-black"
                    : "bg-gray-900/60 text-gray-400 hover:text-white border border-gray-800 hover:border-blue-400"
                }`}
              >
                {category} (
                {category === "All"
                  ? images.length
                  : images.filter((img) => img.category === category).length}
                )
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-800 group-hover:border-transparent transition-all duration-500">
                <div className="relative w-full h-64 bg-gray-800">
                  {/* Image Placeholder - Replace with actual Image component when you have real images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mb-2">
                        <span className="text-3xl text-gray-600">
                          {image.category === "Field Work" && "🌾"}
                          {image.category === "Office" && "🏢"}
                          {image.category === "Family" && "👨‍👩‍👧‍👦"}
                          {image.category === "Site Visit" && "🏗️"}
                          {![
                            "Field Work",
                            "Office",
                            "Family",
                            "Site Visit",
                          ].includes(image.category) && "📸"}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 block">
                        {image.title}
                      </span>
                      <span className="text-[10px] text-gray-700">
                        {image.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {image.title}
                      </p>
                      <p className="text-gray-400 text-xs">{image.category}</p>
                      {image.location && (
                        <p className="text-gray-500 text-[10px]">
                          {image.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {categories
            .filter((c) => c !== "All")
            .map((category) => (
              <div key={category} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    category === "Field Work"
                      ? "bg-blue-400"
                      : category === "Office"
                        ? "bg-cyan-400"
                        : category === "Family"
                          ? "bg-green-400"
                          : category === "Site Visit"
                            ? "bg-purple-400"
                            : "bg-gray-400"
                  }`}
                ></div>
                <span className="text-xs text-gray-500">{category}</span>
              </div>
            ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          {filteredImages.length} professional moments capturing the journey at
          BWDB
        </p>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-20"
          >
            <FiX size={24} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-20 bg-black/50 rounded-full p-2"
          >
            <FiChevronLeft size={32} />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-20 bg-black/50 rounded-full p-2"
          >
            <FiChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl h-[60vh] mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-6xl text-gray-600">
                    {selectedImage.category === "Field Work" && "🌾"}
                    {selectedImage.category === "Office" && "🏢"}
                    {selectedImage.category === "Family" && "👨‍👩‍👧‍👦"}
                    {selectedImage.category === "Site Visit" && "🏗️"}
                  </span>
                </div>
                <h3 className="text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-400">{selectedImage.category}</p>
              </div>
            </div>
            {/* Replace with actual Image component when you have real images */}
            {/* <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              fill
              className="object-contain"
            /> */}
          </div>

          {/* Image Info */}
          <div className="text-center mb-4">
            <p className="text-white text-lg mb-1">{selectedImage.title}</p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>{selectedImage.category}</span>
              {selectedImage.location && (
                <>
                  <span>•</span>
                  <span>{selectedImage.location}</span>
                </>
              )}
              {selectedImage.date && (
                <>
                  <span>•</span>
                  <span>{selectedImage.date}</span>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="relative w-full max-w-4xl flex items-center px-4 py-2">
            <button
              onClick={() =>
                thumbnailRef.current?.scrollBy({
                  left: -150,
                  behavior: "smooth",
                })
              }
              className="absolute left-0 z-10 bg-gray-800/70 text-white p-2 rounded-full hover:bg-cyan-500 transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
            <div
              ref={thumbnailRef}
              className="flex w-full gap-3 overflow-x-auto scrollbar-hide px-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredImages.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => {
                    setSelectedImage(img);
                    setCurrentIndex(idx);
                  }}
                  className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage.id === img.id
                      ? "border-blue-500 scale-105"
                      : "border-transparent hover:border-blue-400/50"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-xl text-gray-600">
                      {img.category === "Field Work" && "🌾"}
                      {img.category === "Office" && "🏢"}
                      {img.category === "Family" && "👨‍👩‍👧‍👦"}
                      {img.category === "Site Visit" && "🏗️"}
                    </span>
                  </div>
                  {/* Replace with actual Image component when you have real images */}
                  {/* <Image src={img.url} alt={img.title} fill className="object-cover" /> */}
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                thumbnailRef.current?.scrollBy({
                  left: 150,
                  behavior: "smooth",
                })
              }
              className="absolute right-0 z-10 bg-gray-800/70 text-white p-2 rounded-full hover:bg-cyan-500 transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
