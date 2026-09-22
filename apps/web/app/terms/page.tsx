import { DialogContent } from "next/dist/next-devtools/dev-overlay/components/dialog";
import Back from "../components/Back";

export default function Terms() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <main className="flex flex-1 flex-col bg-[#080D2A] space-y-10">
        <Back />
      </main>
    </div>
  );
}
