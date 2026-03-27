import { NMAP_STUDY } from "@/lib/nmap-study-data";
import { LinuxStudyClient } from "@/components/linux-study-client";

export const dynamic = "force-static";

export default function NmapStudyPage() {
  return (
    <main>
      <LinuxStudyClient domains={NMAP_STUDY} />
    </main>
  );
}
