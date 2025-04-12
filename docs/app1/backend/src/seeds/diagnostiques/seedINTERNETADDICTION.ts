import internetAddiction from '../../data/diagnostiques/internetAddiction.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedINTERENETADDICTION = async () => {
  try {
    const diagnostiqueId = '67f91ec51058d250fd41f7c0'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'INTERNET-ADDICTION') {
      console.error('❌ Diagnostique is not INTERNET-ADDICTION');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = internetAddiction.map(
      (item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'axis' | 'options'>) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        axis: item.axis, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} INTERNET-ADDICTION questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding INTERNET-ADDICTION questions:', error);
  }
};

export default seedINTERENETADDICTION;
