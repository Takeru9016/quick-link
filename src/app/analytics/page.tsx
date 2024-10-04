"use client";

import {
  BarChart,
  Download,
  Globe,
  Home,
  Link as LinkIcon,
  PieChart,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="flex w-64 flex-col border-r bg-white dark:bg-gray-800">
        <div className="p-6">
          <Link
            className="flex items-center space-x-2 text-xl font-bold"
            href="/dashboard"
          >
            <LinkIcon className="h-6 w-6" />
            <span>Quick Link</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <div className="space-y-2 px-4">
            <Link
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              href="/dashboard"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:text-white"
              href="/analytics"
            >
              <BarChart className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              href="/settings"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300">
            <User className="h-5 w-5" />
            <span>John Doe</span>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto space-y-8 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Detailed insights for your shortened URL: short.link/abc123
              </p>
            </div>
            <Select defaultValue="7d">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Link Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Original URL</Label>
                  <p className="text-sm font-medium">
                    https://example.com/very-long-url-that-needs-shortening
                  </p>
                </div>
                <div>
                  <Label>Short URL</Label>
                  <p className="text-sm font-medium">
                    https://short.link/abc123
                  </p>
                </div>
                <div>
                  <Label>Created On</Label>
                  <p className="text-sm font-medium">April 1, 2023</p>
                </div>
                <div>
                  <Label>Last Click</Label>
                  <p className="text-sm font-medium">2 hours ago</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <img
                    alt="QR Code"
                    className="h-48 w-48"
                    height="192"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "192/192",
                      objectFit: "cover",
                    }}
                    width="192"
                  />
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download QR Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Clicks
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Unique Visitors
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">892</div>
                <p className="text-xs text-muted-foreground">
                  +12.3% from last period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Avg. Click Time
                </CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">00:42</div>
                <p className="text-xs text-muted-foreground">
                  -5.1% from last period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Top Referrer
                </CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">google.com</div>
                <p className="text-xs text-muted-foreground">
                  30% of total traffic
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
