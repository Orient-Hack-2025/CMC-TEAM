import { ISchoolSchema } from '../models/schoolModel';

export enum EBlogType {
  CONCOURS = 'concours',
  ORIENTATION = 'orientation',
  NEWS = 'news',
}

export interface IBlog {
  title: string;
  content: string;
  category: EBlogType;
  school: ISchoolSchema['_id'];
}
