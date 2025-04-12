import mongoose from 'mongoose';
import seedRIASEC from '../seeds/diagnostiques/seedRIASAC';
import seedOCEAN from '../seeds/diagnostiques/seedOCEAN';
import seedDEPRESSION from '../seeds/diagnostiques/seedDEPRESSION';
import seedSTRESS from '../seeds/diagnostiques/seedSTRESS';
import seedSELFESTEEM from '../seeds/diagnostiques/seedSELFESTEEM';
import seedINTERENETADDICTION from '../seeds/diagnostiques/seedINTERNETADDICTION';
import seedPRESSION from '../seeds/diagnostiques/seedPRESSION';
import seedSINCEREANXIETY from '../seeds/diagnostiques/seedSINCEREANXIETY';
import seedCareers from '../seeds/career/seedCareer';
import seedFiliere from '../seeds/scholarLevel/seedFiliere';
import seedBranch from '../seeds/scholarLevel/seedBranch';
import seedSchool from '../seeds/scholarLevel/seedSchool';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || '';
    await mongoose.connect(mongoURI);
    // use it to seed the database

    // --Diagnostiques--

    // await seedRIASEC();
    // await seedOCEAN();
    // await seedDEPRESSION();
    // await seedSTRESS();
    // await seedSELFESTEEM();
    // await seedINTERENETADDICTION();
    // await seedPRESSION();
    // await seedSINCEREANXIETY();
    // await seedCareers();
    // await seedFiliere();
    // await seedBranch();
    // await seedSchool();

    // --Career--

    console.log('Connected successfully to mongo 🍵');
  } catch (error) {
    console.error('Error connecting to mongoDb ❌: ', error);
  }
};

export default connectDB;
