import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-crimson/10 mb-8">
            <Construction className="w-12 h-12 text-crimson" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-foreground mb-6">
            Coming Soon
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're working hard to bring you comprehensive developer guides and documentation. Check back soon for detailed API references, integration tutorials, and best practices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              className="bg-crimson hover:bg-crimson/90 text-white rounded-full px-8 py-6 text-base font-semibold"
            >
              <a href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="rounded-full border-crimson/30 text-crimson hover:bg-crimson/10 px-8 py-6 text-base font-semibold"
            >
              <a href="tel:15056006042">Contact Support</a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Have questions in the meantime? Reach out to our team at{" "}
              <a href="mailto:support@merchanthaus.io" className="text-crimson hover:underline">
                support@merchanthaus.io
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComingSoon;
