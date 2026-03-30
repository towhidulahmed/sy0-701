import { LINUX_STUDY } from "@/lib/linux-study-data";
import { LinuxStudyClient } from "@/components/linux-study-client";
import { PageFooter } from "@/components/page-footer";

export const dynamic = "force-static";

export default function LinuxStudyPage() {
  return (
    <main>
      <LinuxStudyClient domains={LINUX_STUDY} />
      <PageFooter />
    </main>
  );
}
