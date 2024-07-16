// components/animations.ts
import { Variants } from "framer-motion";

type AnimationVariants = {
  [key: string]: Variants;
};

export const animationVariants: AnimationVariants = {
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideUpMore: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  scaleX: {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5 } },
  },
  scaleY: {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.5 } },
  },
  skewX: {
    hidden: { opacity: 0, skewX: 10 },
    visible: { opacity: 1, skewX: 0, transition: { duration: 0.5 } },
  },
  skewY: {
    hidden: { opacity: 0, skewY: 10 },
    visible: { opacity: 1, skewY: 0, transition: { duration: 0.5 } },
  },
  rotateY: {
    hidden: { opacity: 0, rotateY: 180 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.5 } },
  },
  rotateX: {
    hidden: { opacity: 0, rotateX: 180 },
    visible: { opacity: 1, rotateX: 0, transition: { duration: 0.5 } },
  },
  rotateZ: {
    hidden: { opacity: 0, rotateZ: 90 },
    visible: { opacity: 1, rotateZ: 0, transition: { duration: 0.5 } },
  },
  slideUpEvenMore: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideLeftMore: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  slideRightMore: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  scaleUpMore: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  slideUpMost: {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
};
