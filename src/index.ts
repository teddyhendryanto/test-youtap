export const checkIsBracketBalance = (string: string): boolean => {
    const openBrackets = ['{', '[', '('];

    const temp: string[] = [];
    for (let i = 0; i < string.length; i++) {
        const input = string[i];

        if (openBrackets.includes(input)) {
            temp.push(input);
            continue;
        }

        if (temp.length === 0) return false;

        let openBracket: string | undefined;
        switch (input) {
            case ')':
                openBracket = temp.pop();
                if (openBracket === '{' || openBracket === '[') return false;
                break;
            case '}':
                openBracket = temp.pop();
                if (openBracket === '(' || openBracket === '[') return false;
                break;
            case ']':
                openBracket = temp.pop();
                if (openBracket === '{' || openBracket === '(') return false;
                break;
        }
    }

    return temp.length === 0;
};

const result1 = checkIsBracketBalance('()');
console.log('result1:', result1);

const result2 = checkIsBracketBalance('()()');
console.log('result2:', result2);

const result3 = checkIsBracketBalance(')(');
console.log('result3:', result3);

const result4 = checkIsBracketBalance('');
console.log('result4:', result4);

const result5 = checkIsBracketBalance('((()))');
console.log('result5:', result5);

const result6 = checkIsBracketBalance('((()');
console.log('result6:', result6);

const result7 = checkIsBracketBalance('({})()');
console.log('result7:', result7);

const result8 = checkIsBracketBalance('({})({})');
console.log('result8:', result8);

const result9 = checkIsBracketBalance('({})[]({})');
console.log('result9:', result9);

const result10 = checkIsBracketBalance('({)}()');
console.log('result10:', result10);
