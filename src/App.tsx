function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-mono bg-foreground text-secondary">
      <h1 className="text-3xl font-bold mb-8">Your Name / Portfolio Title</h1>

      <div className="flex flex-col items-center space-y-6 text-center">
        <section id="about" className="max-w-prose">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-muted-foreground">
            Welcome to my portfolio! Here you can learn more about my skills and experience.
            (Replace this with your actual introduction).
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
