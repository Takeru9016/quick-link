"use client";

import Link from "next/link";
import { BarChart, Home, Link as LinkIcon, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
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
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              href="/analytics"
            >
              <BarChart className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:text-white"
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
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>User Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="api">API</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <Button>Update Account</Button>
                </TabsContent>
                <TabsContent value="preferences" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="custom-domain">Use Custom Domain</Label>
                    <Switch id="custom-domain" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="domain">Custom Domain</Label>
                    <Input id="domain" placeholder="Enter your custom domain" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="qr-codes">Generate QR Codes</Label>
                    <Switch id="qr-codes" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="analytics">Enable Analytics</Label>
                    <Switch id="analytics" />
                  </div>
                  <Button>Save Preferences</Button>
                </TabsContent>
                <TabsContent value="api" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input id="api-key" placeholder="Your API key" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input id="webhook-url" placeholder="Enter webhook URL" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="api-access">Enable API Access</Label>
                    <Switch id="api-access" />
                  </div>
                  <Button>Update API Settings</Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
