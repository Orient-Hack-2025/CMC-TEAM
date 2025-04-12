import depressionData from '../../data/diagnostiques/depressionData.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedDEPRESSION = async () => {
  try {
    const diagnostiqueId = '67f91c4650c87cf0c2a02240'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'STRESS') {
      console.error('❌ Diagnostique is not STRESS');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = depressionData.map(
      (item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'axis' | 'options'>) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        axis: item.axis, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} OCEAN questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding OCEAN questions:', error);
  }
};

export default seedDEPRESSION;
