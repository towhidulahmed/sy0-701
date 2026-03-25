import { LINUX_STUDY } from "@/lib/linux-study-data";
import { LINUX_QUESTIONS } from "@/lib/linux-questions";
import { LinuxPracticeRunner } from "@/components/linux-practice-runner";

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const domain of LINUX_STUDY) {
    for (const topic of domain.topics) {
      const count = LINUX_QUESTIONS.filter((q) => q.topicSlug === topic.slug).length;
      if (count > 0) {
        slugs.push({ slug: topic.slug });
      }
    }
  }
  return slugs;
}

export default async function LinuxPracticeTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let topicTitle = "";
  let domainName = "";

  for (const domain of LINUX_STUDY) {
    for (const topic of domain.topics) {
      if (topic.slug === slug) {
        topicTitle = topic.title;
        domainName = domain.name;
      }
    }
  }

  const questions = LINUX_QUESTIONS.filter((q) => q.topicSlug === slug);

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
