import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/utils/animations'
import Image from 'next/image'
import { type Dictionary } from '@/types/dictionary'

interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
  image?: string
}

interface TestimonialsSectionProps {
  dictionary: Dictionary
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '陳大衛',
    content: '非常棒的用餐體驗！食物美味，服務親切。',
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: '2',
    name: '王小美',
    content: '環境優雅，是約會的好地方。',
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: '3',
    name: '李大華',
    content: '創新的菜色搭配，令人驚艷。',
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
  }
]

export default function TestimonialsSection({ dictionary }: TestimonialsSectionProps) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2 className="text-3xl font-bold">{dictionary.testimonials.title}</h2>
          <p className="text-muted-foreground mt-2">{dictionary.testimonials.description}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {testimonial.image && (
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 