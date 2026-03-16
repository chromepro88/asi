"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrackedButtonLink } from "@/components/TrackedButtonLink";

type HomePricingSectionProps = {
  pricingFeatures: readonly string[];
};

export function HomePricingSection({
  pricingFeatures,
}: HomePricingSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTrackedViewRef = useRef(false);
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasTrackedViewRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasTrackedViewRef.current) {
          return;
        }

        hasTrackedViewRef.current = true;
        track("pricing_view", {
          location: "homepage",
          selected_plan: selectedPlan,
        });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [selectedPlan]);

  const handlePlanChange = (value: string) => {
    setSelectedPlan(value);
    track("pricing_plan_selected", {
      location: "homepage",
      selected_plan: value,
    });
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-white"
      aria-labelledby="pricing-heading"
    >
      <div className="container px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-gray-900"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto">
            Everything you need to automate your WhatsApp
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Tabs
            defaultValue="monthly"
            value={selectedPlan}
            onValueChange={handlePlanChange}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100 p-1 border-0">
                <TabsTrigger
                  value="monthly"
                  className="text-base font-semibold rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  className="text-base font-semibold rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Yearly{" "}
                  <span className="ml-1 text-xs text-green-600 font-bold">
                    SAVE 30%
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly" className="mt-0">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-white text-gray-900 text-center py-10 px-6 border-b border-gray-100">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-6xl font-bold tracking-tight">$99</span>
                  </div>
                  <p className="text-gray-500 text-lg font-medium">per month</p>
                </div>

                <div className="p-8 md:p-10 bg-gray-50/50">
                  <div className="space-y-5 mb-10">
                    {pricingFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-green-600 text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <TrackedButtonLink
                    href="https://aisupersg.com/signup"
                    eventName="pricing_monthly_cta_click"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-7 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Get Started Now
                  </TrackedButtonLink>

                  <p className="text-center text-gray-500 text-sm mt-6 font-medium">
                    Get started today
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="yearly" className="mt-0">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-600 relative transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-2 bg-blue-600"></div>
                <div className="bg-white text-gray-900 text-center py-10 px-6 border-b border-gray-100">
                  <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-md">
                    Best Value - Save $360/year
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-6xl font-bold tracking-tight text-blue-600">
                      $69
                    </span>
                    <span className="text-2xl text-gray-400 line-through font-medium">
                      $99
                    </span>
                  </div>
                  <p className="text-gray-500 text-lg font-medium">
                    per month, billed annually
                  </p>
                  <p className="text-green-600 text-sm mt-2 font-bold">
                    ($828/year instead of $1,188)
                  </p>
                </div>

                <div className="p-8 md:p-10 bg-blue-50/30">
                  <div className="space-y-5 mb-10">
                    {pricingFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-700 text-lg font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <TrackedButtonLink
                    href="https://aisupersg.com/signup"
                    eventName="pricing_yearly_cta_click"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Get Started Now
                  </TrackedButtonLink>

                  <p className="text-center text-gray-500 text-sm mt-6 font-medium">
                    Get started today
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mt-8">
          <span className="flex items-center gap-2">
            <span className="text-green-500">🔒</span>
            SSL Secured
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-500">💳</span>
            Secure Payment
          </span>
        </div>
      </div>
    </section>
  );
}
