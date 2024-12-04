"use client"

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

interface TeamProps {
  dictionary: {
    about: {
      team: {
        title: string
        description: string
        members: Array<{
          name: string
          role: string
          bio: string
        }>
      }
    }
  }
}

export function Team({ dictionary }: TeamProps) {
  const memberImages = [
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?fit=crop&w=800&h=800",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&h=800"
  ]

  return (
    <section className="py-12" data-testid="team-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">{dictionary.about.team.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {dictionary.about.team.description}
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {dictionary.about.team.members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-6">
                    <Avatar className="w-full h-full border-4 border-background shadow-lg">
                      <AvatarImage 
                        src={memberImages[index]} 
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-4">{member.role}</p>
                  <p className="text-center text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
