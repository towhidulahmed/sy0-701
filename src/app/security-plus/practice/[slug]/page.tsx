import { STATIC_SYLLABUS } from "@/lib/static-syllabus";
import { getQuestionsByTopicSlug } from "@/lib/exam";
import { PracticeRunner } from "@/components/practice-runner";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

// Pre-generate all topic slugs
export function generateStaticParams() {
  return STATIC_SYLLABUS.flatMap((domain) =>
    domain.topics.map((topic) => ({ slug: topic.slug }))
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PracticeTopicPage({ params }: Props) {
  const { slug } = await params;

  // Find topic metadata
  let topicTitle = "";
  let domainName = "";
  for (const domain of STATIC_SYLLABUS) {
    const topic = domain.topics.find((t) => t.slug === slug);
    if (topic) {
      topicTitle = topic.title;
      domainName = domain.name;
      break;
    }
  }

  if (!topicTitle) {
    notFound();
  }

  const questions = getQuestionsByTopicSlug(slug);

  return (
    <main>
      <PracticeRunner
        topicTitle={topicTitle}
        topicSlug={slug}
        domainName={domainName}
        questions={questions}
      />
    </main>
  );
}
