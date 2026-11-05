import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [ref, isInView] = useInView({ triggerOnce: true });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitting");

    window.setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="bg-grid-soft absolute inset-0 bg-[length:30px_30px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="mb-6 text-4xl font-bold">Let's Work Together</h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? Feel free to reach
              out. I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <Card className="border-white/10 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      {portfolioData.profile.email}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      {portfolioData.profile.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <Card className="border-white/10 bg-card/40 p-8 shadow-2xl backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="border-white/10 bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border-white/10 bg-background/50"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="border-white/10 bg-background/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none border-white/10 bg-background/50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="group w-full bg-primary hover:bg-primary/90"
                  disabled={status === "submitting" || status === "success"}
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <span className="flex items-center gap-2">
                      Message Sent <CheckCircle className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 transition-transform group-hover:translate-x-1">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
