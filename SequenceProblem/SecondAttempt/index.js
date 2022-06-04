function getMissingNo(a,n) {

    a.sort();

    let n_elements_sum = 0;

    let min = a[0];
    let max = a[a.length-1];

    for (let i = min; i < max+1; i++) {
        n_elements_sum = n_elements_sum + i;
    }

    let sum = 0;

    
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    console.log("min val " + min);
    console.log("max val " + max);
    console.log("all sum = " + n_elements_sum);
    console.log("sequence sum = " + sum);

    let diff = (n_elements_sum - sum); 

    if(diff === 0) {

        n_elements_sum = 0;
        
        n_elements_sum = (n/2)*(min + max);

        diff = n_elements_sum - sum;

        if(diff % 2 == 0) {
            return min-1;
        } else {
            return max+1;
        }
        
    } else return diff;

}

    let a =  [21,22,23,24,25,26,27,28,29]; //30 missing
    // let a =  [22,23,24,25,26,27,28,29,30]; //21 missing
    // let a =  [21,22,24,25,26,27,28,29,30]; //23 missing

    let n=a.length+1;
    let miss=getMissingNo(a,n)
    console.log("--------------------")
    console.log("missing val = " + miss)
    console.log("--------------------")

