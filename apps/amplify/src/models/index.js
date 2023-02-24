// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TypeSocialNetwork = {
  "FACEBOOK": "FACEBOOK",
  "INSTAGRAM": "INSTAGRAM",
  "YOUTUBE": "YOUTUBE",
  "TIKTOK": "TIKTOK"
};

const { Tags, Project, Category, Collaborator, ProjectTags, ProjectCollaborator, Position, SocialNetwork, Location } = initSchema(schema);

export {
  Tags,
  Project,
  Category,
  Collaborator,
  ProjectTags,
  ProjectCollaborator,
  TypeSocialNetwork,
  Position,
  SocialNetwork,
  Location
};