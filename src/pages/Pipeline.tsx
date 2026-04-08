import { useEffect, useState, useMemo } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/supabase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  FileText,
  Building2,
  Phone,
  Mail,
  DollarSign,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
  XCircle,
  ShieldCheck,
  TrendingUp,
  User,
  MapPin,
} from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import type { MerchantApplication } from "@/types/database";

type PipelineStage = "submitted" | "pending" | "converted" | "archived";

const STAGE_CONFIG: Record<
  PipelineStage,
  { label: string; color: string; icon: typeof Clock }
> = {
  submitted: {
    label: "Submitted",
    color: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700",
    icon: Clock,
  },
  pending: {
    label: "Under Review",
    color: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700",
    icon: FileText,
  },
  converted: {
    label: "Approved",
    color: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-700",
    icon: CheckCircle2,
  },
  archived: {
    label: "Archived",
    color: "bg-neutral-500/15 text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-600",
    icon: XCircle,
  },
};

function getRiskLevel(app: MerchantApplication) {
  let score = 0;
  const flags: string[] = [];

  const vol = app.monthly_volume ?? 0;
  if (vol > 100000) {
    score += 2;
    flags.push("High monthly volume");
  } else if (vol > 50000) {
    score += 1;
    flags.push("Moderate monthly volume");
  }

  const highTicket = app.high_ticket ?? 0;
  if (highTicket > 5000) {
    score += 2;
    flags.push("High ticket exceeds $5,000");
  } else if (highTicket > 1000) {
    score += 1;
    flags.push("Elevated high ticket");
  }

  const ecom = app.ecom_pct ?? 0;
  if (ecom > 75) {
    score += 2;
    flags.push("Primarily e-commerce (card-not-present)");
  } else if (ecom > 50) {
    score += 1;
    flags.push("Majority e-commerce");
  }

  const keyed = app.keyed_pct ?? 0;
  if (keyed > 50) {
    score += 1;
    flags.push("High keyed entry percentage");
  }

  if (!app.website) {
    score += 1;
    flags.push("No website provided");
  }

  if (app.has_bank_statements !== "yes") {
    score += 1;
    flags.push("Bank statements not provided");
  }
  if (app.has_voided_check !== "yes") {
    score += 1;
    flags.push("Voided check not provided");
  }
  if (app.has_gov_id !== "yes") {
    score += 1;
    flags.push("Government ID not provided");
  }

  let level: "low" | "medium" | "high" = "low";
  if (score >= 5) level = "high";
  else if (score >= 3) level = "medium";

  return { level, score, flags };
}

function getDocReadiness(app: MerchantApplication) {
  const docs = [
    { key: "has_bank_statements", label: "Bank/Processing Statements" },
    { key: "has_voided_check", label: "Voided Check or Bank Letter" },
    { key: "has_gov_id", label: "Government ID" },
    { key: "has_articles_org", label: "Articles of Organization" },
    { key: "has_tax_doc", label: "Tax Document" },
  ] as const;

  return docs.map((d) => ({
    label: d.label,
    ready: (app[d.key] as string | undefined) === "yes",
  }));
}

