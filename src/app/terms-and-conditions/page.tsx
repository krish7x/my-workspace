import { PolicyPageLayout } from "@/components/policy";
import { TermsAndConditionsContent } from "@/content/policies";
import { getPolicyConfig } from "@/lib/policies";

export const metadata = {
  title: getPolicyConfig("terms-and-conditions").metadata.title,
  description: getPolicyConfig("terms-and-conditions").metadata.description,
};

export default function TermsAndConditionsPage() {
  const config = getPolicyConfig("terms-and-conditions");

  return (
    <PolicyPageLayout title={config.pageTitle}>
      <TermsAndConditionsContent />
    </PolicyPageLayout>
  );
}
