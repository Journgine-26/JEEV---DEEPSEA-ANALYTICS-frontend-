
// src/App.tsx (full file)

import React, { useState, useRef } from "react";

import Prism from "./components/Prism";
import BubbleMenu from "./components/BubbleMenu";
import MagicBento from "./components/MagicBento";
import CircularGallery from "./components/CircularGallery";
import GradualBlur from "./components/GradualBlur";
import PixelTransition from "./components/PixelTransition";
import TextType from "./components/TextType"; // if your file is TypeText.tsx change this to TypeText
import BlurText from "./components/BlurText";
import SplitText from "./components/SplitText"; // <-- exact name, must match file
import DecryptedText from "./components/DecryptedText";
import ScrollReveal from "./components/ScrollReveal";
import Stepper, { Step } from "./components/Stepper";
import logoImg from "./assets/logo.png";


export default function App(): React.JSX.Element {
  const [showStepper, setShowStepper] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Prism animated background (fills page) */}
      <div className="fixed inset-0 -z-10">
        <Prism
          animationType="3drotate"
          timeScale={0.6}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          noise={0.25}
          glow={0.9}
        />
      </div>

      {/* Top Bubble Menu (logo + menu) */}
      <header className="relative z-40">
        <div className="container mx-auto px-6 py-6">
          <BubbleMenu
            logo={
              <img
                src={logoImg}
                alt="MyBrand"
                className="h-8 md:h-10 object-contain"
              />
            }
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            staggerDelay={0.08}
          />
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 pt-20 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-[1fr_520px] gap-x-30 gap-y-20 items-center">
          {/* Left column */}
          <div className="text-left ml-4 md:ml-12">
            <div className="flex flex-col justify-start gap-6 md:gap-8 max-w-2xl">
              <SplitText
                text="PROJECT JEEV"
                tag="h1"
                className="text-5xl md:text-7xl font-extrabold leading-tight"
                splitType="words, chars"
                duration={0.9}
              />
              <div className="text-xl ml-20 md:text-2xl text-neutral-200 leading-relaxed font-medium">
                <TextType
                  text={[
                    "DNABert + U-Map + HDBScan",
                    "Python + Blast + MAFFT",
                    "Tailwind + TypeScript, production-ready UI.",
                  ]}
                  typingSpeed={60}
                  pauseDuration={1800}
                  showCursor
                  cursorCharacter="|"
                  className="block"
                />
              </div>

              <div className="mt-6 ml-6 md:ml-20 space-y-3">
                <BlurText
                  text="Turning Raw e-DNA -> INSIGHTS"
                  delay={120}
                  animateBy="words"
                  className="block text-2xl md:text-4xl font-bold"
                />
                <BlurText
                  text="AI Driven Pipeline That Processes e-DNA "
                  delay={200}
                  animateBy="words"
                  className="block text-xl md:text-2xl font-medium mt-2"
                />
                <BlurText
                  text="Into Actionable Insights."
                  delay={200}
                  animateBy="words"
                  className="block text-xl md:text-2xl font-medium mt-2"
                />
                <p className="mt-4 text-neutral-300 max-w-prose">
                  <ScrollReveal
                    baseOpacity={0.05}
                    enableBlur
                    baseRotation={4}
                    blurStrength={8}
                  >
                    <span>
                      We combine 2D & 3D visual layers with micro-interactions
                      to create landing pages that feel alive.
                    </span>
                  </ScrollReveal>
                </p>

                <div className="mt-4 flex justify-center gap-6">
                  <button
                    onClick={() => setShowStepper(true)}
                    className="rounded-full bg-green-500 px-8 py-4 text-lg text-white font-semibold shadow-lg hover:bg-green-600 transition"
                  >
                    Get started
                  </button>

                  <a
                    href="#features"
                    className="rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition"
                  >
                    Explore features
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - PixelTransition demo (fixed-size wrapper) */}
          <div className="flex items-center justify-center mt-10 mr-12 ">
            <div
              className="w-full max-w-[460px] h-[420px] md:max-w-[520px] md:h-[480px] rounded-xl overflow-hidden shadow-xl border border-white/10"
              style={{ background: "transparent" }}
            >
              <PixelTransition
                firstContent={
                  <img
                    src="https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                }
                secondContent={
                  <div className="w-full h-full grid place-items-center bg-gradient-to-br from-[#0b1220] to-[#071027] p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">Interactive Demo</h3>
                      <p className="mt-2 text-sm text-neutral-300">
                        Hover to reveal pixel transition
                      </p>
                    </div>
                  </div>
                }
                gridSize={10}
                pixelColor="#ffffff"
                animationStepDuration={0.45}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Small decrypted text below the hero grid */}
          <div className="mt-12">
            <DecryptedText
              text="Hover to decrypt - micro interactions rule the web."
              animateOn="hover"
            />
          </div>
        </section>
      </main>

      {/* Features / Bento */}
      <section id="features" className="py-20 relative z-10 w-full">
        <div className="w-full px-0">
          {" "}
          {/* remove container */}
          <SplitText
            text="Features"
            tag="h2"
            className="text-3xl font-bold text-center"
          />
          <p className="mt-3 text-neutral-300 text-center">
            An interactive collection of components demonstrates how to assemble
            a modern landing page.
          </p>
          {/* Full width MagicBento */}
          <div className="mt-8 w-full">
            <MagicBento
              textAutoHide
              enableStars
              enableSpotlight
              enableBorderGlow
              enableTilt
              enableMagnetism
              clickEffect
              spotlightRadius={300}
              particleCount={10}
              glowColor="132, 0, 255"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SplitText
            text="Gallery"
            tag="h3"
            className="text-2xl font-semibold"
          />
          <div
            className="mt-6 h-[420px] rounded-xl overflow-hidden"
            ref={galleryRef}
          >
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>

      {/* testimonial / CTA band with GradualBlur footer */}
      <footer className="relative mt-12">
        <GradualBlur preset="page-footer" opacity={0.95} curve="bezier">
          <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">
                Ready to ship your interactive landing page?
              </h4>
              <p className="text-neutral-300 mt-1">
                We bring motion, WebGL and micro-interactions together.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                className="rounded-full bg-white/90 px-4 py-2 text-black font-semibold"
                href="#contact"
              >
                Contact us
              </a>
              <button
                onClick={() => setShowStepper(true)}
                className="rounded-full border border-white/20 px-4 py-2 text-white"
              >
                Start onboarding
              </button>
            </div>
          </div>
        </GradualBlur>
      </footer>

      {/* Stepper modal (simple overlay) */}
      {showStepper && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6">
          <div className="w-full max-w-2xl rounded-xl bg-[#07030d] p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Onboarding</h3>
              <button
                className="text-neutral-300"
                onClick={() => setShowStepper(false)}
              >
                x
              </button>
            </div>

            <Stepper
              initialStep={1}
              backButtonText="Previous"
              nextButtonText="Next"
              onFinalStepCompleted={() => {
                setShowStepper(false);
                // in real project: trigger onboarding flow
              }}
            >
              <Step>
                <h4 className="text-lg font-semibold">Welcome</h4>
                <p className="mt-2 text-neutral-300">
                  Tell us a little about your project.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold">Select features</h4>
                <p className="mt-2 text-neutral-300">
                  Choose the components you want to include.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold">You're done</h4>
                <p className="mt-2 text-neutral-300">
                  We'll send a follow-up email with next steps.
                </p>
              </Step>
            </Stepper>
          </div>
        </div>
      )}
    </div>
  );
}
// src/components/SplitText.tsx (full file)