function UnderwritingReport({ app }: { app: MerchantApplication }) {
  const risk = getRiskLevel(app);
  const docs = getDocReadiness(app);
  const docsReady = docs.filter((d) => d.ready).length;
  const totalDocs = docs.length;
  const vol = app.monthly_volume ?? 0;
  const avgTicket = app.avg_ticket ?? 0;
  const highTicket = app.high_ticket ?? 0;

  return (
    <div className="space-y-6">
      {/* Risk Assessment */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Risk Assessment
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <Badge
            variant="outline"
            className={
              risk.level === "high"
                ? "bg-red-500/15 text-red-700 dark:text-red-400 border-red-300"
                : risk.level === "medium"
                ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-300"
                : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-300"
            }
          >
            {risk.level === "high" && <AlertTriangle className="h-3 w-3 mr-1" />}
            {risk.level === "medium" && <TrendingUp className="h-3 w-3 mr-1" />}
            {risk.level === "low" && <ShieldCheck className="h-3 w-3 mr-1" />}
            {risk.level.charAt(0).toUpperCase() + risk.level.slice(1)} Risk
          </Badge>
          <span className="text-xs text-muted-foreground">Score: {risk.score}/10</span>
        </div>
        {risk.flags.length > 0 && (
          <ul className="space-y-1">
            {risk.flags.map((flag, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <ChevronRight className="h-3 w-3 mt-1 shrink-0" />
                <span className="break-words">{flag}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Business Info */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Business Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoRow icon={Building2} label="DBA Name" value={app.dba_name} />
          <InfoRow icon={Building2} label="Legal Entity" value={app.legal_entity_name} />
          <InfoRow icon={User} label="Contact" value={[app.dba_contact_first, app.dba_contact_last].filter(Boolean).join(" ")} />
          <InfoRow icon={Mail} label="Email" value={app.dba_email} />
          <InfoRow icon={Phone} label="Phone" value={app.dba_phone} />
          <InfoRow
            icon={MapPin}
            label="Address"
            value={[app.dba_address, app.dba_city, app.dba_state, app.dba_zip].filter(Boolean).join(", ")}
          />
          <InfoRow icon={Building2} label="Nature of Business" value={app.nature_of_business} />
          <InfoRow icon={Building2} label="Ownership" value={app.ownership_type} />
          {app.website && (
            <InfoRow icon={Building2} label="Website" value={app.website} />
          )}
        </div>
      </section>

      {/* Processing Profile */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Processing Profile
        </h3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 px-1 text-muted-foreground whitespace-nowrap">Monthly Volume</td>
                <td className="py-2 px-1 font-medium text-right">{vol > 0 ? `$${vol.toLocaleString()}` : "—"}</td>
              </tr>
              <tr>
                <td className="py-2 px-1 text-muted-foreground whitespace-nowrap">Avg Ticket</td>
                <td className="py-2 px-1 font-medium text-right">{avgTicket > 0 ? `$${avgTicket.toLocaleString()}` : "—"}</td>
              </tr>
              <tr>
                <td className="py-2 px-1 text-muted-foreground whitespace-nowrap">High Ticket</td>
                <td className="py-2 px-1 font-medium text-right">{highTicket > 0 ? `$${highTicket.toLocaleString()}` : "—"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Entry Method Breakdown */}
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <MiniStat label="Swiped" value={app.swiped_pct} />
          <MiniStat label="Keyed" value={app.keyed_pct} />
          <MiniStat label="MOTO" value={app.moto_pct} />
          <MiniStat label="E-com" value={app.ecom_pct} />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <MiniStat label="B2C" value={app.b2c_pct} />
          <MiniStat label="B2B" value={app.b2b_pct} />
        </div>
      </section>

      {/* Documentation Status */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Documentation ({docsReady}/{totalDocs})
        </h3>
        <ul className="space-y-2">
          {docs.map((doc) => (
            <li key={doc.label} className="flex items-center gap-2 text-sm">
              {doc.ready ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 text-red-400 shrink-0" />
              )}
              <span className={doc.ready ? "text-foreground" : "text-muted-foreground"}>
                {doc.label}
              </span>
            </li>
          ))}
        </ul>
        {app.docs_link && (
          <p className="mt-2 text-xs text-muted-foreground break-all">
            Documents: {app.docs_link}
          </p>
        )}
      </section>

      {/* Notes */}
      {app.notes && (
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Notes
          </h3>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap break-words">
            {app.notes}
          </p>
        </section>
      )}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value?: string | null;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 min-w-0">
      <Icon className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium break-words">{value}</p>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value?: number | null }) {
  const pct = value ?? 0;
  return (
    <div className="rounded-md border border-border bg-muted/30 px-3 py-2 text-center">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold">{pct}%</p>
    </div>
  );
}

export default function Pipeline() {
  const [apps, setApps] = useState<MerchantApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<MerchantApplication | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("merchant_applications")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      console.error("Error fetching:", error);
      toast({
        variant: "destructive",
        title: "Error loading pipeline",
        description: error.message,
      });
    } else {
      setApps((data as unknown) as MerchantApplication[]);
    }
    setIsLoading(false);
  };

  const grouped = useMemo(() => {
    const stages: Record<PipelineStage, MerchantApplication[]> = {
      submitted: [],
      pending: [],
      converted: [],
      archived: [],
    };
    for (const app of apps) {
      const stage = (app.status as PipelineStage) || "submitted";
      if (stages[stage]) {
        stages[stage].push(app);
      } else {
        stages.submitted.push(app);
      }
    }
    return stages;
  }, [apps]);

  return (
    <>
      <PageSEO
        title="Pipeline | MerchantHaus"
        description="Merchant application pipeline"
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Application Pipeline
            </h1>
            <p className="text-muted-foreground mt-1">
              Track merchant applications through the underwriting process.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : apps.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground border border-dashed rounded-lg">
              <p>No applications in the pipeline.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(Object.keys(STAGE_CONFIG) as PipelineStage[]).map((stage) => {
                const config = STAGE_CONFIG[stage];
                const StageIcon = config.icon;
                const stageApps = grouped[stage];

                return (
                  <div key={stage} className="space-y-3">
                    <div className="flex items-center gap-2 px-1">
                      <StageIcon className="h-4 w-4 text-muted-foreground" />
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {config.label}
                      </h2>
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {stageApps.length}
                      </Badge>
                    </div>

                    <div className="space-y-3 min-h-[120px]">
                      {stageApps.map((app) => {
                        const risk = getRiskLevel(app);
                        return (
                          <Card
                            key={app.id}
                            className="cursor-pointer transition-shadow hover:shadow-md overflow-hidden"
                            onClick={() => setSelectedApp(app)}
                          >
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-sm font-semibold truncate">
                                {app.dba_name || "Untitled"}
                              </CardTitle>
                              {app.legal_entity_name && (
                                <p className="text-xs text-muted-foreground truncate">
                                  {app.legal_entity_name}
                                </p>
                              )}
                            </CardHeader>
                            <CardContent className="p-4 pt-0 space-y-2">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <User className="h-3 w-3 shrink-0" />
                                <span className="truncate">
                                  {[app.dba_contact_first, app.dba_contact_last]
                                    .filter(Boolean)
                                    .join(" ") || "—"}
                                </span>
                              </div>
                              {(app.monthly_volume ?? 0) > 0 && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <DollarSign className="h-3 w-3 shrink-0" />
                                  <span>${Number(app.monthly_volume).toLocaleString()}/mo</span>
                                </div>
                              )}
                              <div className="flex items-center gap-2 pt-1">
                                <Badge
                                  variant="outline"
                                  className={`text-[10px] px-1.5 py-0 ${
                                    risk.level === "high"
                                      ? "border-red-300 text-red-600 dark:text-red-400"
                                      : risk.level === "medium"
                                      ? "border-amber-300 text-amber-600 dark:text-amber-400"
                                      : "border-emerald-300 text-emerald-600 dark:text-emerald-400"
                                  }`}
                                >
                                  {risk.level} risk
                                </Badge>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="ml-auto h-6 text-[10px] px-2 gap-1"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedApp(app);
                                  }}
                                >
                                  <FileText className="h-3 w-3" />
                                  Report
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Underwriting Report Modal - constrained to viewport */}
      <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] flex flex-col overflow-hidden">
          <DialogHeader className="shrink-0">
            <DialogTitle className="text-lg font-semibold pr-8">
              Underwriting Report
            </DialogTitle>
            <DialogDescription>
              {selectedApp?.dba_name || "Merchant Application"}
              {selectedApp?.status && (
                <Badge
                  variant="outline"
                  className={`ml-2 ${STAGE_CONFIG[(selectedApp.status as PipelineStage) || "submitted"]?.color || ""}`}
                >
                  {STAGE_CONFIG[(selectedApp.status as PipelineStage) || "submitted"]?.label || selectedApp.status}
                </Badge>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto flex-1 min-h-0 pr-1">
            {selectedApp && <UnderwritingReport app={selectedApp} />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
