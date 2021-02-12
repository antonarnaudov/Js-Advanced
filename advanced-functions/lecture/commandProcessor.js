function solution() {
    let text = ''

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(string){
        text = text.concat(string)
    }

    function removeStart(n) {
        text = text.slice(n)
    }

    function removeEnd(n) {
        text = text.slice(0, -n)
    }

    function print() {
        console.log(text)
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();