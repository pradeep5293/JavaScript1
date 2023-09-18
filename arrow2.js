let obj1={
    greeting:"good morning1",
    students:["ram","shyam","bhola","rocky","pk"],
    speak(){
        this.students.forEach((students)=>{
            console.log(this.greeting+" good morning2 "+students);
        });
        
    }
}
obj1.speak();