// Shared FormSubmit.co helper with timeout + typed error classification.
// Used by the homepage callback form and the /contact form.

export type SubmitErrorKind = "timeout" | "offline" | "server" | "blocked" | "unknown";

export class FormSubmitError extends Error {
  kind: SubmitErrorKind;
  userMessage: string;
  constructor(kind: SubmitErrorKind, userMessage: string, message?: string) {
    super(message || userMessage);
    this.kind = kind;
    this.userMessage = userMessage;
  }
}

const ENDPOINT = "https://formsubmit.co/ajax/samsmobiletyre@gmail.com";
const TIMEOUT_MS = 15000;

export async function submitToFormSubmit(payload: Record<string, string>): Promise<void> {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new FormSubmitError(
      "offline",
      "You appear to be offline. Please check your connection and try again — or call us on +44 7949 891689.",
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _captcha: "false", _template: "table", ...payload }),
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timer);
    const isAbort = err instanceof DOMException && err.name === "AbortError";
    if (isAbort) {
      throw new FormSubmitError(
        "timeout",
        "This is taking longer than expected. Please try again, or call us on +44 7949 891689 for a faster response.",
      );
    }
    throw new FormSubmitError(
      "blocked",
      "We couldn't send your message right now. Please call or WhatsApp us on +44 7949 891689 and we'll help straight away.",
    );
  }
  clearTimeout(timer);

  const data = await res.json().catch(() => ({} as any));

  if (!res.ok) {
    throw new FormSubmitError(
      "server",
      "Something went wrong on our side. Please try again in a moment, or call +44 7949 891689.",
    );
  }
  if (data && (data.success === "false" || data.success === false)) {
    throw new FormSubmitError(
      "server",
      "We couldn't deliver your message. Please call or WhatsApp us on +44 7949 891689 — we'll respond right away.",
    );
  }
}

