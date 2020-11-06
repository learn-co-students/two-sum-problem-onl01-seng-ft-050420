function bruteForceTwoSum(array, sum){
    let emptyArray=[]
    let fullArray=[]

    for(let i=0; i<array.length; i++){
      
      //console.log(array[i]+1)
      for(let j=i+1; j<array.length; j++){
      
        if(array[i]+array[j]===sum){
            emptyArray.push(array[i])
            emptyArray.push(array[j])
          
            fullArray.push(emptyArray)
           
        }
      }
       emptyArray=[]
    }
   
    return fullArray
}

function binarySearchTwoSum(array, sum){
    let firstIndex = 0;
    let lastIndex = array.length -1;
    let emptyArray =[]
    let finalArray =[]
    array.sort(function(a, b){return a-b})//sorts array
    
    for(let i=0; i<array.length-1; i++){//set a for loop looking through each
        //element in the array
        
       let found =binaryMatch(array.slice(i+1, array.length-1), sum-array[i])
       //splice(3,6), 4) looking for 4 because 6-2(first number)=4
        if (found===true){
            emptyArray.push(array[i])
            emptyArray.push(sum-array[i])
            finalArray.push(emptyArray)
            emptyArray =[]
        }
           

        }
        return finalArray
    }
    

    




function binaryMatch(sortedArray, missingNum){
    let firstIndex = 0
    let lastIndex = sortedArray.length -1
    
    while(lastIndex>=firstIndex){
      let middleIndex = Math.ceil((lastIndex+firstIndex)/2)
        if(missingNum===sortedArray[middleIndex]){
            return true
        } else if(missingNum<sortedArray[middleIndex]){
          lastIndex=middleIndex-1
        } else if(missingNum>sortedArray[middleIndex]){
          firstIndex =middleIndex+1
        }
    }
    
    return false
}

function hashTwoSum(array, sum){
    let hash ={}
    let finalArray =[]
    let emptyArray =[]
    //The first is to place each element into a hash.
    //And then the second step is to go through each element and see if the matching element exists.
    console.log(array)
        for(let i=0; i<array.length; i++){
            if(array[i] in hash == false){
                hash[array[i]]=1
            }else {
                hash[array[i]]=hash[array[i]]+1
            }
            //{2:1, 2 has occured 1 time in this array}
            
        }
        for(const element in hash){
            hash[element]=hash[element]-1
            if(hash[sum-element]>0){
                emptyArray.push(parseInt(element))
            emptyArray.push(sum-element)
            finalArray.push(emptyArray)
            emptyArray =[]
            }
        }
        return finalArray
}

