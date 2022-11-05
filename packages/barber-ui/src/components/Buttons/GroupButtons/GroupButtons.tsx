import { ReactNode, useContext } from "react";
import { BsChevronDown, BsChevronUp, BsBrush } from "react-icons/bs";

import {
  GroupButtonsContext,
  GroupButtonsProvider,
} from "./context/GroupButtonsContext";

interface GroupRootProps {
  children: ReactNode;
}

function GroupRoot({ children }: GroupRootProps) {
  return (
    <GroupButtonsProvider>
      <div className="mt-6 rounded-lg bg-zinc-700/30 p-2">{children}</div>
    </GroupButtonsProvider>
  );
}

interface GroupLabelProps {
  label: string;
  compact: boolean;
}

function GroupLabel({ label, compact }: GroupLabelProps) {
  const { toggleShowContent, showContent } = useContext(GroupButtonsContext);
  return (
    <button
      onClick={() => toggleShowContent()}
      className="flex w-full items-end justify-between text-zinc-400"
    >
      {compact ? (
        <BsBrush />
      ) : (
        <span className="text-xs text-zinc-400">{label}</span>
      )}
      {showContent ? <BsChevronUp /> : <BsChevronDown />}
    </button>
  );
}

interface GroupContentProps {
  children: ReactNode;
}

function GroupContent({ children }: GroupContentProps) {
  const { showContent } = useContext(GroupButtonsContext);

  return (
    <>
      {showContent ? (
        <div className="bottom-1 mt-1 flex w-full flex-col gap-1">
          {children}
        </div>
      ) : null}
    </>
  );
}

GroupRoot.displayName = "GroupButtons.Root";
GroupLabel.displayName = "GroupButtons.Label";
GroupContent.displayName = "GroupButtons.Content";

export const GroupButtons = {
  Root: GroupRoot,
  Label: GroupLabel,
  Content: GroupContent,
};
