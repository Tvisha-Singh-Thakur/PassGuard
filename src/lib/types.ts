// Type definition for specific page types
export type PageTypes = 'dashboard' | 'favorites' | 'settings';

// Interface for options used in the content downloader function
export interface ContentDownloaderOptions {
  contentType: string; // MIME type of the content
  content: BlobPart[]; // Content data as an array of BlobParts
  fileName?: string; // Optional file name for download
}

// Type definition for specific icon names
export type IconName =
  | 'shield'
  | 'heart'
  | 'cog'
  | 'search'
  | 'trash'
  | 'edit'
  | 'plus'
  | 'moon'
  | 'link'
  | 'key'
  | 'eye'
  | 'eye-off'
  | 'copy'
  | 'dots-vertical'
  | 'chevron-right'
  | 'at-symbol'
  | 'sun'
  | 'check'
  | 'x-icon';

// Interface for representing an icon with its name and inner data
export interface Icon {
  name: IconName; // Name of the icon
  innerData: string; // Inner data associated with the icon
}

export interface IItem {
  id: string;
  name: string;
  siteUrl: string;
  email: string;
  username: string;
  password: string;
}
