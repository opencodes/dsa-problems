

function trap (height) {
    let n = height.length;
    if (n <= 2) {
        return 0;
    }
    let maxLeft = height[0];
    let maxRight = height[n - 1];
    let trappedWater = 0;
    let left = 1;   //Left pointer
    let right = n - 2;    //Right pointer

    while (left <= right) {
        if (maxLeft < maxRight) {
            if (height[left] >= maxLeft)
                maxLeft = height[left];
            else
                trappedWater += maxLeft - height[left];
            left += 1;
        } else {
            if (height[right] > maxRight)
                maxRight = height[right];
            else
                trappedWater += maxRight - height[right];
            right -= 1;
        }
    }
    return trappedWater;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));