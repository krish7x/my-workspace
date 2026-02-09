import { PolicyPageLayout } from "@/components/policy";
import { RefundPolicyContent } from "@/content/policies";
import { getPolicyConfig } from "@/lib/policies";

export const metadata = {
  title: getPolicyConfig("refund-policy").metadata.title,
  description: getPolicyConfig("refund-policy").metadata.description,
};

export default function RefundPolicyPage() {
  const config = getPolicyConfig("refund-policy");

  return (
    <PolicyPageLayout title={config.pageTitle}>
      <RefundPolicyContent />
    </PolicyPageLayout>
  );
}
