import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 blue-gradient">
      <div className="container mx-auto max-w-4xl">
        <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <h2 className="text-4xl font-bold text-deep-blue mb-8">Contact Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-2xl" />
              </div>
              <h4 className="font-bold text-deep-blue mb-2">Call Us</h4>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-2xl" />
              </div>
              <h4 className="font-bold text-deep-blue mb-2">Email Us</h4>
              <p className="text-gray-700">info@bonvoyage.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-2xl" />
              </div>
              <h4 className="font-bold text-deep-blue mb-2">Visit Us</h4>
              <p className="text-gray-700">123 Travel Street<br/>Adventure City, AC 12345</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold text-deep-blue mb-4">Get a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="message"
                rows={4}
                placeholder="Tell us about your dream destination..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 font-semibold"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Request Quote"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
