// =====================================
//      THE RUNTIME SERIES EPISODE 2
//              PAGING & LRU
// =====================================


let referenceString = [1,2,3,2,0,1];
let frames = [];
const capacity = 3;
let usedHistory = [];

while (referenceString.length > 0) {
    const arrivingPage = referenceString.shift();
    console.log(`\nArriving Page: ${arrivingPage}`);
    
    const index = frames.indexOf(arrivingPage);
    
    if (index > -1) {
        // Page Hit
        console.log('Page Hit');
        // Update history: remove from old position, push to the end (most recent)
        const historyIndex = usedHistory.indexOf(arrivingPage);
        usedHistory.splice(historyIndex, 1);
        usedHistory.push(arrivingPage);
    } else {
        // Page Fault
        console.log('Page Fault');
        
        if (frames.length < capacity) {
            // Space available: just insert
            frames.push(arrivingPage);
            usedHistory.push(arrivingPage);
        } else {
            // Frames full: evict LRU page
            const oldestPage = usedHistory.shift(); 
            const indexOfOldestPage = frames.indexOf(oldestPage);
            
            // Replace the oldest page with the arriving page
            frames.splice(indexOfOldestPage, 1, arrivingPage);
            usedHistory.push(arrivingPage);
        }
    }
    console.log(`Frames: [${frames}] | History: [${usedHistory}]`);
}

console.log(`\nFinal frames = [${frames}]`);
console.log(`Used History = [${usedHistory}]`);