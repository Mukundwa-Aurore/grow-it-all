
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Tractor, 
  Smartphone, 
  Satellite,
  Droplets,
  ArrowRight,
  Star,
  ShoppingCart,
  Eye,
  Wifi,
  Battery,
  Shield,
  Zap
} from "lucide-react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: "equipment", label: "Farm Equipment", icon: Tractor },
    { id: "sensors", label: "IoT Sensors", icon: Wifi },
    { id: "software", label: "Software Solutions", icon: Smartphone },
    { id: "drones", label: "Drones & Satellites", icon: Satellite }
  ];

  const products = {
    equipment: [
      {
        id: 1,
        name: "AgriBot Pro X1",
        category: "Autonomous Tractor",
        price: "$125,000",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
        description: "Fully autonomous tractor with GPS guidance and AI-powered decision making",
        features: [
          "GPS precision to 2cm accuracy",
          "AI-powered crop recognition",
          "Autonomous planting, cultivating, and harvesting",
          "Real-time soil analysis",
          "Remote monitoring and control"
        ],
        specs: {
          "Engine Power": "350 HP",
          "Working Width": "12 meters",
          "Fuel Capacity": "800 liters",
          "Precision": "±2cm GPS accuracy"
        }
      },
      {
        id: 2,
        name: "SmartSprayer 2000",
        category: "Precision Sprayer",
        price: "$85,000",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
        description: "Variable rate sprayer with AI-powered target detection",
        features: [
          "Variable rate application",
          "Weed detection AI",
          "Drift reduction technology",
          "Tank mix compatibility",
          "GPS boom section control"
        ],
        specs: {
          "Tank Capacity": "4000 liters",
          "Boom Width": "36 meters",
          "Application Rate": "50-800 L/ha",
          "Accuracy": "±3% flow rate"
        }
      }
    ],
    sensors: [
      {
        id: 3,
        name: "SoilSense Pro",
        category: "Soil Monitoring",
        price: "$299",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=400&h=300&fit=crop",
        description: "Wireless soil sensor for moisture, temperature, and nutrient monitoring",
        features: [
          "Real-time soil moisture monitoring",
          "Temperature and pH sensing",
          "Nutrient level detection",
          "Wireless data transmission",
          "5-year battery life"
        ],
        specs: {
          "Depth Range": "0-100cm",
          "Battery Life": "5 years",
          "Transmission": "LoRaWAN",
          "Accuracy": "±2% moisture"
        }
      },
      {
        id: 4,
        name: "WeatherStation Ultra",
        category: "Weather Monitoring",
        price: "$1,299",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop",
        description: "Professional weather station with hyperlocal forecasting",
        features: [
          "Wind speed and direction",
          "Temperature and humidity",
          "Rainfall measurement",
          "Solar radiation sensor",
          "Lightning detection"
        ],
        specs: {
          "Range": "10km radius",
          "Update Frequency": "Every 5 minutes",
          "Power": "Solar + battery backup",
          "Connectivity": "4G LTE + WiFi"
        }
      }
    ],
    software: [
      {
        id: 5,
        name: "FarmOS Enterprise",
        category: "Farm Management",
        price: "$49/month",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
        description: "Complete farm management software with analytics and planning",
        features: [
          "Field mapping and planning",
          "Crop rotation management",
          "Financial tracking",
          "Equipment maintenance logs",
          "Compliance reporting"
        ],
        specs: {
          "Users": "Unlimited",
          "Storage": "1TB cloud storage",
          "Support": "24/7 chat support",
          "Mobile": "iOS & Android apps"
        }
      },
      {
        id: 6,
        name: "CropVision AI",
        category: "Crop Analytics",
        price: "$29/month",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop",
        description: "AI-powered crop health monitoring and disease detection",
        features: [
          "Disease detection algorithms",
          "Pest identification",
          "Growth stage tracking",
          "Yield prediction",
          "Treatment recommendations"
        ],
        specs: {
          "Accuracy": "95% disease detection",
          "Crops Supported": "25+ crop types",
          "Image Processing": "Real-time AI analysis",
          "Integration": "API & webhooks"
        }
      }
    ],
    drones: [
      {
        id: 7,
        name: "AgroDrone X5",
        category: "Survey Drone",
        price: "$12,500",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=300&fit=crop",
        description: "Professional agricultural drone with multispectral imaging",
        features: [
          "Multispectral camera system",
          "45-minute flight time",
          "Automated flight planning",
          "Real-time data processing",
          "Weather resistant design"
        ],
        specs: {
          "Flight Time": "45 minutes",
          "Coverage": "200 acres per flight",
          "Camera": "5-band multispectral",
          "Weight": "4.2 kg"
        }
      },
      {
        id: 8,
        name: "SatLink Pro",
        category: "Satellite Service",
        price: "$199/month",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
        description: "High-resolution satellite imagery and analysis service",
        features: [
          "Weekly satellite updates",
          "NDVI analysis",
          "Change detection",
          "Historical comparisons",
          "Export to GIS formats"
        ],
        specs: {
          "Resolution": "3-meter pixels",
          "Update Frequency": "Weekly",
          "Coverage": "Global",
          "Archive": "10+ years historical data"
        }
      }
    ]
  };

  const ProductCard = ({ product }) => (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white text-primary">
            <Star className="h-3 w-3 mr-1 fill-current" />
            {product.rating}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{product.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-primary">{product.price}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">{product.description}</p>
        
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{product.name}</DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                      <div className="space-y-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 agriculture-gradient rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">{product.price}</div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-muted-foreground">rating</span>
                    </div>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                    <div className="space-y-2">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full agriculture-gradient">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Request Quote
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button size="sm" className="agriculture-gradient flex-1">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20 nature-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="agriculture-gradient text-white px-4 py-2">Our Products</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Cutting-Edge{" "}
              <span className="agriculture-gradient bg-clip-text text-transparent">
                Agricultural Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Discover our comprehensive range of agricultural equipment, sensors, 
              software, and drones designed to revolutionize modern farming operations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="equipment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center space-y-2 p-4 data-[state=active]:agriculture-gradient data-[state=active]:text-white"
                >
                  <category.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">{category.label}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Professional-grade {category.label.toLowerCase()} designed for maximum 
                      efficiency and reliability in agricultural operations.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products[category.id]?.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Featured</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Best Selling Products</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop"
                    alt="Featured Product"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-2">Bestseller</Badge>
                    <h3 className="text-2xl font-bold">AgriBot Pro X1</h3>
                    <p className="text-muted-foreground">The future of autonomous farming</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground">(127 reviews)</span>
                  </div>
                  
                  <div className="text-3xl font-bold text-primary">$125,000</div>
                  
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm">AI-Powered Automation</span>
                    </div>
                    <div className="flex space-x-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm">2-Year Warranty</span>
                    </div>
                    <div className="flex space-x-2">
                      <Battery className="h-4 w-4 text-primary" />
                      <span className="text-sm">24/7 Support</span>
                    </div>
                  </div>
                  
                  <Button className="w-full agriculture-gradient">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 agriculture-gradient rounded-full mx-auto flex items-center justify-center">
                    <Droplets className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Smart Irrigation</h3>
                    <p className="text-muted-foreground">Save up to 40% water</p>
                  </div>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 agriculture-gradient rounded-full mx-auto flex items-center justify-center">
                    <Satellite className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Satellite Analytics</h3>
                    <p className="text-muted-foreground">Real-time field monitoring</p>
                  </div>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="agriculture-gradient text-white px-4 py-2">Why Choose Our Products</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Built for Real Farms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 agriculture-gradient rounded-lg mx-auto flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Proven Reliability</h3>
              <p className="text-muted-foreground text-sm">Field-tested by thousands of farmers worldwide</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 agriculture-gradient rounded-lg mx-auto flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Easy Integration</h3>
              <p className="text-muted-foreground text-sm">Seamlessly works with existing farm equipment</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 agriculture-gradient rounded-lg mx-auto flex items-center justify-center">
                <Battery className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Expert Support</h3>
              <p className="text-muted-foreground text-sm">24/7 technical support and training included</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 agriculture-gradient rounded-lg mx-auto flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Future-Ready</h3>
              <p className="text-muted-foreground text-sm">Regular updates and new feature releases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 agriculture-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Upgrade Your Farm?
            </h2>
            <p className="text-xl text-white/90">
              Speak with our agricultural technology experts to find the perfect 
              solutions for your farming operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
