
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  ArrowRight,
  TrendingUp,
  Leaf,
  BarChart3,
  Droplets
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Precision Agriculture", count: 15, color: "bg-agriculture-green" },
    { name: "Sustainable Farming", count: 12, color: "bg-agriculture-light-green" },
    { name: "Technology", count: 8, color: "bg-agriculture-earth" },
    { name: "Crop Management", count: 10, color: "bg-agriculture-wheat" }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of Precision Agriculture: AI and Machine Learning in Farming",
    excerpt: "Discover how artificial intelligence and machine learning are revolutionizing modern agriculture, from crop monitoring to automated harvesting.",
    content: "Artificial intelligence is transforming agriculture at an unprecedented pace...",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8b1?w=100&h=100&fit=crop&crop=face",
      bio: "Agricultural Technology Expert"
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop",
    tags: ["AI", "Machine Learning", "Precision Agriculture", "Innovation"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Smart Irrigation: Reducing Water Usage by 40% with IoT Sensors",
      excerpt: "Learn how IoT sensors and smart irrigation systems are helping farmers conserve water while maintaining optimal crop yields.",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "IoT Solutions Specialist"
      },
      publishedAt: "2024-01-12",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=400&h=250&fit=crop",
      tags: ["IoT", "Water Conservation", "Smart Irrigation"]
    },
    {
      id: 3,
      title: "Sustainable Pest Management: Organic Solutions for Modern Farms",
      excerpt: "Explore eco-friendly pest management strategies that protect crops while preserving beneficial insects and soil health.",
      author: {
        name: "Dr. Emily Watson",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        bio: "Sustainable Agriculture Researcher"
      },
      publishedAt: "2024-01-10",
      readTime: "7 min read",
      category: "Sustainable Farming",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=250&fit=crop",
      tags: ["Organic Farming", "Pest Management", "Sustainability"]
    },
    {
      id: 4,
      title: "Drone Technology in Agriculture: Mapping Fields from Above",
      excerpt: "Discover how agricultural drones are providing farmers with unprecedented insights into crop health and field conditions.",
      author: {
        name: "James Thompson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Drone Technology Expert"
      },
      publishedAt: "2024-01-08",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=250&fit=crop",
      tags: ["Drones", "Aerial Mapping", "Crop Monitoring"]
    },
    {
      id: 5,
      title: "Soil Health: The Foundation of Productive Agriculture",
      excerpt: "Understanding soil composition and health is crucial for sustainable farming. Learn about soil testing and improvement techniques.",
      author: {
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8b1?w=100&h=100&fit=crop&crop=face",
        bio: "Agricultural Technology Expert"
      },
      publishedAt: "2024-01-05",
      readTime: "9 min read",
      category: "Crop Management",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=250&fit=crop",
      tags: ["Soil Health", "Testing", "Nutrients"]
    },
    {
      id: 6,
      title: "Climate Change Adaptation in Agriculture",
      excerpt: "How farmers are adapting to changing climate conditions with resilient crops and innovative farming techniques.",
      author: {
        name: "Dr. Emily Watson",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        bio: "Sustainable Agriculture Researcher"
      },
      publishedAt: "2024-01-03",
      readTime: "8 min read",
      category: "Sustainable Farming",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=250&fit=crop",
      tags: ["Climate Change", "Adaptation", "Resilience"]
    }
  ];

  const trendingTopics = [
    { icon: TrendingUp, title: "Yield Optimization", posts: 23 },
    { icon: Leaf, title: "Organic Farming", posts: 18 },
    { icon: BarChart3, title: "Data Analytics", posts: 15 },
    { icon: Droplets, title: "Water Management", posts: 12 }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20 nature-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="agriculture-gradient text-white px-4 py-2">Agricultural Insights</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Latest in{" "}
              <span className="agriculture-gradient bg-clip-text text-transparent">
                Agricultural Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Stay informed with the latest trends, technologies, and best practices 
              in modern agriculture. Expert insights for progressive farmers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="agriculture-gradient text-white px-4 py-2">Featured Article</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Editor's Pick</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="agriculture-gradient text-white">{featuredPost.category}</Badge>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                      <AvatarFallback>{featuredPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{featuredPost.author.name}</div>
                      <div className="text-sm text-muted-foreground">{featuredPost.author.bio}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  
                  <Button className="agriculture-gradient hover:opacity-90 transition-opacity">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Recent Articles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="agriculture-gradient text-white">{post.category}</Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                      
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">{post.author.name}</div>
                          <div className="text-xs text-muted-foreground">{post.author.bio}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 agriculture-gradient rounded-lg flex items-center justify-center">
                      <topic.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{topic.title}</div>
                      <div className="text-sm text-muted-foreground">{topic.posts} articles</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="agriculture-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 text-sm">
                  Get the latest agricultural insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Want to Contribute?
            </h2>
            <p className="text-xl text-muted-foreground">
              Share your agricultural expertise with our community. 
              We're always looking for guest contributors and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="agriculture-gradient hover:opacity-90 transition-opacity">
                Submit Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline">
                Become a Contributor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
