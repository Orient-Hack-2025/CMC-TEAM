import stress from '../../data/diagnostiques/examStress.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedSTRESS = async () => {
  try {
    const diagnostiqueId = '67f91af5435e96a75159bc2c'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'DEPRESSION') {
      console.error('❌ Diagnostique is not OCEAN');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = stress.map(
      (item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'axis' | 'options'>) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        axis: item.axis, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} STRESS questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding OCEAN questions:', error);
  }
};

export default seedSTRESS;
