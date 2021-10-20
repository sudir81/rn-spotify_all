export type album = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
};

export type albumCategory = {
  id: string;
  title: string;
  albums: [album];
};
