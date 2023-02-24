import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TypeSocialNetwork {
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  YOUTUBE = "YOUTUBE",
  TIKTOK = "TIKTOK"
}

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
  readonly username: string;
}

type LazySocialNetwork = {
  readonly type: TypeSocialNetwork | keyof typeof TypeSocialNetwork;
  readonly url: string;
  readonly username: string;
}

export declare type SocialNetwork = LazyLoading extends LazyLoadingDisabled ? EagerSocialNetwork : LazySocialNetwork

export declare const SocialNetwork: (new (init: ModelInit<SocialNetwork>) => SocialNetwork)

type EagerLocation = {
  readonly country?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly street?: string | null;
  readonly position?: Position | null;
}

type LazyLocation = {
  readonly country?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly street?: string | null;
  readonly position?: Position | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly username: string;
  readonly email?: string | null;
  readonly socials?: SocialNetwork | null;
  readonly photoUrl?: string | null;
  readonly projects?: (ProjectCollaborator | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly username: string;
  readonly email?: string | null;
  readonly socials?: SocialNetwork | null;
  readonly photoUrl?: string | null;
  readonly projects: AsyncCollection<ProjectCollaborator>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Collaborator = LazyLoading extends LazyLoadingDisabled ? EagerCollaborator : LazyCollaborator

export declare const Collaborator: (new (init: ModelInit<Collaborator>) => Collaborator) & {
  copyOf(source: Collaborator, mutator: (draft: MutableModel<Collaborator>) => MutableModel<Collaborator> | void): Collaborator;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly banner?: string | null;
  readonly description: string;
  readonly location?: Position | null;
  readonly userID?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly category?: Category | null;
  readonly collaborators?: (ProjectCollaborator | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectCategoryId?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly banner?: string | null;
  readonly description: string;
  readonly location?: Position | null;
  readonly userID?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly category: AsyncItem<Category | undefined>;
  readonly collaborators: AsyncCollection<ProjectCollaborator>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectCategoryId?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
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

type EagerProjectCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectCollaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly collaboratorId?: string | null;
  readonly projectId?: string | null;
  readonly collaborator: Collaborator;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectCollaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly collaboratorId?: string | null;
  readonly projectId?: string | null;
  readonly collaborator: AsyncItem<Collaborator>;
  readonly project: AsyncItem<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectCollaborator = LazyLoading extends LazyLoadingDisabled ? EagerProjectCollaborator : LazyProjectCollaborator

export declare const ProjectCollaborator: (new (init: ModelInit<ProjectCollaborator>) => ProjectCollaborator) & {
  copyOf(source: ProjectCollaborator, mutator: (draft: MutableModel<ProjectCollaborator>) => MutableModel<ProjectCollaborator> | void): ProjectCollaborator;
}