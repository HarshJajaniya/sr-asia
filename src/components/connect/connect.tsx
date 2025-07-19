"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// Static fallback jobs
const staticCurrentOpenings = [
  {
    id: 1,
    title: "Client Relationship Executive / Manager",
    location: "Ghaziabad",
    type: "Full-time",
    description:
      "Build and maintain strong client relationships while driving business growth through effective communication and service delivery.",
  },
  {
    id: 2,
    title: "Tendering Executive / Manager",
    location: "Ghaziabad",
    type: "Full-time",
    description:
      "Oversee the end-to-end tendering process, from identifying opportunities to submitting proposals, ensuring compliance and competitiveness.",
  },
  {
    id: 3,
    title: "Research Analyst ",
    location: "Ghaziabad",
    type: "Full-time",
    description:
      "Conduct in-depth research and data analysis to provide actionable insights that support strategic decision-making.",
  },
];

const staticInternships = [
  {
    id: 101,
    title: "Client Relationship Executive",
    location: "Ghaziabad",
    type: "Internship",
    description:
      "Manage and nurture client relationships to ensure satisfaction, retention, and long-term partnership growth.",
  },
  {
    id: 102,
    title: "Data Analyst Intern",
    location: "Ghaziabad",
    type: "Internship",
    description: "Work with data team to analyze program metrics...",
  },
  {
    id: 103,
    title: "Human Resource Intern",
    location: "Ghaziabad",
    type: "Internship",
    description:
      "Assist in various HR functions, including recruitment, onboarding, and employee engagement initiatives.",
  },
  {
    id: 104,
    title: "Tendering Executive",
    location: "Ghaziabad",
    type: "Internship",
    description:
      "Assist in the tendering process, including bid preparation and submission.",
  },
  {
    id: 105,
    title: "Marketing ",
    location: "Ghaziabad",
    type: "Internship",
    description:
      "Support marketing campaigns and initiatives to enhance brand visibility and engagement.",
  },
  {
    id: 106,
    title: "Research Analyst",
    location: "Ghaziabad",
    type: "Internship",
    description:
      "Conduct in-depth research and data analysis to provide actionable insights that support strategic decision-making.",
  },
];

function ApplicationForm({
  jobId,
  onClose,
}: {
  jobId: number;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    ctc: "",
    resume: null as File | null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });
      data.append("jobId", jobId.toString());
      await axios.post("https://srasia-backend.onrender.com/api/apply", data);
      alert("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        experience: "",
        ctc: "",
        resume: null,
      });
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mt-4 bg-white p-4 rounded shadow"
    >
      <input
        type="text"
        placeholder="Name"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border"
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border"
      />
      <input
        type="text"
        placeholder="Years of Experience"
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
        className="w-full p-2 border"
      />
      <input
        type="text"
        placeholder="Current CTC"
        onChange={(e) => setFormData({ ...formData, ctc: e.target.value })}
        className="w-full p-2 border"
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Resume
        </label>
        <div className="flex items-center space-x-4">
          <label className="cursor-pointer bg-[#072328] text-white px-4 py-2 rounded hover:bg-blue-700">
            Choose File
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  resume: e.target.files?.[0] || null,
                })
              }
              className="hidden"
            />
          </label>
          <span className="text-sm text-gray-700">
            {formData.resume ? formData.resume.name : "No file chosen"}
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#072328] text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-sm text-red-600 underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export function JobListings() {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"current" | "intern">("current");
  const [fetchedJobs, setFetchedJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOpenings = async () => {
    try {
      setLoading(true);
      const type = activeTab === "current" ? "job" : "internship";
      const res = await axios.get(
        `https://srasia-backend.onrender.com/api/jobs?type=${type}&_=${Date.now()}`
      );
      setFetchedJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      // If error, fallback to static data
      setFetchedJobs(activeTab === "current" ? staticCurrentOpenings : staticInternships);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOpenings();
  }, [activeTab]);

  const jobsToShow = fetchedJobs.length
    ? fetchedJobs
    : activeTab === "current"
    ? staticCurrentOpenings
    : staticInternships;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 p-4 space-y-4">
        <Button
          variant={activeTab === "current" ? "default" : "outline"}
          className="w-full"
          onClick={() => setActiveTab("current")}
        >
          Current Openings
        </Button>
        <Button
          variant={activeTab === "intern" ? "default" : "outline"}
          className="w-full"
          onClick={() => setActiveTab("intern")}
        >
          Internships
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-4 space-y-6">
          {jobsToShow.map((job) => (
            <Card key={job.id || job._id} className="bg-sky-100 border-sky-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() =>
                      setSelectedJobId(selectedJobId === job.id ? null : job.id)
                    }
                    className="bg-[#072328] text-white px-4 py-2 text-sm font-medium"
                  >
                    {selectedJobId === job.id ? "Close Form" : "Apply Now"}
                  </Button>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {job.description}
                </p>

                {/* Show Application Form */}
                {selectedJobId === job.id && (
                  <ApplicationForm
                    jobId={job.id || job._id}
                    onClose={() => setSelectedJobId(null)}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
