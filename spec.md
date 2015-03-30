#Personal Bank Account
---
##Specs

#### 1. When server starts random 4 digit number will be created for temporary port number.

#### 2. SIGN UP: Each new user will be prompt to enter their personal info in following order:
First Name, Last Name, Amount to deposit and four digit password. After user provide this info, output to the user will be:
* **First Name:** john
* **Last Name:** doe
* **Checking Account:** $852.52
* **Password:** 8124

#### 2. When user type all above info, user's first name will be used ```"'/.' + 'first_name' + '.json'"``` to create and store their personal info in new json file which will be stored in accounts directory.

#### 3. LOG IN: If user already exist, to enter/list account info, user will type ```access``` plus user's ```first name```

#### Future Update:
##### 4. User will be able to update his checking account by ```deposit``` money or ```withdraw``` money from Checking Account
