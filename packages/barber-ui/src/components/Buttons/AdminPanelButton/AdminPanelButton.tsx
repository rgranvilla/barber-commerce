import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

export interface AdminPanelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  count?: number;
  actived: boolean;
}

function AdminPanelButton({
  icon,
  label,
  count,
  actived = false,
  ...rest
}: AdminPanelButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "w-full max-w-[288px] rounded-lg text-zinc-200 transition-colors duration-200 ease-in-out  enabled:hover:bg-green-900 disabled:cursor-not-allowed disabled:text-zinc-600",
        {
          "bg-green-700": actived === true,
        }
      )}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-3">
          {icon}
          <div>{label}</div>
        </div>
        {count ? (
          <div className="flex h-fit max-h-5 min-w-[20px] items-center justify-center rounded bg-orange-600 px-1 text-xs text-zinc-900">
            {count}
          </div>
        ) : null}
      </div>
    </button>
  );
}

export { AdminPanelButton };
