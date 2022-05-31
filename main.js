const ser = (arr) => {
    const json_arr = JSON.stringify(arr).replace('[', '').replace(']', '');
    return json_arr;
}

const unser = (json_arr) => {
    let arr = JSON.parse(`[${json_arr}]`);
    return arr;
}