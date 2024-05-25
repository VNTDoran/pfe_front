"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchAssignment } from "../../services/courseService";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Assignment({ searchParams }) {
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    async function loadAssignment() {
      try {
        const resonse = await fetchAssignment(searchParams.id);
        const data = await resonse.text();
        setAssignment(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    loadAssignment();
  }, [searchParams.id]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", searchParams.id);

    try {
      const response = await fetch(
        "http://localhost:8089/pfe/api/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      alert("File uploaded successfully!");
    } catch (error) {
      alert("Error uploading file: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <Card className="w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Submit Assignment</CardTitle>
            <CardDescription>
              Upload your assignment as a document or PDF file.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-medium">Assignment Title</h3>
                <p className="text-gray-500 dark:text-gray-400">{assignment}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">File Preview</h3>
                <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md h-[200px]">
                  {fileName ? (
                    <p>{fileName}</p>
                  ) : (
                    <FileIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
              </div>
              <div>
                <input
                  className=""
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </CardContent>
          <div className="flex items-center p-6 pt-0">
            <CardFooter className="">
              <Button type="submit">Submit Assignment</Button>
            </CardFooter>
            <CardFooter className="">
              <Link
                className="h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/dashboard"
              >
                Back to Dashboard
              </Link>
            </CardFooter>
          </div>
        </form>
      </Card>
    </div>
  );
}

function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
