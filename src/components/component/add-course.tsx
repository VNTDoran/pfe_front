"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { insertCourse } from "@/services/courseService";

export function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    crnp: "",
    domain: "",
    competencies: "",
    audience: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertCourse(courseData);
    } catch (error) {
      console.error("Failed to save course:", error);
    }
    setCourseData({
      title: "",
      crnp: "",
      domain: "",
      competencies: "",
      audience: "",
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Course</CardTitle>
        <CardDescription>
          Fill out the form to create a new course.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                name="title"
                value={courseData.title}
                onChange={handleInputChange}
                placeholder="Enter course title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="crnp">CRNP Code</Label>
              <Input
                id="crnp"
                name="crnp"
                value={courseData.crnp}
                onChange={handleInputChange}
                placeholder="Enter CRNP code"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Training Domain</Label>
            <Input
              id="domain"
              name="domain"
              value={courseData.domain}
              onChange={handleInputChange}
              placeholder="Enter training domain"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="competencies">Developed Competencies</Label>
            <Textarea
              className="min-h-[100px]"
              id="competencies"
              name="competencies"
              value={courseData.competencies}
              onChange={handleInputChange}
              placeholder="List the competencies developed in this course"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="audience">Target Audience</Label>
            <Input
              id="audience"
              name="audience"
              value={courseData.audience}
              onChange={handleInputChange}
              placeholder="Enter target audience"
            />
          </div>
          <Button type="submit">Save Course</Button>
        </form>
      </CardContent>
    </Card>
  );
}
