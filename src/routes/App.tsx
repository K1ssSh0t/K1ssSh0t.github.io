import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react"
import { useRef, useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 25 : 50, Math.random() * 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return words[index].substring(0, subIndex);
};

function Section({ id, children }: { id: string, children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  //@ts-ignore
  const y = useParallax(scrollYProgress, 300)

  return (
    <motion.section
      id={id}
      className="h-screen flex items-center justify-center p-4 relative snap-start"
      ref={ref}
    >
      <div className="max-w-prose w-full">

        {children}

      </div>
    </motion.section>
  )
}

function App() {
  const roles = [
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "TypeScript Developer",
    "Software Engineer"
  ];
  const typedText = useTypewriter(roles);

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="bg-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-background"
        style={{ scaleX }}
      />

      <Section id="hero">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-3xl font-bold text-secondary">
            Angel Omar Matias Velasquez / <br /> {" "}
            <motion.span
              className="text-secondary inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              {typedText}
            </motion.span>
          </h1>
        </motion.div>
      </Section>

      <Section id="about">
        <Card className="max-w-prose w-full">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a passionate full-stack developer with experience in building web applications using modern technologies.
              My main stack includes{" "}
              <span className="font-semibold text-primary">
                Next.js, Node.js, React, Tailwind CSS, JavaScript, TypeScript
              </span>{" "}
              and both frontend & backend development. And basic knowledge of{" "}
              <span className="font-semibold text-primary">Java, Python and Go</span>.
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
              <Badge>Full Stack</Badge>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section id="projects">
        <ScrollArea className="h-[calc(100vh-5rem)] ">
          <Card className="max-w-prose w-full">
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
                        <a href="https://github.com/K1ssSh0t/rn-fgo-api" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                          React Native API consumtion for Fate/Grand Order
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        React Native mobile app that uses an API frOM Fate/Grand Order. This project showcases my skills in mobile development and API integration.
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
                        Gym management project using TypeScript and modern web technologies, Like Stripe and Supabase.
                      </p>
                    </CardContent>
                  </Card>
                </li>
                <li>
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle>
                        <a href="https://github.com/K1ssSh0t/ts-movie-reservation-system" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                          Movie Reservation System
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Movie reservation system built with TypeScript, Hono, Bun, Drizzle ORM, and PostgreSQL. This project showcases my skills in backend development and database management.
                      </p>
                    </CardContent>
                  </Card>
                </li>
                <li>
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle>
                        <a href="https://github.com/K1ssSh0t/ts-realtime-leaderboard" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                          TS Realtime Leaderboard
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Realtime leaderboard built with Hono, bun adn redis. This project showcases my skills in backend development and database management.
                      </p>
                    </CardContent>
                  </Card>
                </li>
              </ul>
              <p className="mt-4">
                For more projects, check out my{" "}
                <Button asChild variant="link" className="p-0 h-auto">
                  <a href="https://github.com/K1ssSh0t" target="_blank" rel="noopener noreferrer">
                    GitHub profile
                  </a>
                </Button>
              </p>

            </CardContent>
          </Card>
        </ScrollArea>
      </Section>

      <Section id="contact">
        <Card className="max-w-prose w-full">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" mb-2">
              Feel free to reach out via email or connect with me on GitHub!
            </p>
            <div className="flex flex-col items-center space-y-2">
              <Button asChild variant="link" className="p-0 h-auto">
                <a href="mailto:angel.velasquez.dev@gmail.com">
                  angelomarmatias@gmail.com
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
      </Section>

      <motion.div
        className="fixed bottom-4 w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} Angel Omar Matias Velasquez. All rights reserved.
        </p>
      </motion.div>
    </div>
  )
}

export default App
