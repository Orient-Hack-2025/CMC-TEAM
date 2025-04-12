import { IData } from "../types/diagnostiqueTypes";

interface TraitResult {
    type: string;
    score: number;
    desc: string;
}

function calculatePressionResult(data: IData): TraitResult[] {
    const axisScores = data.answers.reduce((acc, curr) => {
        const key = curr.axis;
        acc[key] = (acc[key] || 0) + curr.answers;
        return acc;
    }, {} as Record<string, number>);

    return Object.entries(axisScores).map(([axis, score]) => {
        let desc = '';

        if (score >= 28 && score <= 39) desc = 'غائبة';
        else if (score >= 40 && score <= 50) desc = 'خفيفة';
        else if (score >= 51 && score <= 61) desc = 'متوسطة';
        else if (score >= 61 && score <= 72) desc = 'مرتفعة ';
        else if (score >= 73 && score <= 84) desc = 'حادة  ';
        else desc = 'غير معروفة';

        return {
            type: axis,
            score,
            desc,
        };
    });
}

export default calculatePressionResult;
