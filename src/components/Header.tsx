import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myPic from "../../public/my_pic.webp";
import Avatar from "./Avatar";
import ToogleThemeIcon from "./ToogleThemeIcon";
export default function Header({
  wrapperRef,
}: {
  wrapperRef: React.RefObject<HTMLDivElement> | null;
}) {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    const wrapper = wrapperRef?.current;
    if (!wrapper) return;
    const handleScroll = () => {
      wrapper.scrollTop > 30 ? setIsScroll(true) : setIsScroll(false);
    };
    wrapper.addEventListener("scroll", handleScroll);
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, [wrapperRef]);
  return (
    <motion.header
      initial={false}
      animate={{
        scaleX: isScroll ? 0.95 : 0.8,
        scaleY: isScroll ? 0.95 : 0.8,
        // scale: isScroll ? 1 : 0.97,
        backdropFilter: isScroll ? "blur(2px)" : "blur(0px)",
      }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: [0.15, 1, 0.45, 1.18],
      }}
      className={"pt-2 sticky top-0 z-50  rounded-full w-full  "}
    >
      <nav
        className={`flex items-center justify-between p-2  border border-border
      dark:bg-neutral-900/5 rounded-full`}
      >
        <Link to={"/"}>
          <Avatar src={myPic} fallBack="HR" />
        </Link>
        <ToogleThemeIcon />
      </nav>
    </motion.header>
  );
}
