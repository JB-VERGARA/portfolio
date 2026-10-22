"use client";

import { useState, useRef } from "react";
import { credentials } from "@/data/credentials";

const INITIAL_CREDENTIAL_COUNT = 3;

export default function CredentialsList() {
  const [expanded, setExpanded] = useState(false);
  const thirdCredentialRef = useRef<HTMLElement | null>(null);

  const visibleCredentials = expanded
    ? credentials
    : credentials.slice(0, INITIAL_CREDENTIAL_COUNT);

  const handleToggle = () => {
    if (expanded) {
      // Collapse first
      setExpanded(false);

      // Wait for React to remove the extra credentials,
      // then focus the 3rd credential.
      setTimeout(() => {
        thirdCredentialRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);
    } else {
      setExpanded(true);
    }
  };

  if (credentials.length === 0) {
    return (
      <div className="border border-[var(--border)] p-10">
        <p className="text-sm uppercase tracking-[0.2em] opacity-40">
          Credentials coming soon.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {visibleCredentials.map((item, index) => (
        <article
          key={item.slug}
          ref={index === 2 ? thirdCredentialRef : undefined}
          className="border border-[var(--border)] p-6 md:p-8"
        >
          <div className="flex items-start justify-between gap-6">
            <span className="text-xs uppercase tracking-[0.15em] opacity-30">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="text-xs uppercase tracking-[0.15em] opacity-40">
              {item.year}
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-xl font-medium md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm opacity-40">
                {item.issuer}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">
                {item.type}
              </span>

              {item.description && (
                <p className="mt-4 text-sm leading-relaxed opacity-50">
                  {item.description}
                </p>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-flex items-center gap-2
                    text-xs uppercase tracking-[0.15em]
                    opacity-50 transition-opacity
                    hover:opacity-100
                  "
                >
                  View Credential
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}

      {credentials.length > INITIAL_CREDENTIAL_COUNT && (
        <button
          type="button"
          onClick={handleToggle}
          className="
            mt-4 inline-flex items-center gap-3
            text-xs uppercase tracking-[0.2em]
            opacity-50 transition-opacity
            hover:opacity-100
          "
        >
          {expanded ? "See Less" : "See More"}
          <span>{expanded ? "↑" : "↓"}</span>
        </button>
      )}
    </div>
  );
}