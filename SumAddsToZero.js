let arr = [1,2,-2,-3,4,0,7];
let n = arr.length;
let numberOfDistinctTriples = 0;
for ( i=0; i<n-2; i++){
                for ( j=i+1; j<n-1; j++){
                    for ( k=j+1; k<n; k++){
                        if (arr[i]+arr[j]+arr[k] == 0)
                        {
                            console.log(arr[i]+" ");
                            console.log(arr[j]+" ");
                            console.log(arr[k]+" "+"\n");
                            numberOfDistinctTriples++;

                            found = true;
                        }
                    }
                }
            }if (found == false) {
                System.out.println(" not exist ");
            }
            console.log("Number of distinct triples = "+numberOfDistinctTriples);