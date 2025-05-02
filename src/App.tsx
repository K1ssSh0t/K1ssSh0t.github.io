function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-mono bg-foreground text-secondary">
      <h1 className="text-3xl font-bold mb-8">Angel Omar Matias Velasquez/  Fullstack Developer</h1>

      <div className="flex flex-col items-center space-y-6 text-center">
        <section id="about" className="max-w-prose">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="">
            I am a passionate full-stack developer with experience in building web applications using modern technologies. I love coding and solving complex problems.
            My goal is to create efficient and user-friendly applications that make a difference.
            I am always eager to learn new technologies and improve my skills. I enjoy collaborating with others and sharing knowledge.
            In my free time, I like to work on personal projects, contribute to open-source, and explore new programming languages.
            I believe in the power of technology to change lives and I am excited to be part of this journey.
            I am currently looking for new opportunities to grow and contribute to exciting projects. If you are interested in collaborating or have any questions, feel free to reach out!
            I am always open to new ideas and challenges. Let's connect and create something amazing together!
          </p>
        </section>

        <section id="projects" className="max-w-prose">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-muted-foreground">
            Showcase your projects here. You could use cards or a list format.
          </p>
        </section>

        <section id="contact" className="max-w-prose">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-muted-foreground">
            Add your contact information or a contact form here.
          </p>
        </section>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </div>
  )
}

export default App
