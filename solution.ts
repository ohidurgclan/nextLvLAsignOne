type P1value= string | number | boolean | undefined;
const formatValue = (value: P1value):P1value =>{
    if(typeof(value) === "string"){
        return value.toUpperCase();
    }else if(typeof(value) === "number"){
        return value * 10;
    }else if(typeof(value) === "boolean"){
        if(value === true){
            return false;
        }else{
           return true
        }
    }else{
        return 'Invalid Input';
    }
}

type P2value = string | any[];
function getLength(value: P2value): number {
  if (typeof value === "string") {
    return value.length;
  }else if (Array.isArray(value)) {
    return value.length;
  }else{
    return(404);
  }
}

class Person{
    public name:string;
    public age:number;
    constructor(name:string ,age: number){
        this.name = name;
        this.age = age
    }
    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

type P4value = { title: string; rating: number };
const filterByRating = (value: P4value[]): P4value[] => {
  const res: P4value[] = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i].rating >= 4 && value[i].rating <= 5) {
      res.push(value[i])
    }
  }
  return res;
};

type P5value = { 
    id:number;
    name:string;
    email:string;
    isActive:boolean; 
};
const filterActiveUsers = (value: P5value[]): P5value[] => {
  const res: P5value[] = [];
  for (let i = 0; i < value.length; i++) {
    if (typeof(value[i].isActive) === "boolean" && value[i].isActive === true) {
      res.push(value[i])
    }
  }
  return res;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};
const printBookDetails = (value: Book): void => {
  const checkAvailable = value.isAvailable ? 'Yes' : 'No';
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${checkAvailable}`
  );
};

type P7value = (number | string)[];
const getUniqueValues = (valu1: P7value, valu2: P7value): P7value => {
    let mirror = false;
    const res: (number | string)[] = [];
    const largeArrayLength = valu1.length > valu2.length ? valu1.length : valu2.length;
    for (let i = 0; i < largeArrayLength; i++) {
        if (valu1[i] === valu2[i]) {
            mirror = false;
            for (let j = 0; j < res.length; j++) {
                if (res[j] === valu1[i]) {
                    mirror = true;
                    break;
                }
            }
            if (!mirror && valu1[i] !== undefined) {
                res[res.length] = valu1[i];
            }
        } else if (i < valu1.length) {
            mirror = false;
            for (let j = 0; j < res.length; j++) {
                if (res[j] === valu1[i]) {
                    mirror = true;
                    break;
                }
            }
            if (!mirror) {
                res[res.length] = valu1[i];
            }
        }
        if (i < valu2.length) {
            mirror = false;
            for (let j = 0; j < res.length; j++) {
                if (res[j] === valu2[i]) {
                    mirror = true;
                    break;
                }
            }
            if (!mirror) {
                res[res.length] = valu2[i];
            }
        }
    }
    const num: number[] = [];
    const str: string[] = [];
    for (let i = 0; i < res.length; i++) {
        if (typeof res[i] === 'number') {
            num[num.length] = res[i] as number;
        } else {
            str[str.length] = res[i] as string;
        }
    }
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = 0; j < num.length - 1 - i; j++) {
            if (num[j] > num[j + 1]) {
                const temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = 0; j < str.length - 1 - i; j++) {
            if (str[j] > str[j + 1]) {
                const temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;
            }
        }
    }
    return [...num, ...str];
}

type P8value = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice =(valu: P8value[]):number => {
  let totalPrice = valu.map(item => 
    item.price * item.quantity * (1 - (item.discount ?? 0) / 100)
    ).reduce((total, itemPrice) => total + itemPrice, 0);
    return totalPrice;
}