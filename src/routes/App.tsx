import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-mono bg-foreground text-secondary">
      <h1 className="text-3xl font-bold mb-8">Angel Omar Matias Velasquez / Fullstack Developer</h1>

      <div className="flex flex-col items-center space-y-6 text-center">
        <section id="about" className="max-w-prose w-full">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I am a passionate full-stack developer with experience in building web applications using modern technologies.
                My main stack includes{" "}
                <span className="font-semibold text-primary">
                  Next.js, React, Tailwind CSS, JavaScript, TypeScript
                </span>{" "}
                and both frontend & backend development.
                I love coding, solving complex problems, and building efficient, user-friendly applications.
                <br /><br />
                I am always eager to learn new technologies and improve my skills. I enjoy collaborating with others, sharing knowledge, and contributing to open-source.
                <br /><br />
                Currently, I am looking for new opportunities to grow and contribute to exciting projects. If you are interested in collaborating or have any questions, feel free to reach out!
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge>Next.js</Badge>
                <Badge>React</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Frontend</Badge>
                <Badge>Backend</Badge>
                <Badge>Full Stack</Badge>
                <Badge>Web Development</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Supabase</Badge>
                <Badge>Node.js</Badge>
                <Badge>React Native</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="max-w-prose w-full">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle>
                        <a href="https://github.com/K1ssSh0t/full-stack-todos-app" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                          Full Stack Todos App
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Todos App built with Next.js 13 and Supabase. Full-stack project demonstrating authentication, CRUD, and modern UI.
                      </p>
                    </CardContent>
                  </Card>
                </li>
                <li>
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle>
                        <a href="https://github.com/K1ssSh0t/next13-supabase-auth-template" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                          Next13 Supabase Auth Template
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Boilerplate for authentication using Next.js 13 and Supabase, ready to kickstart new projects.
                      </p>
                    </CardContent>
                  </Card>
                </li>
                <li>
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle>
                        <a href="https://github.com/K1ssSh0t/proyecto-gimnasio" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                          Proyecto Gimnasio
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Gym management project using TypeScript and modern web technologies.
                      </p>
                    </CardContent>
                  </Card>
                </li>
                {/* ...puedes agregar más proyectos aquí... */}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="max-w-prose w-full">
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Feel free to reach out via email or connect with me on GitHub!
              </p>
              <div className="flex flex-col items-center space-y-2">
                <Button asChild variant="link" className="p-0 h-auto">
                  <a href="mailto:angel.velasquez.dev@gmail.com">
                    angel.velasquez.dev@gmail.com
                  </a>
                </Button>
                <Button asChild variant="link" className="p-0 h-auto">
                  <a href="https://github.com/K1ssSh0t" target="_blank" rel="noopener noreferrer">
                    github.com/K1ssSh0t
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Angel Omar Matias Velasquez. All rights reserved.
      </p>
    </div>
  )
}

export default App
