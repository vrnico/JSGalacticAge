Galactic Age Calculator
==========
#### A Javascript Application by Nico Daunt

### Epicodus Week One Javascript Code Review on Test Driven Development.

#### Description

Galactic Age Calculator is a fun way for users to find out their planetary age on the inner planets! The user enters their birthday, and the calculator determines their new age based off the solar returns of 5 different planets! 

## Installation

Open your preferred terminal, and enter the following command to clone source to your local machine:
```sh
git clone https://github.com/vrnico/JSGalacticAge
```

navigate to the JSGalacticAge directory:
```sh
cd JSGalacticAge
```

Initialize the configuraton process:
```sh
npm install
```

Build the javascript project and import dependencies:
```sh
npm run build
```

Launch the site from the project directory:
```sh
npm run start
```

## Specifications

1. #### Takes a users age and converts it to seconds

| Input      | Output           |
| ------------- |:-------------:|
| 10     | **315360000 Seconds** |

2. #### Takes two dates and provides the difference (in seconds) between them.

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991 - 03/16/2018    | **845078400 seconds** |

3. #### Return user's age in Mercurian Years based on birthdate

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991     | **111 Mercury years** |

4. #### Return user's age in Venusian Years based on birthdate

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991     | **43 Venus years** |

5. #### Return user's age in Martian Years based on birthdate

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991     | **14 Martian years** |

6. #### Return user's age in Jupiterian Years based on birthdate

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991     | **2 years** |

6. #### Return user's remaining years based on American census life expectancy of 79 years

| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991     |  **Mercurian Years Left: -32**  |
|    |  **Venusian Years Left: 36**  |
|      |  **Martian Years Left: 65**  |
|     |  **Earth Years Left: 53**  |
|    |  **Jupiterian Years Left: 77**  |

6. #### If a user has already surpassed the avg life expectancy, return number of years they have lived past the life expectancy
| Input      | Output           |
| ------------- |:-------------:|
| 06/05/1991     |  **Mercurian Years Past Life Expectancy of 79 years: 32**  




## Created With
* HTML
* JavaScript
* CSS
###  Tested With
* Karma
* Jasmine







## License
Copyright 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
