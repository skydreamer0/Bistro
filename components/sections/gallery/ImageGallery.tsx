import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { fadeIn, staggerContainer } from '@/lib/utils/animations'

interface GalleryImage {
  id: string
  src: string
  alt: string
}

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4"
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          variants={fadeIn}
          className="relative aspect-square"
          onClick={() => setSelectedImage(image.src)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg hover:scale-105 transition-transform"
          />
        </motion.div>
      ))}
      
      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </motion.div>
  )
} 