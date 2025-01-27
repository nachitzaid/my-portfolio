import Image from "next/image"

export default function Intro() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <h2 className="text-4xl font-bold mb-4">Zaid NACHIT</h2>
          <p className="text-xl text-gray-600 mb-8">Web Developer & Data Scientist</p>
          <p className="text-gray-400 text-lg max-w-xl">
            I am a versatile professional with expertise in web development, data science, and design. With a strong foundation in Decision Informatics and Data Science, I specialize in building elegant and functional websites while leveraging advanced data analysis techniques to solve complex problems and extract valuable insights.
            My skills extend beyond coding—I have a keen eye for design, ensuring that my projects are not only technically robust but also visually compelling. Driven by a passion for technology and innovation, I am constantly exploring new tools and methodologies to enhance my work.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Profile Photo"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
        </div>
      </div>
    </section>
  )
}
