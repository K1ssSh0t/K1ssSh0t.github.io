import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
]

export function Navigation() {
    const [activeSection, setActiveSection] = useState("hero")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    // Track scroll position and active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.body.scrollHeight

            // Calculate scroll progress percentage
            const progress = scrollPosition / (documentHeight - windowHeight)
            setScrollProgress(progress)

            // Determine active section based on scroll position
            const sections = navigationItems.map((item) => {
                const element = document.getElementById(item.id)
                if (!element) return { id: item.id, top: 0, height: 0 }

                const rect = element.getBoundingClientRect()
                return {
                    id: item.id,
                    top: rect.top + scrollPosition,
                    height: rect.height,
                }
            })

            for (const section of sections) {
                const sectionTop = section.top
                const sectionBottom = section.top + section.height

                if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
                    setActiveSection(section.id)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Scroll to section function
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            })
            setActiveSection(id)
            setMobileMenuOpen(false)
        }
    }

    return (
        <>
            {/* Desktop Navigation */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
                <div className="flex flex-col items-start space-y-1 relative">
                    {/* Vertical progress line */}
                    <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/20"></div>
                    <motion.div
                        className="absolute left-3 top-0 w-[1px] bg-red-500"
                        style={{
                            height: `${scrollProgress * 100}%`,
                            originY: 0,
                        }}
                    />

                    {navigationItems.map((item) => (
                        <div key={item.id} className="flex items-center group">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    "nier-mono text-xs py-2 pl-8 pr-4 relative transition-all duration-300 hover:text-red-500   cursor-pointer",
                                    activeSection === item.id ? "text-red-500 pointer-events-none" : "text-white/70 ",
                                )}
                            >
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-white/30 group-hover:bg-red-500/50 transition-colors" />
                                <span
                                    className={cn(
                                        "absolute left-[6px] top-1/2 -translate-y-1/2 w-[5px] h-[5px] transition-all duration-300",
                                        activeSection === item.id ? "bg-red-500" : "bg-white/30 group-hover:bg-red-500/50",
                                    )}
                                />
                                {item.label}
                                {activeSection === item.id && (
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500 opacity-70">{">"}</span>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
                <div className="flex justify-between items-center p-4">
                    <div className="text-xs nier-mono text-red-500">SYSTEM_NAVIGATION</div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="nier-mono text-xs"
                    >
                        {mobileMenuOpen ? "CLOSE" : "MENU"}
                    </Button>
                </div>

                {/* Mobile menu overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-[60px] left-0 right-0 bg-black/95 border-y border-white/10 nier-scanlines"
                        >
                            <div className="flex flex-col p-4 space-y-2">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={cn(
                                            "nier-mono text-sm py-3 px-4 text-left border border-white/20 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/5 relative overflow-hidden",
                                            activeSection === item.id ? "text-red-500 border-red-500/50 bg-red-500/5" : "text-white/70",
                                        )}
                                    >
                                        <span className="absolute left-2 text-red-500 opacity-70">{"> "}</span>
                                        <span className="ml-4">{item.label}</span>
                                        {activeSection === item.id && (
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 animate-pulse"></span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Fixed header with section indicator */}
            <div className="fixed top-0 left-0 right-0 h-8 bg-black/80 border-b border-white/10 z-40 hidden md:block">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="nier-mono text-xs text-white/50">
                        <span className="text-red-500">{">"}</span> SYSTEM_NAVIGATION
                    </div>
                    <div className="nier-mono text-xs text-white/70">
                        CURRENT_SECTION: <span className="text-red-500">{activeSection.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
