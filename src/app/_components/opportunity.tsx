"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function AllOpportunities() {
  const [allOpportunities] =
    api.opportunity.allOpportunities.useSuspenseQuery();

  return allOpportunities ? (
    <div className="flex w-full max-w-prose rounded-lg bg-white p-4 text-black">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="text-left">Company Name</th>
            <th className="text-left">Job Title</th>
            <th className="text-center">Location</th>
            <th className="text-right">Base Salary</th>
          </tr>
        </thead>
        <tbody>
          {allOpportunities.map((opportunity) => (
            <tr key={opportunity.id} className="border-t hover:bg-gray-100">
              <td className="text-left">{opportunity.companyName}</td>
              <td className="text-left">
                <a href={opportunity.url}>{opportunity.jobTitle}</a>
              </td>
              <td className="text-center">{opportunity.location}</td>
              <td className="text-right">{opportunity.baseSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>You have no opportunities yet.</p>
  );
}

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
