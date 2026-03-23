export const EXAM_QUESTION_COUNT = 90;
export const EXAM_DURATION_SECONDS = 90 * 60;
export const PASSING_SCORE = 750;
export const MAX_SCORE = 900;
export const MAX_MOCK_TESTS = 35;

export const DOMAIN_KEYS = [
  "general-security-concepts",
  "threats-vulnerabilities-mitigations",
  "security-architecture",
  "security-operations",
  "security-program-management-oversight",
] as const;

export const DOMAIN_COUNTS: Record<string, number> = {
  "general-security-concepts": 11,
  "threats-vulnerabilities-mitigations": 21,
  "security-architecture": 17,
  "security-operations": 25,
  "security-program-management-oversight": 16,
};
