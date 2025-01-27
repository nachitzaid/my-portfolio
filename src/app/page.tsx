
import Header from "./components/header";
import Intro from "./components/into";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
    <main className="container mx-auto px-4 py-8">
     <Header></Header>
      <div className="container mx-auto px-4 py-8">
        <Intro></Intro>
        <Projects></Projects>
        
      </div>
    </main>
    </div>
  )
  }