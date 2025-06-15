"use client";

import type React from "react";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, Download, RotateCcw, ImageIcon, Settings } from "lucide-react";

interface ImageData {
	file: File;
	url: string;
	width: number;
	height: number;
}

export function ImageResizer() {
	const [originalImage, setOriginalImage] = useState<ImageData | null>(null);
	const [resizedImage, setResizedImage] = useState<string | null>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [quality, setQuality] = useState([80]);
	const [format, setFormat] = useState("jpeg");
	const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
	const [isProcessing, setIsProcessing] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const handleFileSelect = useCallback((file: File) => {
		if (!file.type.startsWith("image/")) {
			alert("Please select a valid image file");
			return;
		}
		const url = URL.createObjectURL(file);
		console.log("image url: ", url);
		const img = new Image();
		console.log("image: ", img);

		img.onload = () => {
			setOriginalImage({
				file,
				url,
				width: img.width,
				height: img.height,
			});
			setDimensions({ width: img.width, height: img.height });
		};

		img.src = url;
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			const files = Array.from(e.dataTransfer.files);
			if (files.length > 0) {
				handleFileSelect(files[0]);
			}
		},
		[handleFileSelect]
	);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
	}, []);

	const updateDimensions = (key: "width" | "height", value: number) => {
		if (!originalImage) return;

		const newDimensions = { ...dimensions };
		newDimensions[key] = value;

		if (maintainAspectRatio) {
			const aspectRatio = originalImage.width / originalImage.height;
			if (key === "width") {
				newDimensions.height = Math.round(value / aspectRatio);
			} else {
				newDimensions.width = Math.round(value * aspectRatio);
			}
		}

		setDimensions(newDimensions);
	};

	const resizeImage = async () => {
		if (!originalImage || !canvasRef.current) return;

		setIsProcessing(true);

		try {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			canvas.width = dimensions.width;
			canvas.height = dimensions.height;

			const img = new Image();
			img.crossOrigin = "anonymous";

			img.onload = () => {
				ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);

				const mimeType = format === "png" ? "image/png" : "image/jpeg";
				const qualityValue = format === "png" ? 1 : quality[0] / 100;

				const resizedDataUrl = canvas.toDataURL(mimeType, qualityValue);
				setResizedImage(resizedDataUrl);
				setIsProcessing(false);
			};

			img.src = originalImage.url;
		} catch (error) {
			console.error("Error resizing image:", error);
			setIsProcessing(false);
		}
	};

	const downloadImage = () => {
		if (!resizedImage) return;

		const link = document.createElement("a");
		link.download = `resized-image.${format}`;
		link.href = resizedImage;
		link.click();
	};

	const reset = () => {
		if (originalImage) {
			URL.revokeObjectURL(originalImage.url);
		}
		setOriginalImage(null);
		setResizedImage(null);
		setDimensions({ width: 0, height: 0 });
		setQuality([80]);
		setFormat("jpeg");
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	return (
		<section id='image-resizer' className='py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold text-slate-900 mb-4'>
						Resize Your Images
					</h2>
					<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
						Upload an image and customize the dimensions, quality,
						and format to get the perfect result.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Upload Section */}
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Upload className='w-5 h-5' />
								Upload Image
							</CardTitle>
						</CardHeader>
						<CardContent>
							{!originalImage ? (
								<div
									className='border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer'
									onDrop={handleDrop}
									onDragOver={handleDragOver}
									onClick={() =>
										fileInputRef.current?.click()
									}>
									<ImageIcon className='w-12 h-12 text-slate-400 mx-auto mb-4' />
									<p className='text-slate-600 mb-2'>
										Drag and drop your image here, or click
										to browse
									</p>
									<p className='text-sm text-slate-500'>
										Supports JPG, PNG, WebP formats
									</p>
									<input
										ref={fileInputRef}
										type='file'
										accept='image/*'
										className='hidden'
										onChange={(e) => {
											const file = e.target.files?.[0];
											if (file) handleFileSelect(file);
										}}
									/>
								</div>
							) : (
								<div className='space-y-4'>
									<div className='relative'>
										<img
											src={
												originalImage.url ||
												"/placeholder.svg"
											}
											alt='Original'
											className='w-full h-48 object-contain bg-slate-50 rounded-lg'
										/>
									</div>
									<div className='text-sm text-slate-600'>
										<p>
											Original: {originalImage.width} ×{" "}
											{originalImage.height}px
										</p>
										<p>
											Size:{" "}
											{(
												originalImage.file.size /
												1024 /
												1024
											).toFixed(2)}{" "}
											MB
										</p>
									</div>
									<Button
										variant='outline'
										onClick={reset}
										className='w-full'>
										<RotateCcw className='w-4 h-4 mr-2' />
										Upload Different Image
									</Button>
								</div>
							)}
						</CardContent>
					</Card>

					{/* Settings Section */}
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Settings className='w-5 h-5' />
								Resize Settings
							</CardTitle>
						</CardHeader>
						<CardContent className='space-y-6'>
							{originalImage && (
								<>
									{/* Dimensions */}
									<div className='space-y-4'>
										<Label>Dimensions</Label>
										<div className='grid grid-cols-2 gap-4'>
											<div>
												<Label
													htmlFor='width'
													className='text-sm'>
													Width (px)
												</Label>
												<Input
													id='width'
													type='number'
													value={dimensions.width}
													onChange={(e) =>
														updateDimensions(
															"width",
															Number.parseInt(
																e.target.value
															) || 0
														)
													}
												/>
											</div>
											<div>
												<Label
													htmlFor='height'
													className='text-sm'>
													Height (px)
												</Label>
												<Input
													id='height'
													type='number'
													value={dimensions.height}
													onChange={(e) =>
														updateDimensions(
															"height",
															Number.parseInt(
																e.target.value
															) || 0
														)
													}
												/>
											</div>
										</div>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												id='aspect-ratio'
												checked={maintainAspectRatio}
												onChange={(e) =>
													setMaintainAspectRatio(
														e.target.checked
													)
												}
												className='rounded'
											/>
											<Label
												htmlFor='aspect-ratio'
												className='text-sm'>
												Maintain aspect ratio
											</Label>
										</div>
									</div>

									{/* Format */}
									<div className='space-y-2'>
										<Label>Output Format</Label>
										<Select
											value={format}
											onValueChange={setFormat}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='jpeg'>
													JPEG
												</SelectItem>
												<SelectItem value='png'>
													PNG
												</SelectItem>
												<SelectItem value='webp'>
													WebP
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									{/* Quality */}
									{format !== "png" && (
										<div className='space-y-2'>
											<Label>
												Quality: {quality[0]}%
											</Label>
											<Slider
												value={quality}
												onValueChange={setQuality}
												max={100}
												min={1}
												step={1}
												className='w-full'
											/>
										</div>
									)}

									<Button
										onClick={resizeImage}
										disabled={isProcessing}
										className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
										{isProcessing
											? "Processing..."
											: "Resize Image"}
									</Button>
								</>
							)}
						</CardContent>
					</Card>
				</div>

				{/* Result Section */}
				{resizedImage && (
					<Card className='mt-8'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Download className='w-5 h-5' />
								Resized Image
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<img
										src={resizedImage || "/placeholder.svg"}
										alt='Resized'
										className='w-full h-48 object-contain bg-slate-50 rounded-lg'
									/>
								</div>
								<div className='space-y-4'>
									<div className='text-sm text-slate-600'>
										<p>
											New dimensions: {dimensions.width} ×{" "}
											{dimensions.height}px
										</p>
										<p>Format: {format.toUpperCase()}</p>
										{format !== "png" && (
											<p>Quality: {quality[0]}%</p>
										)}
									</div>
									<Button
										onClick={downloadImage}
										className='w-full'>
										<Download className='w-4 h-4 mr-2' />
										Download Resized Image
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				)}

				<canvas ref={canvasRef} className='hidden' />
			</div>
		</section>
	);
}
