
import type React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Navigation } from "@/components/navigation"

function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
      },
      Math.max(reverse ? 25 : 50, Math.random() * 100),
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  return words[index].substring(0, subIndex)
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  //@ts-ignore
  const y = useParallax(scrollYProgress, 300)

  return (
    <motion.section
      id={id}
      className="h-screen flex items-center justify-center p-4 relative snap-start nier-scanlines"
      ref={ref}
    >
      <div className="max-w-4xl w-full">{children}</div>
    </motion.section>
  )
}

// Definición de las tecnologías con sus descripciones
const technologies = {
  "NEXT.JS": "REACT FRAMEWORK FOR PRODUCTION APPLICATIONS",
  REACT: "JAVASCRIPT LIBRARY FOR USER INTERFACES",
  TAILWIND: "UTILITY-FIRST CSS FRAMEWORK",
  JAVASCRIPT: "PROGRAMMING LANGUAGE FOR WEB DEVELOPMENT",
  TYPESCRIPT: "TYPED SUPERSET OF JAVASCRIPT",
  FRONTEND: "USER INTERFACE DEVELOPMENT",
  BACKEND: "SERVER-SIDE DEVELOPMENT",
  FULLSTACK: "COMPLETE FRONTEND AND BACKEND DEVELOPMENT",
  POSTGRESQL: "RELATIONAL DATABASE MANAGEMENT SYSTEM",
  SUPABASE: "OPEN SOURCE FIREBASE ALTERNATIVE",
  "NODE.JS": "JAVASCRIPT RUNTIME ENVIRONMENT",
  "REACT NATIVE": "MOBILE APPLICATION FRAMEWORK",
}

