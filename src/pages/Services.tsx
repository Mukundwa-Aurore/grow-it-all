
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  BarChart3, 
  Zap, 
  Target, 
  Satellite,
  CloudRain,
  Bug,
  Tractor,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "precision",
      icon: Leaf,
      title: "Precision Agriculture",
      description: "Advanced GPS and sensor technology for optimal crop management",
      longDescription: "Our precision agriculture solutions leverage cutting-edge GPS technology, IoT sensors, and data analytics to optimize every aspect of your farming operation. From variable rate seeding to targeted fertilizer application, we help you maximize efficiency while minimizing waste.",
      features: [
        "GPS-guided machinery for precise field operations",
        "Variable rate application of seeds, fertilizers, and chemicals",
        "Soil sampling and analysis for customized treatment plans",
        "Yield mapping and harvest optimization",
        "Field boundary mapping and area calculations"
      ],
      benefits: [
        "Increase crop yields by up to 25%",
        "Reduce input costs by 15-20%",
        "Minimize environmental impact",
        "Improve crop quality and consistency"
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Comprehensive farm data analysis for informed decision-making",
      longDescription: "Transform your farm data into actionable insights with our advanced analytics platform. We collect, process, and analyze data from multiple sources to provide you with real-time insights and predictive analytics that drive better farming decisions.",
      features: [
        "Real-time dashboard with key performance metrics",
        "Predictive analytics for crop health and yield forecasting",
        "Weather integration and climate analysis",
        "Financial performance tracking and profitability analysis",
        "Custom reporting and data visualization"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify trends and patterns early",
        "Optimize resource allocation",
        "Increase operational efficiency"
      ],
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=600&h=400&fit=crop"
    },
    {
      id: "irrigation",
      icon: Zap,
      title: "Smart Irrigation Systems",
      description: "Automated irrigation management based on real-time data",
      longDescription: "Our smart irrigation systems use soil moisture sensors, weather data, and crop requirements to automatically manage water application. This ensures optimal growing conditions while conserving water and reducing operational costs.",
      features: [
        "Soil moisture monitoring with wireless sensors",
        "Weather-based irrigation scheduling",
        "Remote control and monitoring via mobile app",
        "Water usage tracking and optimization",
        "Integration with existing irrigation infrastructure"
      ],
      benefits: [
        "Reduce water usage by up to 40%",
        "Improve crop health and yield",
        "Lower labor costs through automation",
        "Prevent over-watering and under-watering"
      ],
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&h=400&fit=crop"
    },
    {
      id: "protection",
      icon: Target,
      title: "Crop Protection & Health",
      description: "AI-powered pest and disease detection and management",
      longDescription: "Protect your crops with our integrated pest and disease management solutions. Using AI-powered image recognition and expert knowledge systems, we help you identify threats early and apply targeted treatments for maximum effectiveness.",
      features: [
        "Early pest and disease detection using AI",
        "Customized treatment recommendations",
        "Integrated pest management (IPM) strategies",
        "Organic and conventional treatment options",
        "Spray application optimization and timing"
      ],
      benefits: [
        "Reduce crop losses by up to 30%",
        "Minimize pesticide usage",
        "Improve crop quality",
        "Ensure sustainable farming practices"
      ],
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop"
    }
  ];

  const additionalServices = [
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "High-resolution satellite imagery for field monitoring and crop assessment"
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Hyperlocal weather forecasting and agricultural weather advisories"
    },
    {
      icon: Bug,
      title: "Pest Management",
      description: "Integrated pest management solutions with biological and chemical options"
    },
    {
      icon: Tractor,
      title: "Equipment Optimization",
      description: "Machinery performance monitoring and maintenance scheduling"
    }
  ];

  const supportFeatures = [
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 access to agricultural experts and technical support team"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of your farm operations with instant alerts"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security to protect your valuable farm data"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20 nature-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="agriculture-gradient text-white px-4 py-2">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Complete Agricultural{" "}
              <span className="agriculture-gradient bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              From precision planting to harvest optimization, our comprehensive suite 
              of services transforms traditional farming into intelligent, data-driven agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="precision" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="flex flex-col items-center space-y-2 p-4 data-[state=active]:agriculture-gradient data-[state=active]:text-white"
                >
                  <service.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.longDescription}</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Key Features</h3>
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 agriculture-gradient rounded-full"></div>
                            <span className="text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="agriculture-gradient hover:opacity-90 transition-opacity">
                      Learn More About {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute inset-0 agriculture-gradient opacity-10 rounded-2xl"></div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Additional Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Specialized Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complementary services that enhance your agricultural operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 agriculture-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Unmatched Support & Reliability</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 agriculture-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Service Packages</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold">$199<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Basic precision agriculture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Weather monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Monthly reports</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="agriculture-gradient text-white px-4 py-2">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-3xl font-bold">$499<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Full precision agriculture suite</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Smart irrigation management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 support</span>
                  </div>
                </div>
                <Button className="w-full agriculture-gradient">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">All features included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedicated support team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Training & onboarding</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 agriculture-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-white/90">
              Let our experts help you choose the right services for your operation. 
              Get a free consultation and see how we can boost your productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
