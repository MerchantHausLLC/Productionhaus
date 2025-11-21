import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "./components/LoadingScreen";
import RouteChangeLoader from "./components/RouteChangeLoader";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Vamp = lazy(() => import("./pages/Vamp"));
const ThreeDS = lazy(() => import("./pages/ThreeDS"));
const ThreeDS2 = lazy(() => import("./pages/ThreeDS2"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Apply = lazy(() => import("./pages/Apply"));
const Security = lazy(() => import("./pages/Security"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Quote = lazy(() => import("./pages/Quote"));
const DeveloperPortal = lazy(() => import("./pages/DeveloperPortal"));
const AccountInformation = lazy(() => import("./pages/AccountInformation"));
const AddressVerification = lazy(() => import("./pages/AddressVerification"));
const AutomaticCardUpdater = lazy(() => import("./pages/AutomaticCardUpdater"));
const AutomaticLevelIII = lazy(() => import("./pages/AutomaticLevelIII"));
const BillingStatement = lazy(() => import("./pages/BillingStatement"));
const BlindCredits = lazy(() => import("./pages/BlindCredits"));
const CardIDVerification = lazy(() => import("./pages/CardIDVerification"));
const CountryCurrencyConfiguration = lazy(() => import("./pages/CountryCurrencyConfiguration"));
const CustomerFeeConfiguration = lazy(() => import("./pages/CustomerFeeConfiguration"));
const DkimSpfValidation = lazy(() => import("./pages/DkimSpfValidation"));
const EmailTemplateChanges = lazy(() => import("./pages/EmailTemplateChanges"));
const IntegrationOverview = lazy(() => import("./pages/IntegrationOverview"));
const InvoiceLookFeel = lazy(() => import("./pages/InvoiceLookFeel"));
const ManagingPartnerUsers = lazy(() => import("./pages/ManagingPartnerUsers"));
const MerchantDefinedFields = lazy(() => import("./pages/MerchantDefinedFields"));
const MerchantIPRestrictions = lazy(() => import("./pages/MerchantIPRestrictions"));
const MerchantServiceProviderContacts = lazy(() => import("./pages/MerchantServiceProviderContacts"));
const MerchantUserAccounts = lazy(() => import("./pages/MerchantUserAccounts"));
const PasswordPolicy90Day = lazy(() => import("./pages/PasswordPolicy90Day"));
const DirectConnect = lazy(() => import("./pages/DirectConnect"));
const GatewayJs = lazy(() => import("./pages/GatewayJs"));
const ReportConfiguration = lazy(() => import("./pages/ReportConfiguration"));
const SecCodeConfiguration = lazy(() => import("./pages/SecCodeConfiguration"));
const SettlementSchedule = lazy(() => import("./pages/SettlementSchedule"));
const SpfDkimRecords = lazy(() => import("./pages/SpfDkimRecords"));
const Secure3DS = lazy(() => import("./pages/Secure3DS"));
const SubscriptionReports = lazy(() => import("./pages/SubscriptionReports"));
const TestMode = lazy(() => import("./pages/TestMode"));
const TheMerchantPortal = lazy(() => import("./pages/TheMerchantPortal"));
const TransactionReports = lazy(() => import("./pages/TransactionReports"));
const TransactionRouting = lazy(() => import("./pages/TransactionRouting"));
const TwoFactorAuthentication = lazy(() => import("./pages/TwoFactorAuthentication"));
const WhatIsACH = lazy(() => import("./pages/WhatIsACH"));
const KountFraudManagement = lazy(() => import("./pages/KountFraudManagement"));
const CollectCheckout = lazy(() => import("./pages/CollectCheckout"));
const CollectJs = lazy(() => import("./pages/CollectJs"));
const CustomerPresentCloud = lazy(() => import("./pages/CustomerPresentCloud"));
const HostedPaymentPage = lazy(() => import("./pages/HostedPaymentPage"));
const MobileSDK = lazy(() => import("./pages/MobileSDK"));
const PaymentAPI = lazy(() => import("./pages/PaymentAPI"));
const PaymentDeviceSDK = lazy(() => import("./pages/PaymentDeviceSDK"));
const QueryAPI = lazy(() => import("./pages/QueryAPI"));
const ThreeStepRedirect = lazy(() => import("./pages/ThreeStepRedirect"));
const Webhooks = lazy(() => import("./pages/Webhooks"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeLoader />
          <Suspense fallback={<LoadingScreen />}>
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
