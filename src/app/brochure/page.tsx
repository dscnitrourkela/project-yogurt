'use client';

import { Typography } from '@/components';
import { brochures } from '@/config/brochure';
import { Download, Eye } from 'lucide-react';

export default function BrochurePage() {
  const handleView = (url: string | null) => {
    if (!url) return;
    const viewUrl = url.includes('drive.google.com')
      ? url.replace('/view', '/preview')
      : url;
    window.open(viewUrl, '_blank');
  };

  const handleDownload = (url: string | null, title: string) => {
    if (!url) return;
    let downloadUrl = url;
    if (url.includes('drive.google.com')) {
      const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileIdMatch) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
      }
    }

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <Typography.H1 className="font-sketch-block font-normal text-primary mb-4">
            Brochures
          </Typography.H1>
          <Typography.P className="text-gray-600 max-w-2xl mx-auto">
            Download our brochures to learn more about HackNITR 7.0 and
            partnership opportunities
          </Typography.P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brochures.map((brochure) => (
            <div
              key={brochure.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <Typography.H5 className="font-semibold mb-2 text-gray-800">
                  {brochure.title}
                </Typography.H5>
                <Typography.P className="text-gray-600 mb-6">
                  {brochure.description}
                </Typography.P>

                <div className="flex gap-4">
                  {brochure.comingSoon ? (
                    <div className="flex-1 flex items-center justify-center bg-gray-200 text-gray-600 px-4 py-3 rounded-lg">
                      <span className="font-medium">Coming Soon</span>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleView(brochure.pdfUrl)}
                        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                      >
                        <Eye size={20} />
                        <span className="font-medium">View PDF</span>
                      </button>

                      <button
                        onClick={() =>
                          handleDownload(brochure.pdfUrl, brochure.title)
                        }
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Download size={20} />
                        <span className="font-medium">Download</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gray-100 p-6">
                <div className="aspect-[8.5/11] bg-white rounded-lg shadow-inner flex items-center justify-center">
                  {brochure.comingSoon ? (
                    <div className="text-center p-8">
                      <Typography.H4 className="text-gray-400 font-sketch-block">
                        Coming Soon
                      </Typography.H4>
                    </div>
                  ) : (
                    <iframe
                      src={
                        brochure.pdfUrl &&
                        brochure.pdfUrl.includes('drive.google.com')
                          ? brochure.pdfUrl.replace('/view', '/preview')
                          : `${brochure.pdfUrl}#view=FitH&toolbar=0`
                      }
                      className="w-full h-full rounded-lg"
                      title={brochure.title}
                      allow="autoplay"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
