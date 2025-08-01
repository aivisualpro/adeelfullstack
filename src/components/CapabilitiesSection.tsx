import { Card } from "@/components/ui/card";
import { Code2, GitBranch, TestTube, Bug, Wrench, FileText, Cpu, Rocket } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Write Code",
    description: "Devin can write complete applications, from simple scripts to complex web applications, using any programming language or framework."
  },
  {
    icon: TestTube,
    title: "Run & Test",
    description: "Automatically runs your code, tests for bugs, and ensures everything works perfectly before deployment."
  },
  {
    icon: Bug,
    title: "Debug Issues",
    description: "Identifies and fixes bugs in existing codebases, providing detailed explanations and solutions."
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Manages Git repositories, creates pull requests, and handles code reviews with advanced understanding."
  },
  {
    icon: Wrench,
    title: "Refactor Code",
    description: "Improves code quality, performance, and maintainability while preserving functionality."
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Creates comprehensive documentation, API references, and user guides for your projects."
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designs scalable system architectures and recommends best practices for your specific use case."
  },
  {
    icon: Rocket,
    title: "Deploy & Scale",
    description: "Handles deployment pipelines, monitoring, and scaling of applications across different environments."
  }
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Devin Can Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From writing code to deploying applications, Devin handles the entire software development lifecycle with unprecedented autonomy and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-6 hover-scale card-gradient border border-border/50 backdrop-blur-sm group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-8">
            <Cpu className="w-5 h-5 mr-2" />
            Advanced AI Reasoning
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Long-term reasoning and planning
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Devin can plan and execute complex engineering tasks requiring thousands of decisions. 
            It recalls relevant context at every step, learns over time, and fixes mistakes autonomously.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;