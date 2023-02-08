const printTriangle = (total) => {
    if (total % 2 === 0) {
        return
    } else {
        for (var i = 0; i < total; i++) {
            var string = ''
            if (i <= total / 2) {
                for (var j = 0; j < total; j++) {
                    if (j >= i && j < total - i) {
                        string += '*'
                    } else {
                        string += '-'
                    }
                }
            } else {
                for (var k = 0; k < total; k++) {
                    if (k >= total - i - 1 && k <= i) {
                        string += '*'
                    } else {
                        string += '-'
                    }
                }
            }
            console.log(string)
        }
    }
}

printTriangle(15)