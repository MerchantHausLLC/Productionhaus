import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Vamp from "./pages/Vamp";
import ThreeDS from "./pages/ThreeDS";
import ThreeDS2 from "./pages/ThreeDS2";
import AboutPage from "./pages/AboutPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Apply from "./pages/Apply";
import Security from "./pages/Security";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Quote from "./pages/Quote";
import AccountInformation from "./pages/AccountInformation";
import AddressVerification from "./pages/AddressVerification";
import AutomaticCardUpdater from "./pages/AutomaticCardUpdater";
import AutomaticLevelIII from "./pages/AutomaticLevelIII";
import BillingStatement from "./pages/BillingStatement";
import BlindCredits from "./pages/BlindCredits";
import CardIDVerification from "./pages/CardIDVerification";
import CountryCurrencyConfiguration from "./pages/CountryCurrencyConfiguration";
import CustomerFeeConfiguration from "./pages/CustomerFeeConfiguration";
import DkimSpfValidation from "./pages/DkimSpfValidation";
import EmailTemplateChanges from "./pages/EmailTemplateChanges";
import IntegrationOverview from "./pages/IntegrationOverview";
import InvoiceLookFeel from "./pages/InvoiceLookFeel";
import ManagingPartnerUsers from "./pages/ManagingPartnerUsers";
import MerchantDefinedFields from "./pages/MerchantDefinedFields";
import MerchantIPRestrictions from "./pages/MerchantIPRestrictions";
import MerchantServiceProviderContacts from "./pages/MerchantServiceProviderContacts";
import MerchantUserAccounts from "./pages/MerchantUserAccounts";
import PasswordPolicy90Day from "./pages/PasswordPolicy90Day";
import DirectConnect from "./pages/DirectConnect";
import GatewayJs from "./pages/GatewayJs";
import ReportConfiguration from "./pages/ReportConfiguration";
import SecCodeConfiguration from "./pages/SecCodeConfiguration";
import SettlementSchedule from "./pages/SettlementSchedule";
import SpfDkimRecords from "./pages/SpfDkimRecords";
import Secure3DS from "./pages/Secure3DS";
import SubscriptionReports from "./pages/SubscriptionReports";
import TestMode from "./pages/TestMode";
import TheMerchantPortal from "./pages/TheMerchantPortal";
import TransactionReports from "./pages/TransactionReports";
import TransactionRouting from "./pages/TransactionRouting";
import TwoFactorAuthentication from "./pages/TwoFactorAuthentication";
import WhatIsACH from "./pages/WhatIsACH";
import KountFraudManagement from "./pages/KountFraudManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vamp" element={<Vamp />} />
            <Route path="/3ds" element={<ThreeDS />} />
            <Route path="/3ds2" element={<ThreeDS2 />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/security" element={<Security />} />
            <Route path="/developer-guides" element={<ComingSoon />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/TheMerchantPortal" element={<TheMerchantPortal />} />
            <Route path="/IntegrationOverview" element={<IntegrationOverview />} />
            <Route path="/DirectConnect" element={<DirectConnect />} />
            <Route path="/GatewayJs" element={<GatewayJs />} />
            <Route path="/Secure3DS" element={<Secure3DS />} />
            <Route path="/KountFraudManagement" element={<KountFraudManagement />} />
            <Route path="/AccountInformation" element={<AccountInformation />} />
            <Route path="/AddressVerification" element={<AddressVerification />} />
            <Route path="/AutomaticCardUpdater" element={<AutomaticCardUpdater />} />
            <Route path="/AutomaticLevelIII" element={<AutomaticLevelIII />} />
            <Route path="/BillingStatement" element={<BillingStatement />} />
            <Route path="/BlindCredits" element={<BlindCredits />} />
            <Route path="/CardIDVerification" element={<CardIDVerification />} />
            <Route path="/CountryCurrencyConfiguration" element={<CountryCurrencyConfiguration />} />
            <Route path="/CustomerFeeConfiguration" element={<CustomerFeeConfiguration />} />
            <Route path="/DkimSpfValidation" element={<DkimSpfValidation />} />
            <Route path="/EmailTemplateChanges" element={<EmailTemplateChanges />} />
            <Route path="/InvoiceLookFeel" element={<InvoiceLookFeel />} />
            <Route path="/ManagingPartnerUsers" element={<ManagingPartnerUsers />} />
            <Route path="/MerchantDefinedFields" element={<MerchantDefinedFields />} />
            <Route path="/MerchantIPRestrictions" element={<MerchantIPRestrictions />} />
            <Route path="/MerchantServiceProviderContacts" element={<MerchantServiceProviderContacts />} />
            <Route path="/MerchantUserAccounts" element={<MerchantUserAccounts />} />
            <Route path="/PasswordPolicy90Day" element={<PasswordPolicy90Day />} />
            <Route path="/ReportConfiguration" element={<ReportConfiguration />} />
            <Route path="/SecCodeConfiguration" element={<SecCodeConfiguration />} />
            <Route path="/SettlementSchedule" element={<SettlementSchedule />} />
            <Route path="/SpfDkimRecords" element={<SpfDkimRecords />} />
            <Route path="/SubscriptionReports" element={<SubscriptionReports />} />
            <Route path="/TestMode" element={<TestMode />} />
            <Route path="/TransactionReports" element={<TransactionReports />} />
            <Route path="/TransactionRouting" element={<TransactionRouting />} />
            <Route path="/TwoFactorAuthentication" element={<TwoFactorAuthentication />} />
            <Route path="/WhatIsACH" element={<WhatIsACH />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
