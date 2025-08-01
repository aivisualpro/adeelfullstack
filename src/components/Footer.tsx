import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              Adeel
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The first AI software engineer. Build faster, scale better, and focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Capabilities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Adeel Jabbar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;