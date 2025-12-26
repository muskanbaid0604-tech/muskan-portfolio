"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear submit status when user starts editing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[480px] bg-primary text-primary-foreground px-4 sm:px-8 py-8 sm:py-12 lg:px-16 border-b border-black/60"
    >
      <div className="grid sm:grid-cols-2 max-sm:gap-6">
        {/* Left Column - Info */}
        <div className="flex  flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Let's <i className="-ms-1">Create</i> Something <br />
              <span className="font-medium">Together</span>
            </h2>
            <p className="text-sm max-w-sm tracking-tight text-muted">
              Have a project in mind or just want to say hello? Drop me a
              message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4 max-w-sm">
            <div>
              <h3 className="text-lg font-medium mb-2">Get in Touch</h3>
              <p className="text-sm text-muted">
                Whether you need branding, digital design, or social media
                management, I'm here to help bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex bg-secondary text-secondary-foreground p-4 sm:p-6 lg:p-8 xl:p-12 flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Field data-invalid={!!errors.name}>
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  disabled={isSubmitting}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </FieldContent>
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldContent>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  disabled={isSubmitting}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </FieldContent>
            </Field>

            <Field data-invalid={!!errors.message}>
              <FieldContent>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  disabled={isSubmitting}
                  rows={5}
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </FieldContent>
            </Field>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send />
                  Send Message
                </>
              )}
            </Button>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="flex bg-green-50 border-green-600 border p-2 rounded-2xl items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle2 className="size-5" />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex bg-red-50 border-red-600 border p-2 rounded-2xl items-center gap-2 text-sm text-red-600 dark:text-red-400">
                <XCircle className="size-5" />
                <p>Something went wrong. Please try again later.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
