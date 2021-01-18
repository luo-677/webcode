// 1. 利用set进行去重  [无法对对象和数组进行去重]
let arr = [1, 2, 3, 2, 1, 4, "a", "b", "a", {}, { "a": "1" }, {},
    [1, 2, 3],
    [1, 2, 4],
    [1, 2, 3]
];
let arr1 = [...new Set(arr)];
// console.log(arr1);

// 2. for循环嵌套for循环，使用splice进行去重  [无法对对象和数组进行去重]
// 将最左边的数单独拿出来与右边的所有数进行比较，如有相同，则将右边的数进行删除
function unique1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
let arr2 = unique1(arr);
// console.log(arr2);

// 3. 利用indexof进行去重  [无法对对象和数组进行去重]
function unique2(arr) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr3.indexOf(arr[i]) == -1) {
            arr3.push(arr[i]);
        }
    }
    return arr3;
}
// console.log(unique2(arr));

// 4. 利用sort()方法进行排序去重  [无法对对象和数组进行去重]
function unique3(arr) {
    arr = arr.sort();
    let arr4 = [];
    arr4.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            arr4.push(arr[i]);
        }
    }
    return arr4;
}
// console.log(unique3(arr));

// 5. 利用includes  [无法对对象和数组进行去重]
function unique4(arr) {
    let arr5 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr5.includes(arr[i])) {
            arr5.push(arr[i]);
        }
    }
    return arr5;
}
console.log(unique4(arr));