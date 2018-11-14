'use strict'

console.log('main')
function translate1() {
    
    var srcTxt = document.querySelector('#src1').value
    // var srcTxt = '8.5" H x 8.75" W x 2" D'
    var srcTxts = srcTxt.split(' ')
    var resTxts = []
    
    console.log('src',srcTxts)
    srcTxts.forEach((txt,i) => {
        if (txt.toUpperCase() === 'w'.toUpperCase()) {
            txt = strSplice(txt,0,4,'רוחב')
            resTxts[i] = txt
        }
        else if (txt.toUpperCase() === 'h'.toUpperCase()) {
            txt = strSplice(txt,0,4,'גובה')
            resTxts[i] = txt
        }
        else if (txt.toUpperCase() === 'd'.toUpperCase()) {
            txt = strSplice(txt,0,4,'עומק')
            resTxts[i] = txt
        }
        else if (txt.toUpperCase() === 'x'.toUpperCase()) {
            txt = strSplice(txt,0,1,'*')
            resTxts[i] = txt
        }
        else if (txt.toUpperCase() === '"'.toUpperCase()) {
            txt = strSplice(txt,0,4,'ס"מ')
        }
        else if (txt.includes('"')) {
            var idx = txt.indexOf('"')
            txt = strSplice(txt,idx,4,' ס"מ')
            txt = strSplice(txt,0,idx,convertInchToCm(txt,idx))
            resTxts[i] = txt
        }
    })
    // console.log('res:',resTxts)
    var resTxt = resTxts.join(' ')
    // console.log('res:',resTxt)
    document.querySelector('#res').value = resTxt
}

function convertInchToCm(txt,idx) {
    var numStr = txt.substring(0,idx)
    var num = parseFloat(numStr)
    num *= 2.54 * 10
    num = Math.round(num) / 10
    return num
}
function simpleConvertInchToCm(txt) {
    var num = parseFloat(txt)
    num *= 2.54 * 10
    num = Math.round(num) / 10
    document.querySelector('#res').value = num
}
function simpleConvertFeetToCm(txt) {
    var num = parseFloat(txt)
    num *= 30.48 * 10
    num = Math.round(num) / 10
    document.querySelector('#res').value = num
}
function simpleConvertFeetToM(txt) {
    var num = parseFloat(txt)
    num *= (30.48 / 100) * 10
    num = Math.round(num) / 10
    document.querySelector('#res').value = num
}

function simpleConvertLbToKg(txt) {
    var num = parseFloat(txt)
    num *= 0.454 * 10
    num = Math.round(num) / 10
    document.querySelector('#res').value = num
}

function copyToClipBoard() {
    document.querySelector('#res').select()
    document.execCommand('copy') 
}


function strSplice(str1, idx, length, value) {
    var str2 = '';
    for (var i = 0; i < idx; i++) {
        str2 += str1.charAt(i)
    }
    str2 += value
    for (var i = idx + length; i < str1.length; i++) {
        str2 += str1.charAt(i)
    }
    return str2
}
