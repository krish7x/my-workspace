import { PolicyPageLayout } from "@/components/policy";
import { PrivacyPolicyContent } from "@/content/policies";
import { getPolicyConfig } from "@/lib/policies";

export const metadata = {
  title: getPolicyConfig("privacy-policy").metadata.title,
  description: getPolicyConfig("privacy-policy").metadata.description,
};

export default function PrivacyPolicyPage() {
  const config = getPolicyConfig("privacy-policy");

  return (
    <PolicyPageLayout title={config.pageTitle}>
      <PrivacyPolicyContent />
    </PolicyPageLayout>
  );
}
