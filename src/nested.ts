import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let pubQuestion = [...questions];
    pubQuestion = pubQuestion.filter((x) => x.published == true);
    return pubQuestion;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nquestions = [...questions];
    const nempty2 = nquestions.filter(
        (x) => x.body !== "" || x.expected !== "" || x.options.length !== 0
    );
    return nempty2;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const idques = questions.find((element) => element.id == id);
    if (idques == undefined) {
        return null;
    } else {
        return idques;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let rquestion = [...questions];
    rquestion = rquestion.filter((x) => x.id != id);
    return rquestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const nquestions = [...questions];
    const realquestions = nquestions.map((x: Question): string => x.name);
    return realquestions;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const point = [...questions];
    const pquestion = point.reduce(
        (sum: number, x: Question) => sum + x.points,
        0
    );
    return pquestion;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let pubQuestion2 = [...questions];
    pubQuestion2 = pubQuestion2.filter((x) => x.published == true);
    const pquestion2 = pubQuestion2.reduce(
        (sum: number, x: Question) => sum + x.points,
        0
    );
    return pquestion2;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const words = "id,name,options,points,published" + "\n";
    const qCSV = questions
        .map(
            (x: Question): string =>
                `${x.id},${x.name},${x.options.length},${x.points},${x.published}`
        )
        .join("\n");
    return words + qCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans: Answer[] = questions.map(
        (x: Question): Answer => ({
            questionId: x.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let pques = [...questions];
    pques = questions.map(
        (x: Question): Question => ({ ...x, published: true })
    );
    return pques;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let narr = [...questions];
    narr = questions.filter((x) => x.type == questions[0].type);
    if (narr.length == questions.length) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    let newquestion = [...questions];
    newquestion = [...questions, makeBlankQuestion(id, name, type)];
    return newquestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    let newArr = [...questions];
    newArr = questions.map((x) => {
        if (x.id === targetId) {
            return { ...x, name: newName };
        }
        return x;
    });
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    let newArr2 = [...questions];
    newArr2 = questions.map((x) => {
        if (x.id === targetId) {
            if (newQuestionType !== "multiple_choice_question") {
                return { ...x, type: newQuestionType, options: [] };
            } else {
                return { ...x, type: newQuestionType };
            }
        }
        return x;
    });
    return newArr2;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let temp2 = [...questions];
    if (targetOptionIndex === -1) {
        temp2 = temp2.map((x: Question): Question => {
            if (x.id === targetId) {
                x = { ...x, options: [...x.options, newOption] };
            }
            return x;
        });
    } else {
        let temp3: Question;
        temp2 = temp2.map((x: Question): Question => {
            if (x.id === targetId) {
                temp3 = { ...x, options: [...x.options] };
                temp3.options.splice(targetOptionIndex, 1, newOption);
                return temp3;
            }
            return x;
        });
    }
    return temp2;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const temp = [...questions];
    const qindex: number = temp.findIndex(
        (x: Question): boolean => x.id === targetId
    );
    temp.splice(qindex + 1, 0, duplicateQuestion(newId, questions[qindex]));
    return temp;
}
