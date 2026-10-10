"use client"

import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Switch } from "./switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Moon, Send, Sun } from "lucide-react"
import { LinkedinIcon, InstagramIcon, TwitterIcon, FacebookIcon, WhatsappIcon } from "../BrandIcons"

export interface FooterdemoProps {
  onNavigate?: (page: string) => void;
}

function Footerdemo({ onNavigate }: FooterdemoProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("skyweb-theme")
      if (savedTheme) {
        return savedTheme === "dark"
      }
      return document.documentElement.classList.contains("dark") || 
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
    return false
  })

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("skyweb-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("skyweb-theme", "light")
    }
    window.dispatchEvent(new Event("theme-change"))
  }, [isDarkMode])

  React.useEffect(() => {
    const handleSync = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }
    window.addEventListener("theme-change", handleSync)
    const observer = new MutationObserver(handleSync)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => {
      window.removeEventListener("theme-change", handleSync)
      observer.disconnect()
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-[#070b14] dark:text-slate-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-14 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 text-white flex items-center justify-center font-extrabold text-sm">
                S
              </div>
              <span className="font-sans text-xl font-black text-slate-900 dark:text-white tracking-tight">
                SKYWEB
              </span>
              <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 px-1.5 py-0.5 rounded font-bold">
                PVT LTD
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Transforming ambitious brands through high-throughput web engineering, bespoke AI systems, and mission-critical cloud infrastructure.
            </p>
            <form className="relative" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Skyweb engineering bulletins!"); }}>
              <Input
                type="email"
                placeholder="Enter your corporate email"
                className="pr-12 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-blue-600"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono text-xs">Quick Links</h3>
            <nav className="space-y-2.5 text-sm">
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="block text-slate-600 dark:text-slate-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </a>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="block text-slate-600 dark:text-slate-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Featured Projects
              </a>
              <a href="#opportunities" onClick={(e) => handleLinkClick(e, 'opportunities')} className="block text-slate-600 dark:text-slate-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Opportunities & Internship
              </a>
              <a href="#team" onClick={(e) => handleLinkClick(e, 'team')} className="block text-slate-600 dark:text-slate-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Leadership Team
              </a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="block text-slate-600 dark:text-slate-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Contact & Hire Us
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono text-xs">Contact Headquarters</h3>
            <address className="space-y-2.5 text-sm not-italic text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="font-semibold text-slate-900 dark:text-slate-200">Skyweb Private Limited</p>
              <p>G4 &amp; G5, Srinivasa Classic, Geetha Nagar</p>
              <p>Malkajgiri, Secunderabad, Telangana 500047</p>
              <p className="pt-2">
                <span className="font-semibold text-slate-800 dark:text-slate-300">Phone: </span>
                <a href="tel:+919121428210" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 91214 28210</a>
              </p>
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-300">Direct: </span>
                <a href="mailto:offical@skywebitsolutions.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">offical@skywebitsolutions.com</a>
              </p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono text-xs">Follow & Connect</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/company/skyweb-it-solutions-private-limited/posts/?feedView=all" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:text-blue-600 shadow-sm">
                        <LinkedinIcon size={16} color="#0077b5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://instagram.com/skyweb_dev" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-rose-400 hover:text-rose-600 shadow-sm">
                        <InstagramIcon size={16} color="#e11d48" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://wa.me/919121428210" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-400 hover:text-emerald-500 shadow-sm">
                        <WhatsappIcon size={16} color="#25D366" />
                        <span className="sr-only">WhatsApp</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Chat with us on WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-sky-400 hover:text-sky-500 shadow-sm">
                        <TwitterIcon size={16} color="#0284c7" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:text-blue-600 shadow-sm">
                        <FacebookIcon size={16} color="#1877f2" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center space-x-3 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm inline-flex">
              <Sun className="h-4 w-4 text-amber-500" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4 text-indigo-400" />
              <Label htmlFor="dark-mode" className="text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                {isDarkMode ? "Dark Theme" : "Light Theme"}
              </Label>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800/80 pt-8 text-center md:flex-row">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Skyweb Private Limited. All enterprise rights reserved.
          </p>
          <nav className="flex gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Terms of Service
            </span>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              Enterprise Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
