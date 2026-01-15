import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "./components/LoadingScreen";

/**
 * Main site pages - lazy loaded for initial bundle optimization
 */
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Vamp = lazy(() => import("./pages/Vamp"));
const Prediction2026Article = lazy(() => import("./pages/Prediction2026Article"));
const ThreeDS = lazy(() => import("./pages/ThreeDS"));
const ThreeDS2 = lazy(() => import("./pages/ThreeDS2"));
const PaymentsSurvey2025 = lazy(() => import("./pages/PaymentsSurvey2025"));
const TapToMobile = lazy(() => import("./pages/TapToMobile"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Apply = lazy(() => import("./pages/Apply"));
const Security = lazy(() => import("./pages/Security"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Quote = lazy(() => import("./pages/Quote"));

/**
 * Developer Guides and Merchant Portal pages - directly imported for instant navigation
 * These pages share the NavTree sidebar and are frequently navigated between,
 * so eliminating lazy loading provides a smoother user experience.
 */
import DeveloperPortal from "./pages/DeveloperPortal";
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
import CollectCheckout from "./pages/CollectCheckout";
import CollectJs from "./pages/CollectJs";
import CustomerPresentCloud from "./pages/CustomerPresentCloud";
import HostedPaymentPage from "./pages/HostedPaymentPage";
import MobileSDK from "./pages/MobileSDK";
import PaymentAPI from "./pages/PaymentAPI";
import PaymentDeviceSDK from "./pages/PaymentDeviceSDK";
import QueryAPI from "./pages/QueryAPI";
import ThreeStepRedirect from "./pages/ThreeStepRedirect";
import Webhooks from "./pages/Webhooks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/vamp" element={<Vamp />} />
              <Route path="/prediction-2026" element={<Prediction2026Article />} />
              <Route path="/payments-survey-2025" element={<PaymentsSurvey2025 />} />
              <Route path="/3ds" element={<ThreeDS />} />
              <Route path="/3ds2" element={<ThreeDS2 />} />
              <Route path="/tap-to-mobile" element={<TapToMobile />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/security" element={<Security />} />
              <Route path="/developer-guides" element={<DeveloperPortal />} />
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
              <Route path="/CollectCheckout" element={<CollectCheckout />} />
              <Route path="/CollectJs" element={<CollectJs />} />
              <Route path="/CustomerPresentCloud" element={<CustomerPresentCloud />} />
              <Route path="/HostedPaymentPage" element={<HostedPaymentPage />} />
              <Route path="/MobileSDK" element={<MobileSDK />} />
              <Route path="/PaymentAPI" element={<PaymentAPI />} />
              <Route path="/PaymentDeviceSDK" element={<PaymentDeviceSDK />} />
              <Route path="/QueryAPI" element={<QueryAPI />} />
              <Route path="/ThreeStepRedirect" element={<ThreeStepRedirect />} />
              <Route path="/Webhooks" element={<Webhooks />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
