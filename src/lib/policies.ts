/**
 * Policy page registry and utilities.
 * Add new policies here to keep the system extensible.
 */

export type PolicySlug = "privacy-policy" | "refund-policy" | "terms-and-conditions";

export interface PolicyMetadata {
  title: string;
  description: string;
}

export const POLICY_REGISTRY: Record<
  PolicySlug,
  {
    metadata: PolicyMetadata;
    pageTitle: string;
  }
> = {
  "privacy-policy": {
    metadata: {
      title: "Privacy Policy | PassX Global Immigration",
      description:
        "Privacy Policy of PassX Immigration. Learn how we handle your personal information and data protection.",
    },
    pageTitle: "Privacy Policy",
  },
  "refund-policy": {
    metadata: {
      title: "Refund Policy | PassX Global Immigration",
      description:
        "Refund and Cancellation Policies of PassX Immigration. Learn about our refund eligibility criteria and terms.",
    },
    pageTitle: "Refund Policy",
  },
  "terms-and-conditions": {
    metadata: {
      title: "Terms and Conditions | PassX Global Immigration",
      description:
        "Terms and Conditions of PassX Immigration. Our terms of use, refund policy, data protection, and service agreements.",
    },
    pageTitle: "Terms and Conditions",
  },
};

export function getPolicyConfig(slug: PolicySlug) {
  return POLICY_REGISTRY[slug];
}

export function getAllPolicySlugs(): PolicySlug[] {
  return Object.keys(POLICY_REGISTRY) as PolicySlug[];
}
