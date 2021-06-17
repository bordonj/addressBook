// Business Logic for AddressBook -----------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}

//Business Logic for Contacts -----------------
function Contact(firstName, lastName, phoneNumber, emailAddress, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses = {};
}

Contact.prototype.addAddress = function(addresses) {
  this.addresses = addresses;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Contact.prototype.update = function(newName) {
  return this.firstName = newName;
}

// Buisness Logic for Addresses
function Addresses() {
  this.physicalAddress = {};
  this.emailAddress = {};
}

Addresses.prototype.addAddresses = function(physicalAddress, emailAddress) {
  this.physicalAddress[physicalAddress.street] = physicalAddress;
  this.emailAddress[emailAddress.email] = emailAddress;
};
// Addresses.prototype.addPhysicalAddress = function(physicalAddress) {
//   this.physicalAddress[physicalAddress.street] = physicalAddress;
// };

// Addresses.prototype.addEmailAddress = function(emailAddress) {
//   this.emailAddress[emailAddress.email] = emailAddress;
// };

// Business Logic for Physical Address
function PhysicalAddress(street, city, state, zip, type) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.type = type;
}

// Business Logic for Email Address
function EmailAddress(email, type) {
  this.email = email;
  this.type = type;
}

// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
 
}

$(document).ready(function() {
  attachContactListeners();
  
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    // Basic Contact Details
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");

    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);

    // address ui logic
    let newAddress = new Addresses();
    // Physcial Address 
    const inputtedStreet = $("input#street-name").val();
    const inputtedCity = $("input#city").val();
    const inputtedState = $("input#state").val();
    const inputtedZipcode = $("input#zipcode").val();
    const physicalAddressType = $("select#physical-address-type").val();
    $("input#street-name").val('');
    $("input#city").val('');
    $("input#state").val('');
    $("input#zipcode").val('');
    $("select#physical-address-type").val('');

    let newPhysicalAddress = new PhysicalAddress(inputtedStreet, inputtedCity, inputtedState, inputtedZipcode, physicalAddressType);
    console.log(newPhysicalAddress);
    // newAddress.addPhysicalAddress(newPhysicalAddress);
    // console.log('new physical address', newAddress);
    newContact.addAddress(newAddress);
    console.log('trying to add physical address to contact', newContact)

    const emailAddressType = $("select#email-address-type").val();
    const inputtedEmail = $("input#email-address").val();
    newEmailAddress = new EmailAddress (inputtedEmail, emailAddressType);
    console.log(newEmailAddress);
    // newAddress.addEmailAddress(newEmailAddress);
    // console.log('new email address', newAddress);

    
    newAddress.addAddresses(newPhysicalAddress, newEmailAddress);
    console.log('new address'. newAddress);
    newContact.addAddress(newAddress);
    console.log('trying to add email address to contact', newContact)
    console.log('addressBook log', addressBook);
  })


  let currentId = 0;
  $('#addPhysicalAddress').on('click', function() {
    console.log('firstclick currentId', currentId);
    function currentDivId () {
      return currentId += 1;
    }
    currentDivId();  
    
    let htmlString = `
    <div class="new-physical-address" id='${currentId}'>
      <div class="row section"> 
        <div class="col-md-1">
          <button type="button" class="btn btn-primary removePhysicalAddress" data-id="${currentId}">-</button>
        </div>
        <div class="col-md">
          <h3>Physical Address</h3>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <select type="text"  class="form-control" id="physical-address-type">
              <option selected disabled value="">Choose Type</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="recreation">Recreation</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md">
          <label for="street-name">Street:</label>
          <input type="text"  class="form-control" id="street-name">
        </div>
      </div>
      <div class='row'>
        <div class="form-group col-md-6">
          <label for="city">City:</label>
          <input type="text"  class="form-control" id="city">
        </div>
        <div class="form-group col-md">
          <label for="state">State:</label>
          <input type="text"  class="form-control" id="state">
        </div>
        <div class="form-group col-md">
          <label for="zipcode">Zipcode:</label>
          <input type="text"  class="form-control" id="zipcode">
        </div>
      </div>
    </div>`
    
    $('.new-address-input').append(htmlString);
  })

  $(".new-address-input").on("click", ".removePhysicalAddress", function() {
    console.log('clicked to remove, currentId:', currentId);

    const idToDelete = $(this).attr('data-id')
    
    $(`#${idToDelete}`).remove()
  });

  let currentEmailId = 0;
  $('#addEmailAddress').on('click', function() {
    function currentEmailDivId () {
      return currentId += 1;
    }
    currentEmailDivId();  
    
    let htmlString = `
    <div class='new-email-address' id='${currentEmailId}'>
      <div class="row section">
        <div class="col-md-1">
          <button type="button" class="btn btn-primary removeEmailAddress" data-emailId='${currentEmailId}'>-</button>
        </div>
        <div class="col-md">
          <h3>Email Address</h3>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <select id='email-address-type' class="form-control" id="email-type">
              <option selected disabled value="">Choose Type</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="recreation">Mobile</option>
              <option value="recreation">Emergency Contact</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email"  class="form-control" id="email-address">
      </div>
    </div>`
    
    $('.new-email-input').append(htmlString);
  })

  $(".new-email-input").on("click", ".removeEmailAddress", function() {

    const idToDelete = $(this).attr('data-emailId')
    
    $(`#${idToDelete}`).remove()
  });
  
});

// fixed ----
// the event watcher was firing multiple times
// we ended up with a duplicate ID
// maybe we aren't trying to delete the correct element?

// to fix ----