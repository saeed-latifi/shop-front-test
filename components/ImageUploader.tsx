"use client";

import { useState, useRef } from "react";
import { ButtonAccent } from "./ButtonAccent";
import { ButtonPrimary } from "./ButtonPrimary";

export function ImageUploader() {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string>("");
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			setSelectedImage(file);

			const reader = new FileReader();
			reader.onloadend = () => {
				if (reader.result) setPreviewUrl(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const clicker = () => {
		setSelectedImage(null);
		setPreviewUrl("");
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleImageClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className="flex flex-col gap-4 w-full items-center justify-center">
			<input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} hidden />

			{previewUrl ? (
				<>
					<img
						src={previewUrl}
						alt="Preview"
						onClick={handleImageClick}
						className="max-w-80 max-h-80 object-contain mt-2 border border-border rounded-lg hover:border-blue-500 transition-all clicker"
					/>

					<ButtonAccent type="button" onClick={clicker}>
						clear
					</ButtonAccent>
				</>
			) : (
				<ButtonAccent type="button" onClick={() => fileInputRef.current?.click()}>
					Select An Image
				</ButtonAccent>
			)}
		</div>
	);
}
