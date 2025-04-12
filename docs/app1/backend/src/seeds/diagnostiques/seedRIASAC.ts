import riasecData from '../../data/diagnostiques/riasecData.json';
import { Diagnostique } from '../../models/diagnostiqueModel';
import { IQuestionSchema, Question } from '../../models/questionModel';

const seedRIASEC = async () => {
  try {
    const diagnostiqueId = '67f903195ec716ac107c4154'; // Make sure this ID exists in your Diagnostique collection

    // Check if the diagnostique exists
    const diagnostique = await Diagnostique.findById(diagnostiqueId);
    if (!diagnostique) {
      console.error('❌ Diagnostique not found with given ID');
      return;
    }

    if (diagnostique.diagnostiqueName !== 'RIASEC') {
      console.error('❌ Diagnostique is not RIASEC');
      return;
    }

    // Remove existing questions if needed (optional)
    await Question.deleteMany({ diagnostique: diagnostiqueId });

    const questionDocs = riasecData.map(
      (
        item: Pick<IQuestionSchema, 'name' | 'diagnostique' | 'question' | 'chaine' | 'options'>
      ) => ({
        name: item.name,
        diagnostique: diagnostiqueId,
        question: item.question,
        chaine: item.chaine, // corrected: use axis for RIASEC
        options: item.options,
      })
    );

    await Question.insertMany(questionDocs);
    console.log(`✅ Seeded ${questionDocs.length} RIASEC questions successfully.`);
  } catch (error) {
    console.error('❌ Error seeding RIASEC questions:', error);
  }
};

export default seedRIASEC;
