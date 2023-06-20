let isEven: boolean = false;

type User = {
    name: string;
    age: number;
}

const peshoUser = {
    name: 'John',
    age: 30
} as User

interface  AnotherUser {
    firstName: string;
    id: number;
}

const anotherUserList = [
    {firstName: 'Ivan', id: 1}, 
    {firstName: 'Pesho', id: 2}, 
    {firstName: 'Gosho', id: 3}
]

anotherUserList.forEach((user) => {
    //
    
});