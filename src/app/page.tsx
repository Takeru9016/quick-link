"use client";

import Link from "next/link";

import {
  ArrowRight,
  Link as LinkIcon,
  BarChart,
  Globe,
  Zap,
  Shield,
  QrCodeIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <LinkIcon className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Quick Link</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Button variant="ghost" asChild>
              <Link href="#features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#faq">FAQ</Link>
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
 
      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-5xl font-extrabold text-gray-900">
              Shorten, Share, and Track Your Links
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Create custom short URLs, generate QR codes, and gain powerful
              insights with our advanced analytics platform.
            </p>
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="/sign-in">
                  Shorten Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
              <img
                src=""
                alt="Dashboard Preview"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Powerful Features for Your Links
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <LinkIcon className="h-6 w-6 text-blue-600" />
                    <span>Custom Short URLs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create memorable and branded short links that reflect your
                    identity.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <QrCodeIcon className="h-6 w-6 text-blue-600" />
                    <span>QR Code Generation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate QR codes for easy mobile sharing and
                    offline-to-online connections.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart className="h-6 w-6 text-blue-600" />
                    <span>Advanced Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Gain deep insights into your link performance with detailed
                    click analytics.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <span>Geographic Data</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track your audience&apos;s location to optimize your
                    marketing strategies.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-blue-600" />
                    <span>Fast Redirection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ensure quick load times with our optimized link redirection
                    system.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span>Link Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Protect your links with password protection and expiration
                    dates.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold">
                  Streamline Your Link Management
                </h2>
                <p className="mb-6 text-gray-600">
                  Manage all your short links in one place with our intuitive
                  dashboard. Organize, edit, and analyze your links
                  effortlessly.
                </p>
                <Button size="lg" asChild>
                  <Link href="/signup">Get Started for Free</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img
                  src=""
                  alt="Link Management Dashboard"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Choose Your Plan
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Basic",
                  price: "Free",
                  features: [
                    "Unlimited short links/month",
                    "Basic analytics",
                    "QR code generation",
                  ],
                },
                {
                  name: "Pro",
                  price: "$9.99/mo",
                  features: [
                    "Unlimited short links",
                    "Advanced analytics",
                    "Custom branded domains",
                    "API access",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "All Pro features",
                    "Dedicated support",
                    "Service Level Agreement",
                    "Custom integration",
                  ],
                },
              ].map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardContent className="pt-4">
                    <Button
                      className="w-full"
                      variant={plan.name === "Pro" ? "default" : "outline"}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  q: "What is a URL shortener?",
                  a: "A URL shortener is a tool that creates a short, unique URL that will redirect to the specific website of your choosing.",
                },
                {
                  q: "Are short links permanent?",
                  a: "Yes, our short links are permanent unless you choose to delete them or set an expiration date.",
                },
                {
                  q: "Can I customize my short links?",
                  a: "Yes, you can create custom short links with our Pro and Enterprise plans.",
                },
                {
                  q: "Is there an API available?",
                  a: "Yes, we offer API access with our Pro and Enterprise plans for seamless integration.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.a}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
              <p className="text-gray-400">
                Simplifying link management and analytics for businesses and
                individuals.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Quick Link. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
