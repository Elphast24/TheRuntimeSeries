console.log("================================")
// console.log("")
console.log("THE RUNTIME SERIES")
console.log("--------------------------------")
console.log("EPISODE 1 - ROUND ROBIN")
console.log("================================")

// Step 1:
// Create an array of processes
const processes = [
    {id: "P1", burstTime: 5, remainingTime: 5},
    {id: "P2", burstTime: 3, remainingTime: 3},
    {id: "P3", burstTime: 7, remainingTime: 7}
]

const quantumTime = 3

let queue = [...processes]
let time = 0

while (queue.length > 0){
    const current = queue.shift()
    // console.log(current)
    // console.log(queue)
    const executionTime = Math.min(current.remainingTime, quantumTime)
    // console.log(executionTime)
    
    console.log(
        `\n${current.id} runs from ${time} to ${time + executionTime}`
    )
    time += executionTime

    current.remainingTime -= executionTime

    if (current.remainingTime > 0) {
        console.log(current)
        queue.push(current)
        console.log(queue)
    }else{
        console.log(queue)
        console.log(
            `${current.id} completed execution at ${time}\n`
        )
    }


}