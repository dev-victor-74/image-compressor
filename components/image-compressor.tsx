"use client";

import { useState, useCallback, useRef } from "react";
import {
  Upload,
  Download,
  Trash2,
  Image as ImageIcon,
  Loader2,
  Compass as Compress,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ProcessedImage {
  id: string;
  originalFile: File;
  originalSize: number;
  originalDimensions?: { width: number; height: number };
  processedSize?: number;
  compressionRatio?: number;
  processedDataUrl?: string;
  isProcessing: boolean;
  progress?: number;
  error?: string;
}

export default function ImageCompressor() {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getImageDimensions = (
    file: File
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFiles = useCallback(async (files: FileList) => {
    const newImages: ProcessedImage[] = [];

    for (const file of Array.from(files)) {
      const dimensions = await getImageDimensions(file);
      newImages.push({
        id: Math.random().toString(36).substr(2, 9),
        originalFile: file,
        originalSize: file.size,
        originalDimensions: dimensions,
        isProcessing: false,
      });
    }

    setImages((prev) => [...prev, ...newImages]);
  }, []);

  const compressImage = async (imageId: string) => {
    // Start progress animation
    const startProgress = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random increment between 5-20%
        if (progress > 85) progress = 85; // Cap at 85% until actual completion

        setImages((prev) =>
          prev.map((img) => (img.id === imageId ? { ...img, progress } : img))
        );
      }, 200);

      return interval;
    };

    setImages((prev) =>
      prev.map((img) =>
        img.id === imageId
          ? { ...img, isProcessing: true, progress: 0, error: undefined }
          : img
      )
    );

    const image = images.find((img) => img.id === imageId);
    if (!image) return;

    // Start progress animation
    const progressInterval = startProgress();

    const formData = new FormData();
    formData.append("file", image.originalFile);

    try {
      const response = await fetch("/api/compress", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      // Clear progress interval
      clearInterval(progressInterval);

      if (result.success) {
        setImages((prev) =>
          prev.map((img) =>
            img.id === imageId
              ? {
                  ...img,
                  isProcessing: false,
                  progress: 100,
                  processedSize: result.compressedSize,
                  compressionRatio: result.compressionRatio,
                  processedDataUrl: result.compressedImage,
                }
              : img
          )
        );

        // Reset progress after a brief moment
        setTimeout(() => {
          setImages((prev) =>
            prev.map((img) =>
              img.id === imageId ? { ...img, progress: undefined } : img
            )
          );
        }, 1000);
      } else {
        clearInterval(progressInterval);
        setImages((prev) =>
          prev.map((img) =>
            img.id === imageId
              ? {
                  ...img,
                  isProcessing: false,
                  progress: undefined,
                  error: result.error,
                }
              : img
          )
        );
      }
    } catch (error) {
      clearInterval(progressInterval);
      setImages((prev) =>
        prev.map((img) =>
          img.id === imageId
            ? {
                ...img,
                isProcessing: false,
                progress: undefined,
                error: "Network error occurred",
              }
            : img
        )
      );
    }
  };

  const processAllImages = async () => {
    const unprocessedImages = images.filter(
      (img) => !img.processedDataUrl && !img.error
    );

    for (const image of unprocessedImages) {
      await compressImage(image.id);
    }
  };

  const downloadImage = (image: ProcessedImage) => {
    if (!image.processedDataUrl) return;

    const link = document.createElement("a");
    link.href = image.processedDataUrl;
    link.download = `compressed_${image.originalFile.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    const processedImages = images.filter((img) => img.processedDataUrl);
    processedImages.forEach(downloadImage);
  };

  const removeImage = (imageId: string) => {
    setImages((prev) => prev.filter((img) => img.id !== imageId));
  };

  const clearAll = () => {
    setImages([]);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFiles(files);
      }
    },
    [handleFiles]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFiles(files);
      }
    },
    [handleFiles]
  );

  const totalOriginalSize = images.reduce(
    (sum, img) => sum + img.originalSize,
    0
  );
  const totalProcessedSize = images.reduce(
    (sum, img) => sum + (img.processedSize || 0),
    0
  );
  const overallSavings =
    totalOriginalSize > 0
      ? ((totalOriginalSize - totalProcessedSize) / totalOriginalSize) * 100
      : 0;

  const showBulkActions = images.length > 1;

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-2">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Upload Area - Only show when no images */}
          {images.length === 0 && (
            <Card className="mb-4 border-2 max-w-2xl mx-auto border-dashed transition-all duration-200 hover:border-blue-400">
              <CardContent className="p-4">
                <div
                  className={cn(
                    "border-2 border-dashed rounded-lg p-5 text-center transition-all duration-200",
                    isDragOver
                      ? "border-blue-500 bg-blue-50 scale-105"
                      : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  )}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <Upload className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Drop your images here
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Support JPEG, PNG, and WebP formats up to 10MB each
                      </p>
                    </div>
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Select Images
                    </Button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Add More Images Button - Show when images exist */}
          {images.length > 0 && (
            <div className="mb-6 flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    size="lg"
                    variant="outline"
                    className="group border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add more images</p>
                </TooltipContent>
              </Tooltip>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          )}

          {/* Processing Controls - Only show bulk actions for multiple images */}
          {images.length > 0 && (
            <Card className="mb-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-3">
                    {showBulkActions && (
                      <>
                        <Button
                          onClick={processAllImages}
                          disabled={images.some((img) => img.isProcessing)}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                        >
                          {images.some((img) => img.isProcessing) && (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          )}
                          <Compress className="w-4 h-4 mr-2" />
                          Compress All (
                          {
                            images.filter(
                              (img) => !img.processedDataUrl && !img.error
                            ).length
                          }
                          )
                        </Button>
                        <Button
                          onClick={downloadAll}
                          disabled={!images.some((img) => img.processedDataUrl)}
                          variant="outline"
                          className="border-green-200 text-green-700 hover:bg-green-50"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download All (
                          {images.filter((img) => img.processedDataUrl).length})
                        </Button>
                      </>
                    )}
                    <Button
                      onClick={clearAll}
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear All
                    </Button>
                  </div>
                  {totalProcessedSize > 0 && (
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-lg border border-green-200">
                      <div className="text-sm font-medium text-green-800">
                        Total saved:{" "}
                        <span className="font-bold">
                          {formatFileSize(
                            totalOriginalSize - totalProcessedSize
                          )}
                        </span>
                        <span className="ml-2 text-green-600">
                          ({overallSavings.toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex w-full items-center gap-2  min-w-0">
                      <div className="p-1.5 bg-blue-100 rounded-lg">
                        <ImageIcon className="w-4 h-4 text-blue-600" />
                      </div>
                      <CardTitle className="text-sm  font-medium text-gray-700 truncate">
                        {image.originalFile.name} this title tltitltlt
                      </CardTitle>
                    </div>
                    <div className="w-[50%] flex items-center justify-end">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeImage(image.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Image Preview */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 overflow-hidden group-hover:shadow-inner transition-shadow">
                    <img
                      src={
                        image.processedDataUrl ||
                        URL.createObjectURL(image.originalFile)
                      }
                      alt={image.originalFile.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {image.processedDataUrl && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Compressed
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-gray-500 text-xs mb-1">
                          Original Size
                        </div>
                        <div className="font-semibold text-gray-900">
                          {formatFileSize(image.originalSize)}
                        </div>
                      </div>

                      {image.processedSize ? (
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="text-green-600 text-xs mb-1">
                            Compressed
                          </div>
                          <div className="font-semibold text-green-800">
                            {formatFileSize(image.processedSize)}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-gray-500 text-xs mb-1">
                            Compressed
                          </div>
                          <div className="font-semibold text-gray-400">
                            Pending
                          </div>
                        </div>
                      )}
                    </div>

                    {image.originalDimensions && (
                      <div className="flex justify-between items-center py-2 px-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-600 text-xs font-medium">
                          Dimensions
                        </span>
                        <span className="font-semibold text-blue-800">
                          {image.originalDimensions.width} ×{" "}
                          {image.originalDimensions.height}
                        </span>
                      </div>
                    )}

                    {image.compressionRatio && (
                      <div className="flex justify-between items-center py-2 px-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                        <span className="text-green-600 text-xs font-medium">
                          Space Saved
                        </span>
                        <span
                          className={cn(
                            "font-bold text-lg",
                            image.compressionRatio > 50
                              ? "text-green-600"
                              : image.compressionRatio > 25
                              ? "text-amber-600"
                              : "text-red-600"
                          )}
                        >
                          {image.compressionRatio.toFixed(1)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Progress/Actions */}
                  <div className="mt-4">
                    {image.isProcessing ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                          <span className="text-sm text-blue-600 font-medium">
                            Compressing...{" "}
                            {image.progress
                              ? `${Math.round(image.progress)}%`
                              : ""}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <Progress
                            value={image.progress || 0}
                            className="h-3 transition-all duration-300"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Processing image...</span>
                            <span>
                              {image.progress
                                ? `${Math.round(image.progress)}%`
                                : "0%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : image.error ? (
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm font-medium">
                            {image.error}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => compressImage(image.id)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Compress className="w-4 h-4 mr-2" />
                          Try Again
                        </Button>
                      </div>
                    ) : image.processedDataUrl ? (
                      <Button
                        size="sm"
                        onClick={() => downloadImage(image)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Compressed
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => compressImage(image.id)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                      >
                        <Compress className="w-4 h-4 mr-2" />
                        Compress Image
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-16">
              <div className="p-6 bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to compress your images?
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Upload your images above to get started. We support JPEG, PNG,
                and WebP formats with professional compression quality.
              </p>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
