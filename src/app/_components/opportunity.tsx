"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestOpportunity() {
  const [latestOpportunity] = api.opportunity.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [jobTitle, setJobTitle] = useState("");
  const [url, setURL] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [baseSalary, setBaseSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const createOpportunity = api.opportunity.create.useMutation({
    onSuccess: async () => {
      await utils.opportunity.invalidate();
      setJobTitle("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestOpportunity ? (
        <p className="truncate">
          Your most recent opportunity: {latestOpportunity.jobTitle}
        </p>
      ) : (
        <p>You have no opportunities yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createOpportunity.mutate({
            jobTitle,
            url,
            companyName,
            companyDescription,
            jobDescription,
            jobType,
            location,
            baseSalary,
            benefits,
          });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createOpportunity.isPending}
        >
          {createOpportunity.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
