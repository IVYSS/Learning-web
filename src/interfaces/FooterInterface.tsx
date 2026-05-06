interface FooterListDataInterface {
  name: string;
  patch: string;
}

export interface FooterInterface {
  header: string;
  lists: FooterListDataInterface[];
}
