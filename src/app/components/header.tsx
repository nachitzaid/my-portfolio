import Link from "next/link"
import { Button } from "./button"


export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
    <nav className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-purple-600 rounded-full" />
        <span className="text-xl font-bold">My Portfolio</span>
      </div>

      <div className="hidden md:flex items-center space-x-1 ">
        <Button variant="ghost" className="text-white hover:text-purple-400">
          About
        </Button>
        <Button variant="ghost" className="text-white hover:text-purple-400">
          projects
        </Button>
        <Button variant="ghost" className="text-white hover:text-purple-400">
          Competence
        </Button>
        <Button variant="ghost" className="text-white hover:text-purple-400">
          contact me
        </Button>
      </div>
    </nav>
  </header>
  )
}

