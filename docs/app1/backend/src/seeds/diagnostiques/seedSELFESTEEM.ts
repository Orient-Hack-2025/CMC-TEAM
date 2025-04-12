import selfEsteem from '../../data/diagnostiques/selfEsteem.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedSELFESTEEM = async () => {
  try {
    const diagnostiqueId = '67f91d4c40e0e375f8afdb11'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'SELF-ESTEEM') {
      console.error('❌ Diagnostique is not SELF-ESTEEM');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = selfEsteem.map(
      (item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'axis' | 'options'>) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        axis: item.axis, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} SELF-ESTEEM questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding SELF-ESTEEM questions:', error);
  }
};

export default seedSELFESTEEM;
