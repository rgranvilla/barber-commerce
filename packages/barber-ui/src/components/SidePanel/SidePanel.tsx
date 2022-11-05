import clsx from "clsx";
import { useState } from "react";
import {
  BsFillInboxFill,
  BsLightningChargeFill,
  BsGrid1X2Fill,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";
import { AdminPanelButton } from "../../components/Buttons/AdminPanelButton";
import { GroupButtons } from "../Buttons/GroupButtons";

export interface SidePanelProps {}

function SidePanel() {
  const [compact, setCompact] = useState<boolean>(false);

  return (
    <div
      className={clsx("flex h-screen w-80 flex-col bg-zinc-800 px-4", {
        "w-20": compact === true,
      })}
    >
      <div
        className={clsx("flex w-full items-center", {
          "justify-between": compact === false,
          "justify-end": compact === true,
        })}
      >
        {compact ? null : (
          <h1 className="px-4 py-1 font-sans text-zinc-200">Hello Barber UI</h1>
        )}
        <button
          type="button"
          onClick={() => setCompact(!compact)}
          className="flex h-6 w-6 items-center justify-center rounded text-zinc-400 hover:bg-zinc-700"
        >
          {compact ? <BsChevronDoubleRight /> : <BsChevronDoubleLeft />}
        </button>
      </div>
      <div
        className={clsx("bottom-1 mt-8 flex w-full flex-col gap-1", {
          "items-center": compact === true,
        })}
      >
        <AdminPanelButton
          icon={<BsFillInboxFill />}
          label="Inbox"
          actived={false}
          href="/test"
          compact={compact}
        />
        <AdminPanelButton
          icon={<BsLightningChargeFill />}
          label="Alert"
          count={1}
          actived={false}
          href="/otherTest"
          compact={compact}
        />
        <AdminPanelButton
          icon={<BsGrid1X2Fill />}
          label="Inbox"
          actived={true}
          href="/test"
          compact={compact}
        />

        <GroupButtons.Root>
          <GroupButtons.Label label="Temas e configurações" compact={compact} />

          <GroupButtons.Content>
            <AdminPanelButton
              icon={<BsFillInboxFill />}
              label="Inbox"
              actived={false}
              href="/test"
              compact={compact}
            />
            <AdminPanelButton
              icon={<BsLightningChargeFill />}
              label="Alert"
              count={1}
              actived={false}
              href="/otherTest"
              compact={compact}
            />
            <AdminPanelButton
              icon={<BsGrid1X2Fill />}
              label="Inbox"
              actived={true}
              href="/test"
              compact={compact}
            />
          </GroupButtons.Content>
        </GroupButtons.Root>
      </div>
    </div>
  );
}

export { SidePanel };
