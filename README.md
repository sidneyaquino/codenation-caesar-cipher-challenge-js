<a name="readme-top"></a>

<h1 align="center">
  <a href="#"> CAESAR CIPHER CHALLENGE </a>
</h1>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#built-with">Built With</a> •
  <a href="#getting-start">Getting Start</a> •
  <a href="#author">Author</a> •
  <a href="#user-content-license">License</a>
</p>



## About

>According to `Wikipedia`, *"a **Caesar's cipher** is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of **"3"**, **"D"** would be replaced by **"A"**, **"E"** would become **"B"**, and so on. The method is named after Julius Caesar, who used it in his private correspondence."*
>
> `Normal:` THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
>
> `Cipher:` QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 💻Features

Write a program that makes an HTTP request to the url below:
>https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=YOUR_TOKEN

The result of the request will be a JSON as per the example:
```json
{
  "numero_casas": 10,
  "token":"token_user",
  "cifrado": "cipher_text",
  "decifrado": "normal_text",
  "resumo_criptografico": "resume"
}
```
The program must submit the updated file for correction via POST to the API:
>https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=YOUR_TOKEN

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Prerequisites

- Messages will be converted to lowercase for both encryption and decryption;
- The numbers and points will be kept, that is:
> `Normal:` 1a.a
> `Cipher:` 1d.d

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Requirements
For this challenge you will need :
-   NodeJS LTS (8.12.0+)

💡**Note**: Try to use as few libraries as possible.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="built-with"></a>
## :rocket: Built With
This project was developed with the following technology:
- Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Start

To get a local copy, setting up and running the project, follow these simple steps.


### 🛠️ Installation Steps
1. Clone the repository
```Bash
git clone https://github.com/sidneyaquino/codenation-caesar-cipher-challenge-js
```
2. Go into the project directory


### :zap: Running...
In the projet folder execute the comand:
```bash
node ./src/index.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="author"></a>
## :mailbox_with_mail: Author
Made by Sidney Aquino, [get in Touch!](https://de.linkedin.com/in/sidneydeaquino) <a href="https://de.linkedin.com/in/sidneydeaquino" title="Linkein"> :incoming_envelope: </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="licence"></a>
## :memo: License
This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---
