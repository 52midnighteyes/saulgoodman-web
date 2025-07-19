export interface IRandomUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

export interface ISimplifiedUser {
  fullname: string;
  email: string;
  picture: string;
}
