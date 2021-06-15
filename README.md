# Specs

```
Describe: Contact()
Test: 'It will return an object with first name, last name, phone number, email, and address'
Code: let contact1 = new Contact('Jennifer', 'Bordon, '123-456-7890', 'jennifer.bordon@gmail.com', '123 Sesame St')
Output: contact1 = {
  this.firstName = Jennifer;
  this.lastName = Bordon;
  this.phoneNumber = 123-456-7890;
  this.emailAddress = jennifer.bordon@gmail.com;
  this.address = 123 Sesame St;
}

Test: 'It will return an EmailAddress object inside of the Address object'
Code: let emailAddress1 = new EmailAddress('jennifer.bordon@gmail.com', "home")
Output: contact1 = {
  this.email = 'jennifer.bordon@gmail.com';
  this.type = "home";
}

Test: 'It will return a PhysicalAddress object inside of the Address object'
Code: let physicalAddress1 = new PhysicalAddress("123 Sesame St", "San Diego", "CA", "92114", "home") 
Output: contact1 = {
  this.street = "123 Sesame St";
  this.city = "San Diego";
  this.state = "CA";
  this.zip =  "92114";
  this.type = "home";




Test: 'It will return an Addresses object with an Address object, all inside the Contact object'
Code: let contact1 = new Contact('Jennifer', 'Bordon, '123-456-7890', 'jennifer.bordon@gmail.com', '123 Sesame St')
Output: contact1 = {
  this.firstName = Jennifer;
  this.lastName = Bordon;
  this.phoneNumber = 123-456-7890;
  this.emailAddress = jennifer.bordon@gmail.com;
  this.address = 123 Sesame St;
}
```