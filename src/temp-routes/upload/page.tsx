'use client';

import { useCallback, useEffect, useState } from 'react';

import {
  AlertCircle,
  CheckCircle,
  CloudUpload,
  Copy,
  ExternalLink,
  Image as ImageIcon,
  Info,
  Trash2,
  Upload,
} from 'lucide-react';

interface CloudinaryUploadResult {
  event: string;
  info: {
    public_id: string;
    secure_url: string;
    url: string;
    original_filename: string;
    format: string;
    width: number;
    height: number;
    bytes: number;
    created_at: string;
  };
}

interface UploadedImage {
  public_id: string;
  secure_url: string;
  original_filename: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
}

declare global {
  interface Window {
    cloudinary: any;
  }
}

export default function UploadPage() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!window.cloudinary) {
      const script = document.createElement('script');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleUploadSuccess = useCallback((result: CloudinaryUploadResult) => {
    setUploadedImages((prev) => [
      ...prev,
      {
        public_id: result.info.public_id,
        secure_url: result.info.secure_url,
        original_filename: result.info.original_filename,
        format: result.info.format,
        width: result.info.width,
        height: result.info.height,
        bytes: result.info.bytes,
        created_at: result.info.created_at,
      },
    ]);
  }, []);

  const handleUploadError = useCallback((error: any) => {
    setError(`Upload failed: ${error.message || 'Unknown error'}`);
  }, []);

  const openUploadWidget = useCallback(() => {
    setError(null);

    if (!window.cloudinary) {
      setError('Cloudinary widget is not loaded yet. Please try again.');
      return;
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      setError(
        'Cloudinary configuration is missing. Please check your environment variables.'
      );
      return;
    }

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        multiple: true,
        maxFiles: 10,
        maxFileSize: 10000000, // 10MB
        clientAllowedFormats: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
        folder: 'uploads',
        sources: ['local', 'url', 'camera'],
        showAdvancedOptions: false,
        cropping: false,
        showSkipCropButton: true,
        croppingAspectRatio: null,
        theme: 'minimal',
        styles: {
          palette: {
            window: '#ffffff',
            windowBorder: '#e5e7eb',
            tabIcon: '#3b82f6',
            menuIcons: '#6b7280',
            textDark: '#111827',
            textLight: '#ffffff',
            link: '#3b82f6',
            action: '#2563eb',
            inactiveTabIcon: '#9ca3af',
            error: '#ef4444',
            inProgress: '#3b82f6',
            complete: '#10b981',
            sourceBg: '#f9fafb',
          },
        },
      },
      (error: any, result: CloudinaryUploadResult) => {
        if (!error && result && result.event === 'success') {
          handleUploadSuccess(result);
        }

        if (error) {
          handleUploadError(error);
        }
      }
    );

    widget.open();
  }, [handleUploadSuccess, handleUploadError]);

  const clearUploads = useCallback(() => {
    setUploadedImages([]);
    setError(null);
  }, []);

  const copyToClipboard = useCallback(async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  }, []);

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  return (
    <div className=" bg-gray-50">
      <div className=" mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4">
            <CloudUpload className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Image Upload Center
          </h1>
          <p className="text-gray-600">Upload multiple images to the cloud</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center">
              <Upload className="w-12 h-12 text-blue-600" />
            </div>

            <button
              onClick={openUploadWidget}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-2">
                <>
                  <Upload className="w-4 h-4" />
                  <span>Upload Images</span>
                </>
              </div>
            </button>

            <div className="text-sm text-gray-500 text-center">
              JPEG, PNG, GIF, WebP • Max 10MB per file • Up to 10 files
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Results Section */}
        {uploadedImages.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Uploaded Images ({uploadedImages.length})
                </h2>
              </div>
              <button
                onClick={clearUploads}
                className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-medium px-3 py-1 rounded"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            </div>

            <div className="space-y-4">
              {uploadedImages.map((image) => (
                <div
                  key={image.public_id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Image Preview */}
                    <div className="flex-shrink-0">
                      <img
                        src={image.secure_url}
                        alt={image.original_filename}
                        className="w-32 h-32 object-cover rounded-lg border"
                      />
                    </div>

                    {/* Image Details */}
                    <div className="flex-grow space-y-3">
                      <h3 className="font-medium text-gray-900 flex items-center space-x-2">
                        <ImageIcon className="w-4 h-4 text-gray-600" />
                        <span>{image.original_filename}</span>
                      </h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-500">Format</div>
                          <div className="text-sm font-medium text-gray-900">
                            {image.format.toUpperCase()}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-500">Size</div>
                          <div className="text-sm font-medium text-gray-900">
                            {formatFileSize(image.bytes)}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-500">
                            Dimensions
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {image.width}×{image.height}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-500">Public ID</div>
                          <div className="text-sm font-medium text-gray-900 truncate">
                            {image.public_id}
                          </div>
                        </div>
                      </div>

                      {/* URL Copy Section */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={image.secure_url}
                          readOnly
                          className="flex-grow px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 text-black"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => copyToClipboard(image.secure_url)}
                            className={`flex items-center space-x-1 px-3 py-2 rounded text-sm font-medium border ${
                              copiedUrl === image.secure_url
                                ? 'bg-green-50 text-green-700 border-green-200'
                                : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                            }`}
                          >
                            {copiedUrl === image.secure_url ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            <span>
                              {copiedUrl === image.secure_url
                                ? 'Copied'
                                : 'Copy'}
                            </span>
                          </button>
                          <a
                            href={image.secure_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-sm font-medium border border-blue-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Open</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                How to Use
              </h3>
              <div className="space-y-2 text-blue-800">
                <div className="flex items-start space-x-2">
                  <span className="font-medium">1.</span>
                  <span>Click the "Upload Images" button above</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-medium">2.</span>
                  <span>
                    Select multiple images from your device, camera, or by URL
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-medium">3.</span>
                  <span>
                    Images will be automatically uploaded to the cloud
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-medium">4.</span>
                  <span>Copy the URLs to use your images anywhere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
