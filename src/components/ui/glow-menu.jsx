import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export const MenuBar = React.forwardRef(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
      if (typeof document !== "undefined") {
        return document.documentElement.classList.contains("dark")
      }
      return false
    })

    React.useEffect(() => {
      const updateTheme = () => {
        setIsDarkTheme(document.documentElement.classList.contains("dark"))
      }
      window.addEventListener("theme-change", updateTheme)
      const observer = new MutationObserver(updateTheme)
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
      return () => {
        window.removeEventListener("theme-change", updateTheme)
        observer.disconnect()
      }
    }, [])

    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden",
          className,
        )}
        initial="initial"
        whileHover="hover"
        {...props}
      >
        <motion.div
          className={`absolute -inset-2 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-500/30 via-30% via-purple-500/30 via-60% via-indigo-500/30 via-90%"
              : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
          } to-transparent rounded-3xl z-0 pointer-events-none`}
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-1 relative z-10">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.label.toLowerCase() === activeItem?.toLowerCase()

            return (
              <motion.li key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => onItemClick?.(item.label)}
                  className="block w-full focus:outline-none"
                >
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0,
                        borderRadius: "12px",
                      }}
                    />
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-3.5 py-2 relative z-10 bg-transparent transition-colors rounded-xl text-sm font-semibold",
                        isActive
                          ? "text-blue-600 dark:text-blue-400 font-bold"
                          : "text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white",
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-slate-500 dark:text-slate-400",
                          `group-hover:${item.iconColor}`,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-3.5 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-sm font-semibold",
                        isActive
                          ? "text-blue-600 dark:text-blue-400 font-bold"
                          : "text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white",
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-slate-500",
                          `group-hover:${item.iconColor}`,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    )
  },
)

MenuBar.displayName = "MenuBar"

export default MenuBar
