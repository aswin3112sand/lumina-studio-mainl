import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Aperture, ArrowRight, Camera, Sparkles } from "lucide-react";

const stats = [
  { value: "8+", label: "Years Of Direction" },
  { value: "500+", label: "Events Captured" },
  { value: "72H", label: "Preview Turnaround" },
];

const focusAreas = [
  "Luxury Weddings",
  "Editorial Portraits",
  "Cinematic Reels",
];

const workflowNotes = [
  {
    title: "Pre-lighting + posing flow",
    detail: "Every frame is guided for posture, expression, and clean light.",
  },
  {
    title: "RAW to premium finish",
    detail: "Color-calibrated edits with elegant skin-tone balancing.",
  },
];

const workflowBadges = [
  "Skin-tone calibrated",
  "Drone-ready crew",
  "Album design support",
];

const telemetry = [
  { label: "Capture Mode", value: "Hybrid photo + reel" },
  { label: "Lens Pairing", value: "35 / 50 / 85 Prime" },
  { label: "Client Mood", value: "Luxury / Warm / Modern" },
];

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const Hero = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);

  const rawRotateX = useMotionValue(-8);
  const rawRotateY = useMotionValue(10);
  const rawGlowX = useMotionValue(50);
  const rawGlowY = useMotionValue(50);

  const rotateX = useSpring(rawRotateX, {
    stiffness: 140,
    damping: 20,
    mass: 0.8,
  });
  const rotateY = useSpring(rawRotateY, {
    stiffness: 140,
    damping: 20,
    mass: 0.8,
  });
  const glowX = useSpring(rawGlowX, {
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  });
  const glowY = useSpring(rawGlowY, {
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  });

  const floatingCardX = useTransform(rotateY, [-16, 16], [-18, 18]);
  const floatingCardY = useTransform(rotateX, [-16, 16], [14, -14]);
  const counterCardX = useTransform(rotateY, [-16, 16], [14, -14]);
  const counterCardY = useTransform(rotateX, [-16, 16], [-10, 10]);

  const heroGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, hsl(40 70% 58% / 0.36), transparent 42%)`;

  const resetStage = () => {
    rawRotateX.set(-8);
    rawRotateY.set(10);
    rawGlowX.set(50);
    rawGlowY.set(50);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCanHover = () => setCanHover(mediaQuery.matches);

    updateCanHover();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateCanHover);

      return () => mediaQuery.removeEventListener("change", updateCanHover);
    }

    mediaQuery.addListener(updateCanHover);

    return () => mediaQuery.removeListener(updateCanHover);
  }, []);

  useEffect(() => {
    if (!canHover || shouldReduceMotion) {
      resetStage();
    }
  }, [canHover, shouldReduceMotion]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!canHover || shouldReduceMotion || !stageRef.current) {
      return;
    }

    const bounds = stageRef.current.getBoundingClientRect();
    const progressX = (event.clientX - bounds.left) / bounds.width;
    const progressY = (event.clientY - bounds.top) / bounds.height;

    rawRotateY.set((progressX - 0.5) * 18);
    rawRotateX.set((0.5 - progressY) * 18);
    rawGlowX.set(progressX * 100);
    rawGlowY.set(progressY * 100);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Cinematic wedding photography"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,91,0.22),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(135deg,rgba(3,3,3,0.96),rgba(11,11,11,0.8),rgba(5,5,5,0.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.08]" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-6 pb-16 lg:grid-cols-[1.03fr_0.97fr] lg:px-10 lg:pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background/55 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-primary sm:text-[11px]">
              Cinematic Photography Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="font-display text-4xl font-medium leading-[1.02] text-foreground text-gold-glow sm:text-5xl lg:text-7xl"
          >
            Luxury Frames
            <br />
            <span className="italic font-normal text-primary">
              That Move With Emotion
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
          >
            We build wedding, portrait, and celebration stories with guided
            direction, premium lighting, and a modern post-production workflow
            that feels elevated from the first click to the final gallery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-body text-[10px] uppercase tracking-[0.26em] text-foreground/85 backdrop-blur-md sm:text-[11px]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-body text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-body text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Book Your Shoot
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-md"
              >
                <p className="font-display text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          ref={stageRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetStage}
          className="relative mx-auto w-full max-w-[34rem] select-none"
        >
          <motion.div
            className="pointer-events-none absolute inset-x-[14%] top-[10%] h-40 rounded-full bg-primary/18 blur-[90px]"
            style={{
              x: counterCardX,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : { scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative aspect-[0.96] sm:aspect-[1.04]" style={{ perspective: "1800px" }}>
            <motion.div
              className="pointer-events-none relative h-full w-full"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={
                !canHover && !shouldReduceMotion
                  ? { y: [0, -12, 0], rotateZ: [0, 0.8, 0, -0.8, 0] }
                  : undefined
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-[10%] rounded-[2.4rem] border border-white/6 bg-white/[0.03]"
                style={{ transform: "translateZ(0px)" }}
              />

              <div
                className="absolute inset-[6%] rounded-[2.8rem] border border-white/10 bg-black/60 shadow-[0_42px_110px_rgba(0,0,0,0.55)] backdrop-blur-md"
                style={{ transform: "translateZ(30px)" }}
              />

              <div
                className="absolute inset-[9%] overflow-hidden rounded-[2.3rem] border border-white/10 bg-black/60"
                style={{ transform: "translateZ(110px)" }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=80"
                  alt="Luxury wedding portrait"
                  className="absolute inset-0 h-full w-full object-cover"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { scale: [1.04, 1.1, 1.04], y: [0, -10, 0] }
                  }
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 mix-blend-screen"
                  style={{ background: heroGlow }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-black/10" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 backdrop-blur-md">
                  <Camera className="h-3.5 w-3.5 text-primary" />
                  <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/80 sm:text-[10px]">
                    Signature edit suite
                  </span>
                </div>

                <div className="absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 backdrop-blur-md sm:inline-flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.75)]" />
                  <span className="font-body text-[9px] uppercase tracking-[0.28em] text-white/80">
                    {canHover && !shouldReduceMotion
                      ? "Desktop tilt active"
                      : "Mobile-ready depth"}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="font-body text-[10px] uppercase tracking-[0.34em] text-primary/90">
                    Hero Frame 01
                  </p>
                  <h2 className="mt-3 max-w-sm font-display text-2xl leading-tight text-white sm:text-[2rem]">
                    Direction-led storytelling with a premium finish.
                  </h2>
                  <p className="mt-3 max-w-md font-body text-xs leading-relaxed text-white/70 sm:text-sm">
                    Built for couples and brands who want their visuals to feel
                    expensive, modern, and deeply memorable.
                  </p>
                </div>
              </div>

              <motion.div
                className="absolute left-0 top-[15%] hidden sm:block"
                style={{ x: floatingCardX, y: floatingCardY }}
              >
                <motion.div
                  className="w-40 rounded-[1.6rem] border border-white/10 bg-black/65 p-4 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
                  style={{ transform: "translateZ(180px)" }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, -10, 0], rotateZ: [0, -1.6, 0] }
                  }
                  transition={floatTransition}
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-primary/15 p-2 text-primary">
                      <Aperture className="h-4 w-4" />
                    </div>
                    <span className="font-body text-[9px] uppercase tracking-[0.28em] text-white/65">
                      Focus stack
                    </span>
                  </div>
                  <p className="mt-4 font-display text-3xl text-white">f/1.8</p>
                  <p className="mt-2 font-body text-[11px] leading-relaxed text-white/65">
                    Soft depth, clean subject separation, and eye-tracked
                    clarity.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-[11%] -left-2 w-[82%] sm:w-[60%]"
                style={{ x: counterCardX, y: counterCardY }}
              >
                <motion.div
                  className="rounded-[1.8rem] border border-white/10 bg-background/82 p-4 shadow-[0_24px_55px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:p-5"
                  style={{ transform: "translateZ(150px)" }}
                  animate={
                    shouldReduceMotion ? undefined : { y: [0, 8, 0] }
                  }
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary/90">
                        Client experience
                      </p>
                      <p className="mt-2 font-display text-xl text-foreground">
                        Guided, polished, unforgettable
                      </p>
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.2em] text-primary">
                      Premium flow
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {workflowNotes.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-3"
                      >
                        <p className="font-body text-[10px] uppercase tracking-[0.24em] text-primary/85">
                          {item.title}
                        </p>
                        <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {workflowBadges.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.18em] text-foreground/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-[16%] right-0 hidden sm:block"
                style={{ x: floatingCardX }}
              >
                <motion.div
                  className="w-44 rounded-[1.7rem] border border-white/10 bg-black/65 p-4 backdrop-blur-xl shadow-[0_24px_55px_rgba(0,0,0,0.32)]"
                  style={{ transform: "translateZ(180px)" }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, -7, 0], rotateZ: [0, 1.4, 0] }
                  }
                  transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="font-body text-[10px] uppercase tracking-[0.28em] text-primary/90">
                    Session telemetry
                  </p>
                  <div className="mt-4 space-y-3">
                    {telemetry.map((item) => (
                      <div key={item.label}>
                        <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/45">
                          {item.label}
                        </p>
                        <p className="mt-1 font-body text-xs leading-relaxed text-white/80">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <div
                className="absolute right-[7%] top-[12%] hidden sm:block"
                style={{ transform: "translateZ(90px)" }}
              >
                <motion.div
                  className="relative h-24 w-24 rounded-full border border-primary/25 bg-primary/5"
                  animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute inset-4 rounded-full border border-white/10" />
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px_rgba(201,162,91,0.75)]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
