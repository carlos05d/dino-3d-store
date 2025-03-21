import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Premium Dinosaur 3D Models
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          High-quality, scientifically accurate 3D models for your creative projects
        </p>
        <a
          href="/models"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Browse Models
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <FeatureCard
          title="High Quality"
          description="Professional grade 3D models with attention to detail"
        />
        <FeatureCard
          title="Multiple Formats"
          description="Compatible with major 3D software packages"
        />
        <FeatureCard
          title="Scientific Accuracy"
          description="Based on latest paleontological research"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}