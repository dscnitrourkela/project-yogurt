import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Playground
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Available Features</h2>

            <div className="space-y-4">
              <Link
                href="/upload"
                className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-blue-600 mb-2">Image Upload</h3>
                <p className="text-gray-600 text-sm">
                  Upload multiple images using Cloudinary&apos;s upload widget.
                  Get instant URLs for your uploaded images.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
