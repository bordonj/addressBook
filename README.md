# Specs

```
Describe: Contact()
Test: 'It will return an object with first name, last name, phone number, email, and address'
Code: let contact1 = new Contact('Jennifer', 'Bordon, '123-456-7890', 'jennifer.bordon@gmail.com', '123 Sesame St')
Output: contact1 = {
  firstName = Jennifer;
  lastName = Bordon;
  phoneNumber = 123-456-7890;
  emailAddress = jennifer.bordon@gmail.com;
  address = 123 Sesame St;
}

Test: 'It will return a address object with a empty email object and a empty physical address object'
Code: let address1 = new Address('physicalAddress', 'emailAddress')
Output: address1 = {
  physicalAddress = {};
  emailAddress = {};
}

Test: 'It will return an EmailAddress object inside of the Address object'
Code: let emailAddress1 = new EmailAddress('jennifer.bordon@gmail.com', "home")
Output: emailAddress1 = {
  email = 'jennifer.bordon@gmail.com';
  type = "home";
}

Test: 'It will return a PhysicalAddress object inside of the Address object'
Code: let physicalAddress1 = new PhysicalAddress("123 Sesame St", "San Diego", "CA", "92114", "home") 
Output: physicalAddress1 = {
  street = "123 Sesame St";
  city = "San Diego";
  state = "CA";
  zip =  "92114";
  type = "home"; }

Test: 'It will create a method to add the PhyscialAddress object and the EmailAddress object to the Address Object'
Code: address1.addAddress(physicalAddress1, emailAddress1);
Output: address1 = {
  physicaAddress1 = {}
  emailAddress1 = {}  
}

Test: 'it will create a method to add the Address object to the Contact object'
Code: contact1.addAdress(address1);
Output: contact1 = {
  address1 {};
  firstName = Jennifer;
  lastName = Bordon;
  phoneNumber = 123-456-7890
}
```