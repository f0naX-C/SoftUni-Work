function solve(text) {
    const isUpperCase = (letter) => letter.toUpperCase() === letter;
    const getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96;

    let words = text.split(' ').filter((el) => el !== ' ');
    let totalSum =0;

    words.forEach((word) => {
        let letterBefore = word[0];
        let letterAfter = word[word.length - 1];
        let number = Number(word.substring(1,word.length - 1));
        let beforePosition = getAlphabetPosition(letterBefore.toUpperCase());
        let afterPosition = getAlphabetPosition(letterAfter.toUpperCase());

        if (isUpperCase(letterBefore)) {
            number /= beforePosition;
        } else {
            number *= beforePosition;
        }

        if (isUpperCase(letterAfter)) {
            number /= afterPosition;
        } else {
            number *= afterPosition;
        }

        totalSum += number;
    });
    console.log(totalSum.toFixed(2));
}

solve('A12b s17G');