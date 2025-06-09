
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Globe, 
  Leaf, 
  Target, 
  Heart,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to environmentally responsible farming practices that preserve our planet for future generations."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology to solve agriculture's most pressing challenges."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Supporting farming communities worldwide with accessible solutions and expert guidance."
    }
  ];

  const milestones = [
    { year: "2015", event: "AgriTech founded with a vision to revolutionize farming" },
    { year: "2017", event: "Launched first precision agriculture platform" },
    { year: "2019", event: "Reached 1,000 farms served milestone" },
    { year: "2021", event: "Introduced AI-powered crop monitoring system" },
    { year: "2023", event: "Expanded to serve 10,000+ farms globally" },
    { year: "2024", event: "Pioneering sustainable agriculture initiatives" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former NASA engineer with 15+ years in agricultural technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8b1?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Software architect specializing in IoT and machine learning applications",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "Agricultural scientist with expertise in sustainable farming practices",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      role: "VP of Operations",
      bio: "Former farm manager with deep understanding of agricultural challenges",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20 nature-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="agriculture-gradient text-white px-4 py-2">About AgriTech</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Cultivating Innovation for{" "}
              <span className="agriculture-gradient bg-clip-text text-transparent">
                Sustainable Agriculture
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Founded in 2015, AgriTech has been at the forefront of agricultural innovation, 
              helping farmers worldwide increase productivity while preserving our planet's 
              precious resources through smart technology and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower farmers with intelligent technology that maximizes crop yields, 
                  minimizes environmental impact, and ensures food security for a growing 
                  global population. We believe technology and nature can work in harmony 
                  to create a sustainable agricultural future.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Increase farm productivity by up to 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Reduce water usage through smart irrigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Minimize chemical inputs with precision application</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Support sustainable farming practices</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop" 
                alt="Sustainable farming" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-muted-foreground">Acres Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Our Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">What Drives Us Forward</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we develop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 agriculture-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Our Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Milestones & Achievements</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center space-x-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Meet Our Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">The Minds Behind AgriTech</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team combines decades of experience in agriculture, technology, 
              and sustainability to drive innovation in farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Farms Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50M</div>
              <div className="text-muted-foreground">Acres Monitored</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 agriculture-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90">
              Be part of the agricultural revolution. Let's work together to create 
              a more sustainable and productive future for farming.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
