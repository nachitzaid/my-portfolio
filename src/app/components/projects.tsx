"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Gestion des Prestataires",
    description: "This Angular-based project allows management of service providers, including creating, editing, and deleting records. It uses Angular Material components for the frontend.",
    imageUrl: "/card-front.png",  // Changed to card-front.png
    tech: "Angular, TypeScript, Angular Material",
  },
  {
    title: "Gestion des Contacts",
    description: "A contact management system that allows the user to manage contacts in an easy-to-use interface. Built using Angular for the frontend and a Node.js backend.",
    imageUrl: "/card-front.png",
    tech: "Angular, Node.js",
  },
  {
    title: "Weather App (Python & Flask)",
    description: "A weather application built with Python and Flask that fetches weather data from a weather API and displays it to the user in an interactive way.",
    imageUrl: "/card-front.png",
    tech: "Python, Flask, Weather API",
  },
  {
    title: "Aura Hotel Management",
    description: "Aura is a hotel management system built in Java, allowing users to manage hotel rooms, bookings, and customer interactions effectively.",
    imageUrl: "/card-front.png",
    tech: "Java, Mongodb",
  },
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isStacked, setIsStacked] = useState(false)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const cards = document.querySelectorAll('.project-card')
    const handleClick = (card: Element) => {
      if (!isStacked) {
        card.classList.toggle('flipped')
      }
    }

    cards.forEach(card => {
      card.addEventListener('click', () => handleClick(card))
    })

    return () => {
      lenis.destroy()
      cards.forEach(card => {
        card.removeEventListener('click', () => handleClick(card))
      })
    }
  }, [isStacked])

  useGSAP(
    () => {
      const cards = cardRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)

      // Initial spread animation
      gsap.set(cards, {
        x: 0,
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotateY: 0,
      })

      // Create the spread animation
      const spreadTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "+=300",
          scrub: 1,
          onUpdate: (self) => {
            setIsStacked(self.progress === 1)
          }
        }
      })

      // Spread cards
      cards.forEach((card, index) => {
        const xPos = (index - (cards.length - 1) / 2) * 300
        
        spreadTl.to(card, {
          x: xPos,
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
        }, 0)
      })

      // Stack cards animation
      const stackTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: "bottom center",
          scrub: 1,
        }
      })

      // Stack cards
      cards.forEach((card) => {
        stackTl.to(card, {
          x: 0,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }, 0)
      })

    },
    { scope: container }
  )

  const setCardRef = (index: number) => (element: HTMLDivElement | null) => {
    cardRefs.current[index] = element
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-black min-h-screen" ref={container}>
      <div className="text-center mb-24">
        <p className="text-purple-500 text-sm mb-2">Special Collections</p>
        <h2 className="text-white text-4xl font-bold mb-4">Our range of unique Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Scroll to reveal the projects. Click on cards to see details.
        </p>
      </div>
      
      <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
        <div className="flex items-center justify-center gap-4 absolute transform-style-3d">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card w-64 h-96 relative group cursor-pointer"
              ref={setCardRef(index)}
            >
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
  <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-500">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.tech}</p>
      </div>
    </div>
  </div>
</div>
                  </div>
                  <div className="flip-card-back">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                      <p className="text-sm mb-4">{project.description}</p>
                      <p className="text-sm font-bold">Technologies:</p>
                      <p className="text-sm">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}