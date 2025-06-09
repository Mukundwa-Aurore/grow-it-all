
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Calendar,
  CheckCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    farmSize: "",
    subject: "",
    message: "",
    contactPreference: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      farmSize: "",
      subject: "",
      message: "",
      contactPreference: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Monday - Friday, 8 AM - 6 PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@agritech.com", "support@agritech.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Farm Technology Drive", "Agricultural Valley, AV 12345"],
      description: "Visit our technology center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8 AM - 6 PM", "Saturday: 9 AM - 3 PM"],
      description: "EST (Extended support available)"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "Sales Team",
      description: "Get quotes and product information",
      contact: "sales@agritech.com",
      phone: "+1 (555) 123-4567"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Equipment and software assistance",
      contact: "support@agritech.com",
      phone: "+1 (555) 123-4568"
    },
    {
      icon: MessageSquare,
      title: "Customer Success",
      description: "Account management and training",
      contact: "success@agritech.com",
      phone: "+1 (555) 123-4569"
    },
    {
      icon: Calendar,
      title: "Consulting",
      description: "Agricultural consulting services",
      contact: "consulting@agritech.com",
      phone: "+1 (555) 123-4570"
    }
  ];

  const features = [
    "24/7 Emergency Support for Critical Issues",
    "Free On-Site Consultation for New Customers",
    "Dedicated Account Manager for Enterprise Clients",
    "Comprehensive Training Programs",
    "Remote Diagnostics and Troubleshooting",
    "Multi-Language Support Available"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20 nature-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="agriculture-gradient text-white px-4 py-2">Get in Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Let's Grow{" "}
              <span className="agriculture-gradient bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Ready to transform your farming operation? Our agricultural technology experts 
              are here to help you find the perfect solutions for your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Farm Name</Label>
                      <Input
                        id="company"
                        placeholder="Enter company or farm name"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size</Label>
                      <Select onValueChange={(value) => handleInputChange("farmSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select farm size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Under 100 acres</SelectItem>
                          <SelectItem value="medium">100 - 500 acres</SelectItem>
                          <SelectItem value="large">500 - 1,000 acres</SelectItem>
                          <SelectItem value="xlarge">1,000+ acres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPreference">Preferred Contact Method</Label>
                      <Select onValueChange={(value) => handleInputChange("contactPreference", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="both">Both Email and Phone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => handleInputChange("subject", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="demo">Product Demo</SelectItem>
                        <SelectItem value="consulting">Consulting Services</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your needs, current challenges, or questions..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full agriculture-gradient hover:opacity-90 transition-opacity">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 agriculture-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-muted-foreground mb-1">
                          {detail}
                        </div>
                      ))}
                      <div className="text-sm text-muted-foreground mt-2">
                        {info.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Support Features */}
            <Card className="agriculture-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">Why Choose Our Support?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Cards */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <Badge className="agriculture-gradient text-white px-4 py-2">Our Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Contact the Right Department</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect directly with the specialists who can best help with your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 agriculture-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <dept.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <Mail className="h-3 w-3 inline mr-1" />
                      {dept.contact}
                    </div>
                    <div className="text-sm">
                      <Phone className="h-3 w-3 inline mr-1" />
                      {dept.phone}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact {dept.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-8">
            <Badge className="agriculture-gradient text-white px-4 py-2">Visit Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Our Location</h2>
          </div>

          <Card className="overflow-hidden">
            <div className="h-96 bg-muted/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold">AgriTech Headquarters</h3>
                  <p className="text-muted-foreground">123 Farm Technology Drive</p>
                  <p className="text-muted-foreground">Agricultural Valley, AV 12345</p>
                </div>
                <Button className="agriculture-gradient">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Check out our comprehensive FAQ section for quick answers to common questions 
                about our products, services, and support.
              </p>
              <Button variant="outline">
                View FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
