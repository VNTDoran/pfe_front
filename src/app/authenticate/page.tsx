"use client";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import { signup } from "@/services/authService";
import { setSession, logout } from "@/services/sessionService";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        const response = await login({ email, password });
        if (response.ok) {
          setSession(email);
        } else {
          setError(await response.text());
        }
      } else {
        const response = await signup({ email, password });
        if (response.ok) {
        } else {
          setError(await response.text());
        }
      }

      router.push("/dashboard");
    } catch (error) {
      setError("An error occurred");
    }
  };
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[400px] rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <Tabs defaultValue={mode}>
              <TabsList className="mb-4 flex">
                <TabsTrigger value="login" onClick={() => setMode("login")}>
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setMode("signup")}>
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">Login</TabsContent>
              <TabsContent value="signup">Sign Up</TabsContent>
            </Tabs>
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" type="submit">
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
        {/* Error message display */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
