let Contacts = function(){
   this.LastName = ' ',
   this.name = ' ',
   this.FirstName = ' ',
   this.age = 0,
   this.phone = false;

}
this.newContact = function(){
    this.LastName = prompt ('Введите фамилию'),
    this.Name = prompt ('Введите Имя'),
    this.FirstName = prompt ('Введите отчество'),
    this.age = +prompt ('Введите возраст'),
    this.phone = +prompt ('Введите номер телефона')
}