// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TypeSocialNetwork = {
  "FACEBOOK": "FACEBOOK",
  "INSTAGRAM": "INSTAGRAM",
  "YOUTUBE": "YOUTUBE",
  "TIKTOK": "TIKTOK"
};

const { Collaborator, Project, Category, ProjectCollaborator, Position, SocialNetwork, Location } = initSchema(schema);

export {
  Collaborator,
  Project,
  Category,
  ProjectCollaborator,
  TypeSocialNetwork,
  Position,
  SocialNetwork,
  Location
};