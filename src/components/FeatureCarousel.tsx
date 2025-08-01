import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Code, Terminal, FileText } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    id: 1,
    title: "Code Migration + Refactors",
    subtitle: "Seamlessly modernize your codebase",
    bullets: [
      "Language migrations",
      "Version upgrades", 
      "Codebase restructuring"
    ],
    leftPanel: {
      title: "migrate music repo to Python",
      messages: [
        {
          type: "user",
          content: "migrate music repo to Python",
          time: "Aug 12, 2024, 4:51 PM"
        },
        {
          type: "adeel",
          content: "Migrate the music-generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
          time: "Aug 12, 2024, 4:51 PM"
        },
        {
          type: "adeel",
          content: "Absolutely! I'll start with the 'src/music' directory of the repository. I'll keep you updated on my progress!",
          time: "Aug 12, 2024, 4:51 PM"
        }
      ],
      status: "Session Ended"
    },
    rightPanel: {
      title: "Adeel's Workspace",
      tabs: ["Shell", "Browser", "Editor", "Planner"],
      activeTab: "Editor",
      content: {
        filename: "music1.py",
        code: `#!/usr/bin/env python3
# Music generation utility
import argparse
import sys
from pathlib import Path

# Testing Doublelat:
# Doublelat values: 2
# Doublelat correct: 2

# Testing Flat:
# Flat values: 1
# Flat correct: 1

# Testing Natural:
# Natural values: 0
# String(natural): 
# String(natural): #`
      }
    }
  },
  {
    id: 2,
    title: "Full-Stack Development",
    subtitle: "Build complete applications end-to-end",
    bullets: [
      "Frontend frameworks",
      "Backend services",
      "Database integration"
    ],
    leftPanel: {
      title: "build e-commerce platform",
      messages: [
        {
          type: "user",
          content: "build e-commerce platform",
          time: "Aug 12, 2024, 3:22 PM"
        },
        {
          type: "adeel",
          content: "I'll build a modern e-commerce platform with React frontend, Node.js backend, and PostgreSQL database. Including user authentication, product catalog, shopping cart, and payment processing.",
          time: "Aug 12, 2024, 3:22 PM"
        }
      ],
      status: "In Progress"
    },
    rightPanel: {
      title: "Adeel's Workspace",
      tabs: ["Shell", "Browser", "Editor", "Planner"],
      activeTab: "Browser",
      content: {
        filename: "E-commerce Preview",
        code: `// Live application preview
const App = () => {
  return (
    <div className="e-commerce">
      <Header />
      <ProductGrid />
      <ShoppingCart />
      <Footer />
    </div>
  );
};`
      }
    }
  },
  {
    id: 3,
    title: "API Integration & Testing",
    subtitle: "Connect and validate external services",
    bullets: [
      "REST API integration",
      "GraphQL queries",
      "Automated testing"
    ],
    leftPanel: {
      title: "integrate payment gateway",
      messages: [
        {
          type: "user",
          content: "integrate payment gateway",
          time: "Aug 12, 2024, 2:15 PM"
        },
        {
          type: "adeel",
          content: "I'll integrate Stripe payment gateway with proper error handling, webhook validation, and comprehensive test coverage.",
          time: "Aug 12, 2024, 2:15 PM"
        }
      ],
      status: "Testing"
    },
    rightPanel: {
      title: "Adeel's Workspace",
      tabs: ["Shell", "Browser", "Editor", "Planner"],
      activeTab: "Shell",
      content: {
        filename: "Terminal",
        code: `$ npm test payment.test.js
✓ should process valid payment
✓ should handle declined card
✓ should validate webhook signature
✓ should retry failed payments

Tests: 4 passed, 4 total
Coverage: 95.2%`
      }
    }
  }
];

export default function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const currentFeature = features[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-gradient">Adeel</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how Adeel tackles complex development challenges with intelligent automation
          </p>
        </div>

        <div 
          className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl p-8 shadow-2xl min-h-[600px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Left Panel - Feature Description */}
            <div className="flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-4">{currentFeature.title}</h3>
              <p className="text-lg mb-8 opacity-90">{currentFeature.subtitle}</p>
              
              <ul className="space-y-4">
                {currentFeature.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Panel - Chat Interface */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">{currentFeature.leftPanel.title}</h4>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {currentFeature.leftPanel.messages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      message.type === 'user' ? 'bg-gray-200 text-gray-700' : 'bg-primary text-white'
                    }`}>
                      {message.type === 'user' ? 'U' : 'D'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm text-gray-600">
                          {message.type === 'user' ? 'You' : 'Adeel'}
                        </span>
                        <span className="text-xs text-gray-400">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-800">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                <div className="text-center py-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {currentFeature.leftPanel.status}
                  </span>
                </div>
              </div>
              
              <Button className="w-full mt-4" variant="default">
                Start a new conversation with Adeel
              </Button>
            </div>

            {/* Right Panel - Workspace */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">{currentFeature.rightPanel.title}</h4>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-1 mb-4 bg-gray-100 rounded-lg p-1">
                {currentFeature.rightPanel.tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      tab === currentFeature.rightPanel.activeTab
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Code Editor */}
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400">{currentFeature.rightPanel.content.filename}</span>
                  <div className="flex space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <pre className="text-green-400 whitespace-pre-wrap">
                  {currentFeature.rightPanel.content.code}
                </pre>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}