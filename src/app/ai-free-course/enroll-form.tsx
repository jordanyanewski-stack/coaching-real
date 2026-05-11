"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackLead } from "@/app/pixel";

interface FreeDayEnrollFormProps {
  variant?: "light" | "dark";
}

export function FreeDayEnrollForm({ variant = "light" }: FreeDayEnrollFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-free-course/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Нещо се обърка. Опитай отново.");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Нещо се обърка. Опитай отново.";
      setError(msg);
      setLoading(false);
      return;
    }

    trackLead("AI Free Day");

    const params = new URLSearchParams({ name, email });
    router.push(`/ai-free-course/thank-you?${params.toString()}`);
  }

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: isDark ? "rgba(255,255,255,0.08)" : "#ffffff",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.18)" : "rgba(10,37,64,0.16)"}`,
    borderRadius: "4px",
    fontFamily: "inherit",
    fontSize: "15px",
    color: isDark ? "#ffffff" : "#0a2540",
    outline: "none",
    transition: "border-color 0.18s",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 28px",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    color: "#ffffff",
    fontFamily: "inherit",
    fontSize: "15px",
    fontWeight: 700,
    border: "none",
    borderRadius: "4px",
    cursor: loading ? "wait" : "pointer",
    letterSpacing: "0.01em",
    boxShadow: "0 8px 22px rgba(37,99,235,0.30)",
    transition: "transform 0.15s, box-shadow 0.15s",
    opacity: loading ? 0.75 : 1,
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "440px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          required
          placeholder="Твоето име"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={fieldStyle}
          disabled={loading}
        />
        <input
          type="email"
          required
          placeholder="твоя@имейл.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={fieldStyle}
          disabled={loading}
        />
        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? "Изпращам..." : "Запиши се →"}
        </button>
      </div>
      {error && (
        <p style={{ color: "#dc2626", fontSize: "13px", marginTop: "8px" }}>
          {error}
        </p>
      )}
      <p
        style={{
          fontSize: "12px",
          color: isDark ? "rgba(255,255,255,0.45)" : "#64748b",
          marginTop: "10px",
          letterSpacing: "0.01em",
        }}
      >
        Сигурно записване · Отписване по всяко време
      </p>
    </form>
  );
}
