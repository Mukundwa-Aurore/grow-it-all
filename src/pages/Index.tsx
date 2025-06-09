
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  Tractor, 
  Sprout, 
  BarChart3, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  Play,
  CheckCircle,
  Leaf,
  Zap,
  Target
} from "lucide-react";

const Index = () => {
  const stats = [
    { number: "10,000+", label: "Farms Served", icon: Tractor },
    { number: "50M+", label: "Acres Monitored", icon: Sprout },
    { number: "95%", label: "Yield Improvement", icon: BarChart3 },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  const services = [
    {
      icon: Leaf,
      title: "Precision Agriculture",
      description: "Advanced GPS and sensor technology for optimal crop management and resource utilization.",
      features: ["GPS Guidance", "Variable Rate Application", "Yield Mapping"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Comprehensive farm data analysis to drive informed decision-making and maximize profitability.",
      features: ["Real-time Monitoring", "Predictive Analytics", "Custom Reports"]
    },
    {
      icon: Zap,
      title: "Smart Irrigation",
      description: "Automated irrigation systems that optimize water usage based on soil moisture and weather data.",
      features: ["Soil Sensors", "Weather Integration", "Remote Control"]
    },
    {
      icon: Target,
      title: "Crop Protection",
      description: "Integrated pest and disease management solutions using AI-powered detection and treatment.",
      features: ["Early Detection", "Treatment Planning", "Organic Solutions"]
    }
  ];

  const testimonials = [
    {
      name: "John Miller",
      role: "Farm Owner",
      company: "Miller Farms",
      content: "AgriTech transformed our operation. We've seen a 30% increase in yield and 40% reduction in water usage.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "Agricultural Manager",
      company: "Green Valley Co-op",
      content: "The precision farming tools have revolutionized how we manage our 5,000-acre operation.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8b1?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 nature-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="agriculture-gradient text-white px-4 py-2">
                  🌱 Next-Gen Agriculture
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Growing the Future with{" "}
                  <span className="agriculture-gradient bg-clip-text text-transparent">
                    Smart Technology
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Revolutionize your farming operations with precision agriculture, 
                  data-driven insights, and sustainable solutions that increase yields 
                  while protecting the environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="agriculture-gradient hover:opacity-90 transition-opacity">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop" 
                  alt="Modern Agriculture" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 agriculture-gradient opacity-20"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 agriculture-gradient rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-scale hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 agriculture-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge className="agriculture-gradient text-white px-4 py-2">Our Solutions</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Comprehensive Agricultural Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From precision planting to harvest optimization, we provide end-to-end 
              solutions that transform traditional farming into intelligent agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 agriculture-gradient rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Success Stories</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">What Our Farmers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 agriculture-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of farmers who have already revolutionized their operations 
              with our cutting-edge agricultural technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
