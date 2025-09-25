// src/App.tsx (top of file)
import React, { useState, useRef } from 'react';

import Prism from './components/Prism';
import BubbleMenu from './components/BubbleMenu';
import MagicBento from './components/MagicBento';
import CircularGallery from './components/CircularGallery';
import GradualBlur from './components/GradualBlur';
import PixelTransition from './components/PixelTransition';
import TextType from './components/TextType';      // if your file is TypeText.tsx change this to TypeText
import BlurText from './components/BlurText';
import SplitText from './components/SplitText';    // <-- exact name, must match file
import DecryptedText from './components/DecryptedText';
import ScrollReveal from './components/ScrollReveal';
import Stepper, { Step } from './components/Stepper';

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
            logo={<span className="font-bold text-lg">MyBrand</span>}
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            staggerDelay={0.08}
          />
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 pt-10 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <SplitText
              text="Build immersive web experiences"
              tag="h1"
              className="text-4xl md:text-6xl font-extrabold leading-tight"
              splitType="words, chars"
              duration={0.9}
            />
            <div className="mt-4 text-lg text-neutral-200">
              <TextType
                text={[
                  'Micro-interactions with GSAP & WebGL.',
                  'Tailwind + TypeScript, production-ready UI.',
                  'Motion, Gallery, Interactive Bento cards.'
                ]}
                typingSpeed={60}
                pauseDuration={1800}
                showCursor
                cursorCharacter="|"
                className="block"
              />
            </div>

            <div className="mt-6 space-y-3">
              <BlurText
                text="Fast. Interactive. Delightful."
                delay={120}
                animateBy="words"
                className="text-xl font-semibold"
              />

              <p className="mt-4 text-neutral-300 max-w-prose">
                <ScrollReveal baseOpacity={0.05} enableBlur baseRotation={4} blurStrength={8}>
                  <span>
                    We combine 2D & 3D visual layers with micro-interactions to create landing pages that feel alive.
                  </span>
                </ScrollReveal>
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowStepper(true)}
                  className="rounded-full bg-green-500 px-4 py-2 text-white font-medium hover:bg-green-600"
                >
                  Get started
                </button>

                <a href="#features" className="rounded-full border border-white/20 px-4 py-2 text-white">
                  Explore features
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/landing/800/600"
                  alt="Hero"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-gradient-to-br from-[#111827] to-[#0b1220]">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold">Interactive Demo</h3>
                    <p className="mt-2 text-sm text-neutral-300">Hover to reveal pixel transition</p>
                  </div>
                </div>
              }
              gridSize={10}
              pixelColor="#ffffff"
              animationStepDuration={0.45}
              className="w-full max-w-[520px] shadow-xl rounded-xl overflow-hidden"
            />
          </div>
        </section>

        {/* small decrypted text */}
        <div className="mt-12">
          <DecryptedText text="Hover to decrypt — micro interactions rule the web." animateOn="hover" />
        </div>
      </main>

      {/* Features / Bento */}
      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <SplitText text="Features" tag="h2" className="text-3xl font-bold" />
          <p className="mt-3 text-neutral-300 max-w-2xl">
            An interactive collection of components demonstrates how to assemble a modern landing page.
          </p>

          <div className="mt-8">
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
          <SplitText text="Gallery" tag="h3" className="text-2xl font-semibold" />
          <div className="mt-6 h-[420px] rounded-xl overflow-hidden" ref={galleryRef}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </div>
      </section>

      {/* testimonial / CTA band with GradualBlur footer */}
      <footer className="relative mt-12">
        <GradualBlur preset="page-footer" opacity={0.95} curve="bezier">
          <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Ready to ship your interactive landing page?</h4>
              <p className="text-neutral-300 mt-1">We bring motion, WebGL and micro-interactions together.</p>
            </div>
            <div className="flex gap-3">
              <a className="rounded-full bg-white/90 px-4 py-2 text-black font-semibold" href="#contact">
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
              <button className="text-neutral-300" onClick={() => setShowStepper(false)}>
                ✕
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
                <p className="mt-2 text-neutral-300">Tell us a little about your project.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold">Select features</h4>
                <p className="mt-2 text-neutral-300">Choose the components you want to include.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold">You're done</h4>
                <p className="mt-2 text-neutral-300">We’ll send a follow-up email with next steps.</p>
              </Step>
            </Stepper>
          </div>
        </div>
      )}
    </div>
  );
}