export default function App() {
  const roles = ["FULLSTACK DEVELOPER", "WEB DEVELOPER", "REACT DEVELOPER", "TYPESCRIPT DEVELOPER", "SOFTWARE ENGINEER"]
  const typedText = useTypewriter(roles)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <TooltipProvider>
      <div className="bg-background text-foreground min-h-screen relative digital-noise">
        {/* Navigation */}
        <Navigation />

        {/* Progress bar */}
        <motion.div className="fixed top-8 left-0 right-0 h-[2px] bg-red-500 z-40" style={{ scaleX }} />

        {/* Grid overlay */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="pt-8 md:pt-0">
          <Section id="hero">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <div className="border border-white/20 p-8 nier-glitch bg-black/50">
                <div className="nier-mono text-xs text-red-500 mb-2">{"> INITIALIZING SYSTEM..."}</div>
                <h1 className="text-4xl md:text-6xl font-bold nier-title mb-4">ANGEL OMAR MATIAS VELASQUEZ</h1>
                <div className="h-[2px] bg-red-500 w-32 mx-auto mb-6"></div>
                <motion.div
                  className="text-xl md:text-2xl nier-text text-red-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05 }}
                >
                  {typedText}
                  <span className="terminal-cursor">|</span>
                </motion.div>
                <div className="nier-mono text-xs text-muted-foreground mt-4">{"> STATUS: ONLINE"}</div>
              </div>
            </motion.div>
          </Section>

          <Section id="about">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-red-500">{">"}</span>
                  ABOUT_ME.EXE
                  <span className="text-xs text-muted-foreground nier-mono">[RUNNING]</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="nier-mono text-sm leading-relaxed space-y-2">
                  <p className="text-green-400">{"> SYSTEM SCAN COMPLETE"}</p>
                  <p>{"> PASSIONATE FULL-STACK DEVELOPER WITH EXPERIENCE IN BUILDING WEB APPLICATIONS"}</p>
                  <p>{"> USING MODERN TECHNOLOGIES AND FRAMEWORKS"}</p>
                  <br />
                  <p>
                    {"> MAIN STACK: "}
                    <span className="text-red-500">NEXT.JS, NODE.JS, REACT, TAILWIND CSS, JAVASCRIPT, TYPESCRIPT</span>
                  </p>
                  <br />
                  <p>
                    {"> ADDITIONAL KNOWLEDGE: "} <span className="text-red-500">JAVA, PYTHON, GO</span>
                  </p>
                  <br />
                  <p className="text-yellow-400">{"> STATUS: SEEKING NEW OPPORTUNITIES"}</p>
                  <p className="text-green-400">{"> READY FOR DEPLOYMENT"}</p>
                </div>

                <Separator className="bg-border" />

                <div>
                  <div className="nier-mono text-xs text-muted-foreground mb-3">{"> LOADING SKILL_MODULES..."}</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(technologies).map(([tech, description]) => (
                      <Tooltip key={tech}>
                        <TooltipTrigger>
                          <Badge variant="secondary" className="cursor-pointer w-full justify-center">
                            {tech}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-black border border-red-500 text-white nier-mono">
                          {description}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          <Section id="projects">
            <Card className="w-full h-[80vh]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-red-500">{">"}</span>
                  PROJECTS.LOG
                  <span className="text-xs text-muted-foreground nier-mono">[5 ENTRIES FOUND]</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="nier-mono text-xs text-green-400 mb-4">{"> ACCESSING PROJECT DATABASE..."}</div>
                <ScrollArea className="h-[60vh]">
                  <div className="space-y-4">
                    {[
                      {
                        title: "FULL_STACK_TODOS_APP",
                        url: "https://github.com/K1ssSh0t/full-stack-todos-app",
                        description:
                          "TODOS APP BUILT WITH NEXT.JS 13 AND SUPABASE. FULL-STACK PROJECT DEMONSTRATING AUTHENTICATION, CRUD, AND MODERN UI.",
                        tags: ["NEXT.JS", "SUPABASE", "REACT"],
                        status: "DEPLOYED",
                      },
                      {
                        title: "RN_FGO_API",
                        url: "https://github.com/K1ssSh0t/rn-fgo-api",
                        description:
                          "REACT NATIVE MOBILE APP THAT USES AN API FROM FATE/GRAND ORDER. SHOWCASES MOBILE DEVELOPMENT AND API INTEGRATION SKILLS.",
                        tags: ["REACT NATIVE", "API", "MOBILE"],
                        status: "ACTIVE",
                      },
                      {
                        title: "PROYECTO_GIMNASIO",
                        url: "https://github.com/K1ssSh0t/proyecto-gimnasio",
                        description:
                          "GYM MANAGEMENT PROJECT USING TYPESCRIPT AND MODERN WEB TECHNOLOGIES, INCLUDING STRIPE AND SUPABASE.",
                        tags: ["TYPESCRIPT", "STRIPE", "SUPABASE"],
                        status: "STABLE",
                      },
                      {
                        title: "MOVIE_RESERVATION_SYSTEM",
                        url: "https://github.com/K1ssSh0t/ts-movie-reservation-system",
                        description:
                          "MOVIE RESERVATION SYSTEM BUILT WITH TYPESCRIPT, HONO, BUN, DRIZZLE ORM, AND POSTGRESQL.",
                        tags: ["TYPESCRIPT", "HONO", "POSTGRESQL"],
                        status: "BETA",
                      },
                      {
                        title: "TS_REALTIME_LEADERBOARD",
                        url: "https://github.com/K1ssSh0t/ts-realtime-leaderboard",
                        description:
                          "REALTIME LEADERBOARD BUILT WITH HONO, BUN AND REDIS. SHOWCASES BACKEND DEVELOPMENT AND DATABASE MANAGEMENT SKILLS.",
                        tags: ["HONO", "BUN", "REDIS"],
                        status: "LIVE",
                      },
                    ].map((project, index) => (
                      <Card key={index} className="bg-muted/50">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base flex items-center gap-2">
                              <span className="text-red-500 nier-mono text-xs">
                                {"[" + String(index + 1).padStart(2, "0") + "]"}
                              </span>
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-500 transition-colors"
                              >
                                {project.title}
                              </a>
                            </CardTitle>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs nier-mono px-2 py-1 border ${project.status === "DEPLOYED"
                                  ? "text-green-400 border-green-400"
                                  : project.status === "LIVE"
                                    ? "text-blue-400 border-blue-400"
                                    : project.status === "ACTIVE"
                                      ? "text-yellow-400 border-yellow-400"
                                      : project.status === "BETA"
                                        ? "text-orange-400 border-orange-400"
                                        : "text-gray-400 border-gray-400"
                                  }`}
                              >
                                {project.status}
                              </span>
                              <HoverCard>
                                <HoverCardTrigger>
                                  <Badge variant="destructive" className="cursor-pointer">
                                    INFO
                                  </Badge>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80 bg-black border border-red-500">
                                  <div className="space-y-2">
                                    <h4 className="text-sm font-semibold nier-title">{project.title}</h4>
                                    <p className="text-xs nier-mono">{project.description}</p>
                                    <div className="flex gap-1 flex-wrap">
                                      {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs nier-mono text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>

                <Separator className="my-6 bg-border" />

                <div className="text-center">
                  <div className="nier-mono text-xs text-muted-foreground mb-2">{"> EXTERNAL REPOSITORY ACCESS"}</div>
                  <Button asChild variant="outline">
                    <a href="https://github.com/K1ssSh0t" target="_blank" rel="noopener noreferrer">
                      VIEW_ALL_PROJECTS {">>"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Section>

          <Section id="contact">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-red-500">{">"}</span>
                  CONTACT.SYS
                  <span className="text-xs text-muted-foreground nier-mono">[READY]</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="nier-mono text-sm space-y-1">
                  <p className="text-green-400">{"> ESTABLISHING CONNECTION..."}</p>
                  <p className="text-yellow-400">{"> COMMUNICATION PROTOCOLS ACTIVE"}</p>
                  <p className="text-blue-400">{"> READY TO RECEIVE TRANSMISSION"}</p>
                </div>

                <Separator className="bg-border" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button asChild variant="default" className="h-12">
                    <a href="mailto:angel.velasquez.dev@gmail.com">
                      <span className="nier-mono">EMAIL_TRANSMISSION</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12">
                    <a href="https://github.com/K1ssSh0t" target="_blank" rel="noopener noreferrer">
                      <span className="nier-mono">GITHUB_REPOSITORY</span>
                    </a>
                  </Button>
                </div>

                <div className="nier-mono text-xs text-muted-foreground text-center">
                  <p>{"> angelomarmatias@gmail.com"}</p>
                  <p>{"> github.com/K1ssSh0t"}</p>
                </div>
              </CardContent>
            </Card>
          </Section>
        </div>

        <motion.div
          className="fixed bottom-4 w-full text-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-xs nier-mono text-muted-foreground">
            {"© " + new Date().getFullYear() + " ANGEL OMAR MATIAS VELASQUEZ // ALL RIGHTS RESERVED"}
          </p>
        </motion.div>
      </div>
    </TooltipProvider>
  )
}
