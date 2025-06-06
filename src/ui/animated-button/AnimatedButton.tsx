"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Sparkles from "./Sparkles";
import Stars from "./Stars";
import {
  buttonAnim,
  highlightContainerAnim,
  highlightAnim,
  labelAnim,
} from "./AnimatedButton.anim";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnimatedButton({
  hueValue,
  children,
  className,
  ...props
}: {
  hueValue: number;
  children: React.ReactNode;
  className?: string;
}) {
  const navigate = useNavigate();

  const hue = `hue-rotate-[${hueValue}deg]`;
  const [hover, setHover] = useState<boolean>(false);
  const [sparkles] = useState<number[]>(Array(30).fill(0));

  const handleStartCall = () => {
    navigate("/call");
  };

  return (
    <motion.div
      style={{ position: "relative" }}
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Sparkles sparkles={sparkles} hover={hover} />

      <motion.button
        className={cn(
          "group relative z-10 inline-flex h-12 w-48 items-center justify-center overflow-hidden rounded-xl bg-purple-800 px-6 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.97]",
          className
        )}
        initial="init"
        animate={hover ? "anim" : "init"}
        whileTap="tap"
        onClick={handleStartCall}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        variants={buttonAnim}
        {...props}
      >
        <motion.div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-[11px] pt-[2px]",
            hue
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "xor",
          }}
          animate={hover ? "anim" : "init"}
          variants={highlightContainerAnim}
          data-testid="highlight"
        >
          <motion.div
            className="absolute left-1/2 top-0 z-[-1] aspect-square w-[200%] rounded-[11px]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0 330deg, white 360deg)",
              WebkitMaskImage: "linear-gradient(white 5%, transparent 20%)",
              maskImage: "linear-gradient(white 5%, transparent 20%)",
              translate: "-50% -10%",
            }}
            variants={highlightAnim}
          />
        </motion.div>

        <span className="mr-3">
          <Stars hover={hover} />
        </span>
        <motion.span
          className="relative z-10 text-sm font-medium tracking-wide"
          variants={labelAnim}
        >
          {children}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

export default AnimatedButton;
