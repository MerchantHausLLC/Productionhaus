import { useEffect, useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Archive, CheckCircle, Globe, ExternalLink } from "lucide-react";
import type { PublicMerchantApplication } from "@/types/application";

export default function WebSubmissions() {
  const [apps, setApps] = useState<PublicMerchantApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("merchant_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching:", error);
      toast({
        variant: "destructive",
        title: "Error fetching submissions",
        description: error.message,
      });
    } else {
      setApps((data as unknown) as PublicMerchantApplication[]);
    }
    setIsLoading(false);
  };

  const updateStatus = async (id: string, status: 'converted' | 'archived') => {
    const { error } = await supabase
      .from("merchant_applications")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({ variant: "destructive", title: "Update failed" });
    } else {
      toast({ 
        title: status === 'converted' ? "Application Accepted" : "Application Archived",
        description: status === 'converted' ? "This application has been marked as accepted." : "Moved to archive."
      });
      fetchApplications();
    }
  };

  return (
    <AppLayout pageTitle="Web Submissions">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Website Intake</h1>
            <p className="text-muted-foreground">Manage applications from your public website.</p>
          </div>
          <Badge variant="outline" className="gap-1 px-3 py-1">
            <Globe className="h-3 w-3" />
            Live Data
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Incoming Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : apps.length === 0 ? (
              <div className="text-center p-12 text-muted-foreground bg-muted/10 rounded-lg border border-dashed">
                <p>No new submissions found from the public website.</p>
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Business Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Volume</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {apps.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium text-muted-foreground">
                          {new Date(app.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold text-base">{app.dba_name || "Untitled"}</div>
                          <div className="text-xs text-muted-foreground">{app.nature_of_business}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col text-sm">
                            <span className="font-medium">
                              {app.dba_contact_first} {app.dba_contact_last}
                            </span>
                            <a href={`mailto:${app.dba_email}`} className="text-xs text-blue-500 hover:underline">
                              {app.dba_email}
                            </a>
                            <span className="text-xs text-muted-foreground">{app.dba_phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {app.monthly_volume
                            ? `$${Number(app.monthly_volume).toLocaleString()}`
                            : "-"}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              app.status === "converted"
                                ? "default"
                                : app.status === "archived"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              app.status === "pending" 
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200" 
                                : ""
                            }
                          >
                            {app.status.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          {app.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateStatus(app.id, "archived")}
                                title="Archive"
                              >
                                <Archive className="h-4 w-4 mr-1" />
                                Archive
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => updateStatus(app.id, "converted")}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accept
                              </Button>
                            </>
                          )}
                          {app.status !== "pending" && (
                             <Button size="sm" variant="ghost" disabled>
                               Completed
                             </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
