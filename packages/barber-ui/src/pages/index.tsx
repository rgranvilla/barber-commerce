import {
  BsFillInboxFill,
  BsLightningChargeFill,
  BsGrid1X2Fill,
} from "react-icons/bs";
import { AdminPanelButton } from "../components/Buttons/AdminPanelButton";

export default function Home() {
  return (
    <div className="w-30  flex h-screen w-80 flex-col items-center bg-zinc-800 px-4">
      <h1 className="px-4 py-1 font-sans text-zinc-200">Hello Barber UI</h1>
      <div className="bottom-1 flex w-full flex-col gap-1">
        <AdminPanelButton
          icon={<BsFillInboxFill />}
          label="Inbox"
          actived={false}
        />
        <AdminPanelButton
          icon={<BsLightningChargeFill />}
          label="Alert"
          count={1}
          actived={false}
        />
        <AdminPanelButton
          icon={<BsGrid1X2Fill />}
          label="Inbox"
          actived={true}
        />
      </div>
    </div>
  );
}
