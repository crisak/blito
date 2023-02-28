// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TypeFile = {
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE",
  "GIF": "GIF",
  "VIDEO_YOUTUBE": "VIDEO_YOUTUBE",
  "BASE64": "BASE64"
};

const Sizes = {
  "XS": "XS",
  "S": "S",
  "M": "M",
  "L": "L",
  "XL": "XL"
};

const ContentType = {
  "ALBUM": "ALBUM",
  "PROJECT": "PROJECT",
  "GALLERY": "GALLERY"
};

const TypeSocialNetwork = {
  "FACEBOOK": "FACEBOOK",
  "INSTAGRAM": "INSTAGRAM",
  "YOUTUBE": "YOUTUBE",
  "TIKTOK": "TIKTOK",
  "TWITTER": "TWITTER",
  "PINTEREST": "PINTEREST"
};

const { Content, Tag, Category, Collaborator, ContentTag, ContentCollaborator, File, ContentProject, Location, Position, SocialNetwork } = initSchema(schema);

export {
  Content,
  Tag,
  Category,
  Collaborator,
  ContentTag,
  ContentCollaborator,
  TypeFile,
  Sizes,
  ContentType,
  TypeSocialNetwork,
  File,
  ContentProject,
  Location,
  Position,
  SocialNetwork
};