import { NMAP_STUDY } from "@/lib/nmap-study-data";
import { NMAP_QUESTIONS } from "@/lib/nmap-questions";
import { LinuxPracticeRunner } from "@/components/linux-practice-runner";

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const domain of NMAP_STUDY) {
    for (const topic of domain.topics) {
      const count = NMAP_QUESTIONS.filter((q) => q.topicSlug === topic.slug).length;
      if (count > 0) {
        slugs.push({ slug: topic.slug });
      }
    }
  }
  return slugs;
}

export default async function NmapPracticeTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let topicTitle = "";
  let domainName = "";

  for (const domain of NMAP_STUDY) {
    for (const topic of domain.topics) {
      if (topic.slug === slug) {
        topicTitle = topic.title;
        domainName = domain.name;
      }
    }
  }

  const questions = NMAP_QUESTIONS.filter((q) => q.topicSlug === slug);

  return (
    <main>
      <LinuxPracticeRunner
        topicTitle={topicTitle}
        topicSlug={slug}
        domainName={domainName}
        questions={questions}
      />
    </main>
  );
}
