const container = document.getElementById('container')
console.log(container)

function spinWords(string){
    //TODO Have fun :)
    let wordArr = string.split(" ")
    let reversedArr = []
    wordArr.forEach(word=>{
        if(word.length>=5){
             let revWord = word.split('').reverse().join('')
        reversedArr.push(revWord)
        }else{
            reversedArr.push(word)

        }
    })
    let result = reversedArr.join(' ')
    return result
    
  }
console.log(spinWords("bria kaboyi mongo"))
console.log("brian".length)