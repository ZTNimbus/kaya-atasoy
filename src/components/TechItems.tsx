import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";
import { Fragment } from "react";

function TechItems({
  tech,
  className,
  techWrapperClassName,
}: {
  tech: {
    title: string;
    iconType: React.ElementType;
  }[];

  className?: string;
  techWrapperClassName?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          techWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => {
          return (
            <Fragment key={idx}>
              {tech.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                  >
                    <TechIcon component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default TechItems;
