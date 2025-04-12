import mongoose, { Document, model, Schema } from 'mongoose';
import { EBlogType, IBlog } from '../types/blogTypes';

interface IBlogSchema extends IBlog, Document {}

const blogSchema = new Schema<IBlogSchema>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: EBlogType,
    required: true,
  },
  school: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Blog = model<IBlogSchema>('Blog', blogSchema);

export { Blog, IBlogSchema };
