import pression from '../../data/diagnostiques/pression.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedPRESSION = async () => {
  try {
    const diagnostiqueId = '67f91fd5749c647b384daa45'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'PRESSION') {
      console.error('❌ Diagnostique is not PRESSION');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = pression.map(
      (item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'axis' | 'options'>) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        axis: item.axis, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} PRESSION questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding PRESSION questions:', error);
  }
};

export default seedPRESSION;
