const person = {
    name:'Sucoding',
    age: 20,
    isAdult : false,
    "phone number": "010-1234-1234",
    printInfo : function(){
        console.log('printInfo');
    },
};
console.log(person.name);
console.log(person['phone number']);
person.printInfo();
// 객체 안에 있는 함수는 메서드라고 한다
// 객체 안의 키값이 공백이 있을 경우 11라인처럼 접근해야한다
person.name = '철수';
console.log(person.name);

//--------------------------------------------------------------------
// 빈 객체에 값을 추가 하고 싶을 때
const person2 = {};
person2.name = '영희';
person2.age = 30;
console.log(person2);

delete person2.age;    // 삭제할 때
console.log(person2);

//---------------------------------------------------------------------
// 깊은 복사 , 얕은 복사
let num = 10;
let num2 = num;

num = 30;
console.log(num, num2);
// num은 30이 되고 num2는 10이 된다 결국 각각의 메모리에 따로 저장된다는 말 (깊은복사)

const obj = {
    name: '철수',
};
const obj2 = obj;

delete obj.name;
console.log(obj, obj2);
// obj의 name만 지웠지만 결국 obj2까지 지워진다 객체는 메모리주소를 참조하기때문에 다 지워짐(얕은복사)

