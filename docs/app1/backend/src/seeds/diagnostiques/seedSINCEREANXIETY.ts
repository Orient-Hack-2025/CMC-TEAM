import sincereAnxiety from '../../data/diagnostiques/sincereAnxiety.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedSINCEREANXIETY = async () => {
  try {
    const diagnostiqueId = '67f92069952adef0016ae3f4'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'SINCERE-ANXIETY') {
      console.error('❌ Diagnostique is not SINCERE-ANXIETY');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = sincereAnxiety.map(
      (item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'axis' | 'options'>) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        axis: item.axis, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} SINCERE-ANXIETY questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding SINCERE-ANXIETY questions:', error);
  }
};

export default seedSINCEREANXIETY;
