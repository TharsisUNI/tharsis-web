import { motion } from "framer-motion";

interface Props {
  toggle: () => any;
}

const Path = (props: any) => (
  <motion.path
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuBurger = ({ toggle }: Props) => {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.85 }}
      className="inline-flex items-center justify-center p-1.5 text-slate-700 rounded-md hover:bg-gray-200/50 focus:outline-none"
    >
      <svg width="21" height="21" viewBox="0 0 22 20" stroke="currentColor" aria-hidden="true" fill="none" className="text-black-pantone-500">
        <Path
          variants={{
            closed: { d: "M 2 3 L 20 3" },
            open: { d: "M 4 17 L 18 3" }
          }}
        />
        <Path
          d="M 2 10 L 20 10"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 17 L 20 17" },
            open: { d: "M 4 3 L 18 17" }
          }}
        />
      </svg>
    </motion.button>
  );
};
