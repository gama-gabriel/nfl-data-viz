import { motion } from "framer-motion";

export default function ChartSvg() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 mx-auto"
    >
      <motion.path
        variants={{
          hidden: { scale: 0.5, opacity: 0, x: -10, y: 10 },
          rest: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: { delay: 1.3, duration: 0.2 },
          },
        }}
        d="M66.499 59.8323L50 43.3333H73.3333C73.3333 49.7766 70.7217 55.61 66.499 59.8323Z"
        stroke="#16FF00"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={{
          hidden: { scale: 0.5, opacity: 0, x: -10, y: 10 },
          rest: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: { delay: 1.3, duration: 0.2 },
          },
        }}
        d="M66.6667 33.3333C66.6667 20.4467 56.22 10 43.3334 10V33.3333H66.6667Z"
        stroke="#16FF00"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 40C6.66663 54.7276 18.6057 66.6666 33.3333 66.6666C40.697 66.6666 47.3636 63.682 52.1896 58.8563L33.3333 40V13.3333C18.6057 13.3333 6.66663 25.2724 6.66663 40Z"
        stroke="#16FF00"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
