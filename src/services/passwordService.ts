export default function generatePass() {
    let password: string = ''
    let characteres: string = '@$#123456789abcdefghijkABCDEFGHJKLMNOP!&'
    let passWordLength = 8

    for(let index = 0; index < passWordLength; index++){
        password += characteres.charAt(
            Math.floor(Math.random() * characteres.length)
        )
    }

    return password

}