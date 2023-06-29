let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 1) {
            p1sum = 21
        }
        if (p1sum == 14) {
            p1sum = 49
        }
        if (p1sum == 24) {
            p1sum = 44
        }
        if (p1sum == 38) {
            p1sum = 80
        }
        if (p1sum == 56) {
            p1sum = 75
        }
        if (p1sum == 70) {
            p1sum = 88
        }
        if (p1sum == 74) {
            p1sum = 86
        }
        if (p1sum == 78) {
            p1sum = 99
        }
        if (p1sum == 25) {
            p1sum = 4
        }
        if (p1sum == 29) {
            p1sum = 10
        }
        if (p1sum == 45) {
            p1sum = 26
        }
        if (p1sum == 41) {
            p1sum = 23
        }
        if (p1sum == 73) {
            p1sum = 46
        }
        if (p1sum == 94) {
            p1sum = 63
        }
        if (p1sum == 91) {
            p1sum = 71
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        
        if (p2sum == 1) {
            p2sum = 21
        }
        if (p2sum == 14) {
            p2sum = 49
        }
        if (p2sum == 24) {
            p2sum = 44
        }
        if (p2sum == 38) {
            p2sum = 80
        }
        if (p2sum == 56) {
            p2sum = 75
        }
        if (p2sum == 70) {
            p2sum = 88
        }
        if (p2sum == 74) {
            p2sum = 86
        }
        if (p2sum == 78) {
            p2sum = 99
        }
        if (p2sum == 25) {
            p2sum = 4
        }
        if (p2sum == 29) {
            p2sum = 10
        }
        if (p2sum == 45) {
            p2sum = 26
        }
        if (p2sum == 41) {
            p2sum = 23
        }
        if (p2sum == 73) {
            p2sum = 46
        }
        if (p2sum == 94) {
            p2sum = 63
        }
        if (p2sum == 91) {
            p2sum = 71
        }

        sum = p2sum


    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})