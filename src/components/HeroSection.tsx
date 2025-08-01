import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <img 
          src={heroImage} 
          alt="AI Software Engineer"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 floating" style={{ animationDelay: "0s" }}>
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Code className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-20 floating" style={{ animationDelay: "2s" }}>
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 floating" style={{ animationDelay: "4s" }}>
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            The First AI Software Engineer
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Meet{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Devin
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">
              Your AI Teammate
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Devin is an autonomous AI software engineer that can write, run, and test code. 
            Build faster, scale better, and focus on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">8x</div>
            <div className="text-white/70">Engineering Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-white/70">Companies Trust Devin</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">Autonomous Coding</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;