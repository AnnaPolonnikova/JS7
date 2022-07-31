let Contacts = function(){
   this.LastName = ' ',
   this.Name = ' ',
   this.FirstName = ' ',
   this.Age = 0,
   this.Phone = false;

}
this.newContact = function(){
    this.LastName = prompt ('Введите фамилию'),
    this.Name = prompt ('Введите Имя'),
    this.FirstName = prompt ('Введите отчество'),
    this.Age = +prompt ('Введите возраст'),
    this.Phone = +prompt ('Введите номер телефона')
}

this.age = function(){
    if (age >= 0 && age <= 100){
        document.write (`Возраст: %{age}`)
    }
}
this.show = function (){
    document.write (newContact)
}