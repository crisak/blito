import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TypeFile {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  GIF = "GIF",
  VIDEO_YOUTUBE = "VIDEO_YOUTUBE",
  BASE64 = "BASE64"
}

export enum Sizes {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL"
}

export enum ContentType {
  ALBUM = "ALBUM",
  PROJECT = "PROJECT",
  GALLERY = "GALLERY"
}

export enum TypeSocialNetwork {
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  YOUTUBE = "YOUTUBE",
  TIKTOK = "TIKTOK",
  TWITTER = "TWITTER",
  PINTEREST = "PINTEREST"
}

type EagerFile = {
  readonly data: string;
  readonly type: TypeFile | keyof typeof TypeFile;
  readonly mimeType: string;
  readonly caption?: string | null;
  readonly size?: number | null;
  readonly isBanner?: boolean | null;
}

type LazyFile = {
  readonly data: string;
  readonly type: TypeFile | keyof typeof TypeFile;
  readonly mimeType: string;
  readonly caption?: string | null;
  readonly size?: number | null;
  readonly isBanner?: boolean | null;
}

export declare type File = LazyLoading extends LazyLoadingDisabled ? EagerFile : LazyFile

export declare const File: (new (init: ModelInit<File>) => File)

type EagerContentProject = {
  readonly name: string;
  readonly description: string;
}

type LazyContentProject = {
  readonly name: string;
  readonly description: string;
}

export declare type ContentProject = LazyLoading extends LazyLoadingDisabled ? EagerContentProject : LazyContentProject

export declare const ContentProject: (new (init: ModelInit<ContentProject>) => ContentProject)

type EagerPosition = {
  readonly latitude: string;
  readonly longitude: string;
}

type LazyPosition = {
  readonly latitude: string;
  readonly longitude: string;
}

export declare type Position = LazyLoading extends LazyLoadingDisabled ? EagerPosition : LazyPosition

export declare const Position: (new (init: ModelInit<Position>) => Position)

type EagerSocialNetwork = {
  readonly type: TypeSocialNetwork | keyof typeof TypeSocialNetwork;
  readonly url: string;
  readonly username?: string | null;
}

type LazySocialNetwork = {
  readonly type: TypeSocialNetwork | keyof typeof TypeSocialNetwork;
  readonly url: string;
  readonly username?: string | null;
}

export declare type SocialNetwork = LazyLoading extends LazyLoadingDisabled ? EagerSocialNetwork : LazySocialNetwork

export declare const SocialNetwork: (new (init: ModelInit<SocialNetwork>) => SocialNetwork)

type EagerLocation = {
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly street?: string | null;
  readonly position: Position;
}

type LazyLocation = {
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly street?: string | null;
  readonly position: Position;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: ContentType | keyof typeof ContentType;
  readonly time: number;
  readonly size: Sizes | keyof typeof Sizes;
  readonly project?: ContentProject | null;
  readonly files: (File | null)[];
  readonly date: string;
  readonly location?: Location | null;
  readonly colors?: (string | null)[] | null;
  readonly userID: string;
  readonly Tags?: (ContentTag | null)[] | null;
  readonly Category?: Category | null;
  readonly Collaborators?: (ContentCollaborator | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contentCategoryId?: string | null;
}

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: ContentType | keyof typeof ContentType;
  readonly time: number;
  readonly size: Sizes | keyof typeof Sizes;
  readonly project?: ContentProject | null;
  readonly files: (File | null)[];
  readonly date: string;
  readonly location?: Location | null;
  readonly colors?: (string | null)[] | null;
  readonly userID: string;
  readonly Tags: AsyncCollection<ContentTag>;
  readonly Category: AsyncItem<Category | undefined>;
  readonly Collaborators: AsyncCollection<ContentCollaborator>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contentCategoryId?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly contents?: (ContentTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly contents: AsyncCollection<ContentTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly socials: (SocialNetwork | null)[];
  readonly fullName?: string | null;
  readonly photoUrl?: string | null;
  readonly contents?: (ContentCollaborator | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly socials: (SocialNetwork | null)[];
  readonly fullName?: string | null;
  readonly photoUrl?: string | null;
  readonly contents: AsyncCollection<ContentCollaborator>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Collaborator = LazyLoading extends LazyLoadingDisabled ? EagerCollaborator : LazyCollaborator

export declare const Collaborator: (new (init: ModelInit<Collaborator>) => Collaborator) & {
  copyOf(source: Collaborator, mutator: (draft: MutableModel<Collaborator>) => MutableModel<Collaborator> | void): Collaborator;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerContentTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContentTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentId?: string | null;
  readonly tagId?: string | null;
  readonly content: Content;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContentTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContentTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentId?: string | null;
  readonly tagId?: string | null;
  readonly content: AsyncItem<Content>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContentTag = LazyLoading extends LazyLoadingDisabled ? EagerContentTag : LazyContentTag

export declare const ContentTag: (new (init: ModelInit<ContentTag>) => ContentTag) & {
  copyOf(source: ContentTag, mutator: (draft: MutableModel<ContentTag>) => MutableModel<ContentTag> | void): ContentTag;
}

type EagerContentCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContentCollaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentId?: string | null;
  readonly collaboratorId?: string | null;
  readonly content: Content;
  readonly collaborator: Collaborator;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContentCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContentCollaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contentId?: string | null;
  readonly collaboratorId?: string | null;
  readonly content: AsyncItem<Content>;
  readonly collaborator: AsyncItem<Collaborator>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContentCollaborator = LazyLoading extends LazyLoadingDisabled ? EagerContentCollaborator : LazyContentCollaborator

export declare const ContentCollaborator: (new (init: ModelInit<ContentCollaborator>) => ContentCollaborator) & {
  copyOf(source: ContentCollaborator, mutator: (draft: MutableModel<ContentCollaborator>) => MutableModel<ContentCollaborator> | void): ContentCollaborator;
}