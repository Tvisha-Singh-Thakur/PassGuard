import type { ContentDownloaderOptions } from '$lib/types';

// Function to copy text to the clipboard using the Clipboard API
export function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

// Function to download content as a file
export function contentDownloader({
  contentType = 'application/json', // Default content type is 'application/json'
  content,
  fileName
}: ContentDownloaderOptions): void {
  // Create a Blob from the content data
  const blob = new Blob(content, {
    type: contentType
  });

  // Create a URL for the Blob
  const fileUrl = URL.createObjectURL(blob);

  // Create a temporary link element for initiating the download
  const link = document.createElement('a');
  link.download = fileName || generateRandomFileName(); // Use the provided fileName or generate a random one
  link.href = fileUrl;
  link.click();

  // Revoke the URL to free up resources
  URL.revokeObjectURL(fileUrl);

  // Remove the temporary link element
  link.remove();
}

// Function to generate a random file name
export function generateRandomFileName(): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_-';
  let fileName = '';

  // Generate a random 12-character file name
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    fileName += characters.charAt(randomIndex);
  }

  return fileName;
}

export function generateUniqueId(): string {
  // Get current timestamp
  const timestamp = new Date().getTime();

  // Generate a random number
  const randomNumber = Math.random();

  // Combine timestamp and random number to create a unique ID
  const uniqueId = `${timestamp}_${randomNumber}`;

  return uniqueId;
}

