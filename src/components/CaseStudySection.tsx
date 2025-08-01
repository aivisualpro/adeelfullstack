import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how industry leaders are using Devin to transform their development workflows and achieve unprecedented efficiency gains.
          </p>
        </div>

        {/* Featured Case Study */}
        <Card className="mb-16 overflow-hidden card-gradient border border-border/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-6xl font-bold text-primary mb-2">8x</div>
                <div className="text-lg text-muted-foreground">engineering time efficiency gain</div>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-6">
                How Nubank refactors millions of lines of code to improve engineering efficiency with Devin
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Multi-million line codebase migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Reduced from multi-year to months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">1000+ engineers involved</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-3">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  One of Nubank's most critical, company-wide projects for 2023-2024 was a migration of their core ETL — 
                  an 8 year old, multi-million lines of code monolith — to sub-modules. To handle such a large refactor, 
                  their only option was a multi-year effort that distributed repetitive refactoring work across over one 
                  thousand of their engineers. With Devin, they accomplished this in a fraction of the time.
                </p>
              </div>
              
              <Button variant="hero" className="w-fit">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Nubank Engineering Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent lg:from-transparent lg:to-background/50"></div>
            </div>
          </div>
        </Card>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center card-gradient border border-border/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">50%</div>
            <div className="text-lg font-semibold text-foreground mb-2">Faster Development</div>
            <div className="text-muted-foreground">Average time savings across all projects</div>
          </Card>
          
          <Card className="p-8 text-center card-gradient border border-border/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-lg font-semibold text-foreground mb-2">Code Quality</div>
            <div className="text-muted-foreground">Automated testing and validation accuracy</div>
          </Card>
          
          <Card className="p-8 text-center card-gradient border border-border/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-lg font-semibold text-foreground mb-2">Availability</div>
            <div className="text-muted-foreground">Continuous development and monitoring</div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to transform your development workflow?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using Devin to accelerate their software development and achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;