import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">
              Devin
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-smooth">
                <span>Product</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#capabilities" className="text-foreground/80 hover:text-foreground transition-smooth">
              Capabilities
            </a>
            <a href="#case-studies" className="text-foreground/80 hover:text-foreground transition-smooth">
              Case Studies
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-smooth">
              Pricing
            </a>
            <a href="#docs" className="text-foreground/80 hover:text-foreground transition-smooth">
              Docs
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border rounded-lg mt-2">
              <a href="#product" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-smooth">
                Product
              </a>
              <a href="#capabilities" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-smooth">
                Capabilities
              </a>
              <a href="#case-studies" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-smooth">
                Case Studies
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-smooth">
                Pricing
              </a>
              <a href="#docs" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-smooth">
                Docs
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button variant="hero" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;