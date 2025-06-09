
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Droplets,
  Thermometer,
  Wind,
  Sun,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Activity,
  BarChart3,
  Leaf,
  Tractor
} from "lucide-react";

const Dashboard = () => {
  const [selectedField, setSelectedField] = useState("north-field");

  const farmStats = [
    {
      title: "Total Acreage",
      value: "2,450",
      unit: "acres",
      change: "+5.2%",
      trending: "up",
      icon: MapPin,
      color: "text-agriculture-green"
    },
    {
      title: "Active Fields",
      value: "12",
      unit: "fields",
      change: "+2",
      trending: "up",
      icon: Leaf,
      color: "text-agriculture-light-green"
    },
    {
      title: "Equipment Status",
      value: "8/10",
      unit: "operational",
      change: "-1",
      trending: "down",
      icon: Tractor,
      color: "text-agriculture-earth"
    },
    {
      title: "Water Usage",
      value: "15,250",
      unit: "gallons",
      change: "-12.3%",
      trending: "down",
      icon: Droplets,
      color: "text-agriculture-sky"
    }
  ];

  const fields = [
    {
      id: "north-field",
      name: "North Field",
      crop: "Corn",
      acreage: 320,
      plantingDate: "2024-04-15",
      expectedHarvest: "2024-09-20",
      health: 92,
      moisture: 68,
      temperature: 72,
      status: "Excellent",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop"
    },
    {
      id: "south-field",
      name: "South Field",
      crop: "Soybeans",
      acreage: 275,
      plantingDate: "2024-05-01",
      expectedHarvest: "2024-10-15",
      health: 87,
      moisture: 45,
      temperature: 74,
      status: "Good",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=300&h=200&fit=crop"
    },
    {
      id: "east-field",
      name: "East Field",
      crop: "Wheat",
      acreage: 180,
      plantingDate: "2024-03-20",
      expectedHarvest: "2024-08-10",
      health: 78,
      moisture: 52,
      temperature: 69,
      status: "Needs Attention",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=300&h=200&fit=crop"
    }
  ];

  const weatherData = {
    current: {
      temperature: 72,
      humidity: 65,
      windSpeed: 8,
      conditions: "Partly Cloudy"
    },
    forecast: [
      { day: "Today", high: 75, low: 62, condition: "Sunny", precipitation: 0 },
      { day: "Tomorrow", high: 73, low: 59, condition: "Cloudy", precipitation: 20 },
      { day: "Thursday", high: 71, low: 58, condition: "Rain", precipitation: 80 },
      { day: "Friday", high: 74, low: 60, condition: "Sunny", precipitation: 10 }
    ]
  };

  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "Low Soil Moisture",
      description: "East Field moisture levels below optimal range",
      field: "East Field",
      time: "2 hours ago",
      priority: "medium"
    },
    {
      id: 2,
      type: "success",
      title: "Irrigation Complete",
      description: "North Field irrigation cycle completed successfully",
      field: "North Field",
      time: "4 hours ago",
      priority: "low"
    },
    {
      id: 3,
      type: "alert",
      title: "Equipment Maintenance",
      description: "Tractor #3 requires scheduled maintenance",
      field: "Equipment",
      time: "1 day ago",
      priority: "high"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent": return "text-green-600 bg-green-100";
      case "Good": return "text-blue-600 bg-blue-100";
      case "Needs Attention": return "text-orange-600 bg-orange-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "warning": return AlertTriangle;
      case "success": return CheckCircle;
      case "alert": return AlertTriangle;
      default: return AlertTriangle;
    }
  };

  const getAlertColor = (priority) => {
    switch (priority) {
      case "high": return "border-red-200 bg-red-50";
      case "medium": return "border-orange-200 bg-orange-50";
      case "low": return "border-green-200 bg-green-50";
      default: return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Farm Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening on your farm today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="agriculture-gradient text-white px-3 py-1">
                <Activity className="h-3 w-3 mr-1" />
                Live Data
              </Badge>
              <div className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Farm Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {farmStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.unit}</p>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      {stat.trending === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <span className={`text-xs ${stat.trending === "up" ? "text-green-600" : "text-red-600"}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Field Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5" />
                  <span>Field Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedField} onValueChange={setSelectedField}>
                  <TabsList className="grid w-full grid-cols-3">
                    {fields.map((field) => (
                      <TabsTrigger key={field.id} value={field.id} className="text-sm">
                        {field.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {fields.map((field) => (
                    <TabsContent key={field.id} value={field.id} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <img 
                            src={field.image} 
                            alt={field.name}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                          />
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Crop Health</span>
                              <Badge className={getStatusColor(field.status)}>
                                {field.status}
                              </Badge>
                            </div>
                            <Progress value={field.health} className="h-2" />
                            <div className="text-sm text-muted-foreground">{field.health}% healthy</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <div className="text-sm font-medium">Crop Type</div>
                              <div className="text-2xl font-bold">{field.crop}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm font-medium">Acreage</div>
                              <div className="text-2xl font-bold">{field.acreage}</div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Soil Moisture</span>
                              <span className="text-sm font-medium">{field.moisture}%</span>
                            </div>
                            <Progress value={field.moisture} className="h-2" />
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Planted</div>
                              <div className="font-medium">{new Date(field.plantingDate).toLocaleDateString()}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Harvest Est.</div>
                              <div className="font-medium">{new Date(field.expectedHarvest).toLocaleDateString()}</div>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" className="agriculture-gradient flex-1">
                              View Details
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              Schedule Task
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Charts and Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Farm Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center space-y-2">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                    <div className="text-muted-foreground">Interactive charts and analytics</div>
                    <div className="text-sm text-muted-foreground">Yield trends, weather patterns, and performance metrics</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sun className="h-5 w-5" />
                  <span>Weather</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold">{weatherData.current.temperature}°F</div>
                  <div className="text-muted-foreground">{weatherData.current.conditions}</div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <Droplets className="h-4 w-4 mx-auto text-blue-500" />
                    <div className="text-sm font-medium">{weatherData.current.humidity}%</div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                  </div>
                  <div className="space-y-1">
                    <Wind className="h-4 w-4 mx-auto text-gray-500" />
                    <div className="text-sm font-medium">{weatherData.current.windSpeed} mph</div>
                    <div className="text-xs text-muted-foreground">Wind</div>
                  </div>
                  <div className="space-y-1">
                    <Thermometer className="h-4 w-4 mx-auto text-red-500" />
                    <div className="text-sm font-medium">72°F</div>
                    <div className="text-xs text-muted-foreground">Feels like</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">4-Day Forecast</div>
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="font-medium">{day.day}</span>
                      <span className="text-muted-foreground">{day.condition}</span>
                      <span>{day.high}°/{day.low}°</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alerts and Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => {
                  const AlertIcon = getAlertIcon(alert.type);
                  return (
                    <div key={alert.id} className={`p-3 rounded-lg border ${getAlertColor(alert.priority)}`}>
                      <div className="flex items-start space-x-3">
                        <AlertIcon className="h-4 w-4 mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium">{alert.title}</div>
                          <div className="text-xs text-muted-foreground">{alert.description}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                <Button variant="outline" size="sm" className="w-full">
                  View All Alerts
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full agriculture-gradient" size="sm">
                  Start Irrigation
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Maintenance
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Generate Report
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Expert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
