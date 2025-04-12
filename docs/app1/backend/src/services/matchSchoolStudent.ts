import { Request, Response } from 'express';
import { User } from '../models/userModel';
import { School } from '../models/schoolModel';

const matchSchoolStudent = async (req: Request, res: Response) => {
    try {

      const user = req.user;
      const existingUser = await User.findOne({ email: user.email }).lean();
      
      console.log(existingUser);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      const matchingSchools = await School.find({
        requiredHighSchoolFiliere: { $in: existingUser.filiere}
      }).select('title cities')
      .lean();


      console.log(matchingSchools);


  
      if (matchingSchools.length > 0) {
        return res.status(200).json(matchingSchools);
      }
  
      return res.status(200).json({ message: 'No matching schools found' });
    } catch (error) {
      console.error('Error matching schools:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

export { matchSchoolStudent };
