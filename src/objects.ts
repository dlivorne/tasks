import { queries } from "@testing-library/react";
import { isQuestion } from "./functions";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const cor = { ...question };
    const qtrim = cor.expected.trim().toLowerCase();
    const atrim = answer.trim().toLowerCase();
    if (qtrim === atrim) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    const temp2 = { ...question };
    if (temp2.type == "multiple_choice_question") {
        if (temp2.options.includes(answer)) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    const temp3 = { ...question };
    const id2 = temp3.id;
    const name2 = temp3.name.substring(0, 10);
    return id2 + ": " + name2;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    if (question.type == "multiple_choice_question") {
        const nlist = question.options.map((x) => "- " + x);
        return (
            "# " +
            question.name +
            "\n" +
            question.body +
            "\n" +
            nlist.join("\n")
        );
    } else {
        return "# " + question.name + "\n" + question.body;
    }
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    const temp = { ...question };
    temp.name = newName;
    return temp;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    const q2 = { ...question };
    if (q2.published == true) {
        q2.published = false;
    } else {
        q2.published = true;
    }
    return q2;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    oldQuestion.id;
    const temp7 = { ...oldQuestion };
    temp7.id = id;
    temp7.published = false;
    temp7.name = "Copy of " + oldQuestion.name;
    return temp7;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const tempp = { ...question, options: [...question.options, newOption] };
    return tempp;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const conttemp = { ...contentQuestion };
    conttemp.id = id;
    conttemp.name = name;
    conttemp.published = false;
    conttemp.points = points;
    return conttemp;
}
