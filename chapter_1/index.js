var insertSort = function(arr) {
    for(var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i;
        while(j > 0 && arr[j-1] > current) {
            var hold = arr[j];
            arr[j] = arr[j-1];
            j--;
            arr[j] = current;
        }
    }
    return arr;
};

module.exports = insertSort;