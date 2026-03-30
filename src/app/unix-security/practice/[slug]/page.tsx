import { UNIX_SECURITY_STUDY } from "@/lib/unix-security-study-data";
import { UNIX_SECURITY_QUESTIONS } from "@/lib/unix-security-questions";
import { UnixSecurityPracticeRunner } from "@/components/unix-security-practice-runner";

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const domain of UNIX_SECURITY_STUDY) {
    for (const topic of domain.topics) {
      const count = UNIX_SECURITY_QUESTIONS.filter((q) => q.topicSlug === topic.slug).length;
      if (count > 0) {
        slugs.push({ slug: topic.slug });
      }
    }
  }
  return slugs;
}

export default async function UnixSecurityPracticeTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let topicTitle = "";
  let domainName = "";

  for (const domain of UNIX_SECURITY_STUDY) {
    for (const topic of domain.topics) {
      if (topic.slug === slug) {
        topicTitle = topic.title;
        domainName = domain.name;
      }
    }
  }

  const questions = UNIX_SECURITY_QUESTIONS.filter((q) => q.topicSlug === slug);

  return (
    <main>
      <UnixSecurityPracticeRunner
        topicTitle={topicTitle}
        topicSlug={slug}
        domainName={domainName}
        questions={questions}
      />
    </main>
  );
}
