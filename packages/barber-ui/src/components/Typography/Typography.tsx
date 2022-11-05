import { HTMLAttributes } from "react";
import { clsx } from "clsx";

interface sizesProps {
  type: string;
  size: number;
}
export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  fontFamily: "Inter" | "Rye" | "Roboto Slab";
  sizes: sizesProps[];
  hasBold: boolean;
}

interface TypographyItemProps extends HTMLAttributes<HTMLSpanElement> {
  value: string;
  fontSize: number;
}

function TypographyItem({ value, fontSize, ...rest }: TypographyItemProps) {
  return (
    <div className="text-base-subtitle flex items-center gap-8">
      <span className="text-base-label w-10 text-xs">{value}</span>
      <span className="text-base-label w-10 text-xs">{fontSize}</span>
      <span {...rest}>Invest Regularly in Your Knowledge Portfolio...</span>
    </div>
  );
}

function Typography({
  fontFamily = "Inter",
  sizes,
  hasBold = true,
  ...rest
}: TypographyProps) {
  const getFontFamily =
    fontFamily === "Inter" ? "Inter, sans-serif" : `${fontFamily}, serif`;
  return (
    <div className="flex flex-col gap-2">
      <span className="pl-8 text-xs text-white">
        Font Family:{" "}
        <span className="text-base-label">&quot;{getFontFamily}&quot;</span>
      </span>
      <span className="pl-8 text-xs text-white">
        Font Weight: <span className="text-base-label">&quot;normal&quot;</span>
      </span>
      <div className="mt-6 flex justify-center">
        <div className="flex w-fit flex-col gap-2 rounded bg-white p-6">
          {sizes.map(({ type, size }) => (
            <TypographyItem
              key={type}
              value={type}
              fontSize={size}
              className={clsx(
                "font-normal",
                {
                  "font-sans": fontFamily === "Inter",
                  "font-slab": fontFamily === "Roboto Slab",
                  "font-rye": fontFamily === "Rye",
                },
                {
                  "text-xs": type === "xs",
                  "text-sm": type === "sm",
                  "text-md": type === "md",
                  "text-lg": type === "lg",
                  "text-xl": type === "xl",
                  "text-xxl": type === "xxl",
                }
              )}
              {...rest}
            />
          ))}
        </div>
      </div>
      {hasBold ? (
        <>
          <span className="mt-10 pl-8 text-xs text-white">
            Font Weight:{" "}
            <span className="text-base-label">&quot;bold&quot;</span>
          </span>
          <div className="mt-6 flex justify-center">
            <div className="flex w-fit flex-col gap-2 rounded bg-white p-6">
              {sizes.map(({ type, size }) => (
                <TypographyItem
                  key={type}
                  value={type}
                  fontSize={size}
                  className={clsx(
                    "font-bold",
                    {
                      "font-sans": fontFamily === "Inter",
                      "font-slab": fontFamily === "Roboto Slab",
                      "font-rye": fontFamily === "Rye",
                    },
                    {
                      "text-xs": type === "xs",
                      "text-sm": type === "sm",
                      "text-md": type === "md",
                      "text-lg": type === "lg",
                      "text-xl": type === "xl",
                      "text-xxl": type === "xxl",
                    }
                  )}
                  {...rest}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export { Typography };
