import { cn } from "@/lib/utils";
import styles from "./titleScroll.module.css";

export default function TitleScroll({ className, ...props }) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <h2
        className={cn(
          "font-editorial-old flex items-center gap-8 text-8xl leading-relaxed sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem]  text-primary",
          styles.title
        )}
      >
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
        WORK {"  "}
        <DotSvg />
      </h2>
    </div>
  );
}

const DotSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    className="w-16 h-16 max-md:w-4 max-md:h-4 -mt-12"
  >
    <circle cx="3.5" cy="4" r="3.5" fill="currentColor" />
  </svg>
);
