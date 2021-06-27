export interface IAssignment {
  name: string;
  items: IAssignmentItem[];
}

interface IAssignmentItem {
  type: string;
    product: IProduct;
}

export interface IProduct {
  id: number;
  title: string;
  image: string;
  visible_before_active: boolean;
  active: boolean;
  playable: boolean;
  minigame: any;
  badge: any;
  type: Record<string,any>;
}

export interface ILeaderBoard {
  title: string;
  category: string;
  scope: string;
  company: ICompany;
  my_entry: any;
  entries: ILeaderBoardItem[];
}

interface ILeaderBoardItem {
  user: IUser;
  rank: number;
  value: number;
}

interface IUser {
  username: string;
  id: number;
  image: string;
  department: string;
  level: number;
  first_name: string;
  last_name: string;
}

interface ICompany {
  id: number;
  name_key: string;
  name: string;
}
