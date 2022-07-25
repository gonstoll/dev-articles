type URL = string;
type ISODate = string;
export type Theme = 'light' | 'dark';

export interface Entity {
  id: number;
}

export interface NamedEntity extends Entity {
  name: string;
}

export interface DeletableEntity extends Entity {
  isDeleted: boolean;
}

export interface Dictionary<T> {
  [index: string]: T;
}

interface User {
  name: string;
  username: string;
  twitterUsername: string;
  githubUsername: string;
  websiteUrl: string;
  profileImage: string;
  profileImage90: string;
}

interface Organization {
  name: string;
  username: string;
  slug: string;
  profileImage: string;
  profileImage90: string;
}

export interface Tag extends NamedEntity {
  bgColorHex: string;
  textColorHex: string;
}

export interface Article extends Entity {
  typeOf: string;
  title: string;
  description: string;
  coverImage: string;
  readablePublishDate: string;
  socialImage: string;
  tagList: Array<string>;
  tags: string;
  slug: string;
  path: string;
  url: URL;
  cannonicalUrl: URL;
  commentsCount: number;
  positiveReactionsCount: number;
  publicReactionsCount: number;
  createdAt: ISODate;
  editedAt: ISODate | null;
  crosspostedAt: ISODate | null;
  publishedAt: ISODate;
  lastCommentAt: ISODate;
  publishedTimeStamp: ISODate;
  user: User;
  readingTimeMinutes: number;
  organization?: Organization;
  flareTag?: Omit<Tag, 'id'>;
}
