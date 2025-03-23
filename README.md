# Algebraic Equation GPT

This repo experiments with Computer image text recognition.
Photos, images or pictures containing a Mathematics Equation is fed to the app.
The local server implements Cloud Vision API to study the source and extract the equation.
The extracted equation is fed to an LLM which then analyses and solves it.
A comprehensive explanation together with the solution is output to the user.
This is the Genesis version.

<img src= "https://github.com/ironmanfpv/https://github.com/ironmanfpv/Algebraic-Equation-GPT/blob/main/img/img%200.jpg">
<img src="https://github.com/ironmanfpv/https://github.com/ironmanfpv/Algebraic-Equation-GPT/blob/main/img/img%201.jpg" height="300" width="600">
<img src="https://github.com/ironmanfpv/https://github.com/ironmanfpv/Algebraic-Equation-GPT/blob/main/img/img%202.jpg" height="300" width="600">

# SETUP STEPS: # 
The following layout the steps to run a LOCAL HOSTED version of Algebraic Equation GPT.
To try a WEB HOSTED version of Algebraic Equation GPT and SKIP the Image Text Extraction Capability, read Section C and F. 
The rest of the sections may be skipped.
Alegebraic Equation GPT works independent of Text Extraction Capability.

## A. Set up Credentials ##

1.  Create a Google Cloud Project at http://cloud.google.com/
2.  Click Console>Quick Access>APIs and Services>+ Enable API and Services>Choose Cloud Vision API
3.  In the Google Cloud console, go to menu\>API &Services\>Credentials.
4.  Create your OAuth client ID : 
        Call it Web Client 1 (Name of your choice).
5.  Click the named Web application ; (Web Client 1):
        Authorised  JavaScript origins \> URL 1 : http://localhost:8000 
        Authorised  Redirect URIs \> URL 1 : http://localhost:8000/
6.  Click Create or Save.
7.  Note your Client ID.

## B. Generate Cloud Vision API keys ##

1.  This step can be skipped if Text from image recognition is not used.
2.  Under API & Services\>Credentials
3.  Create credentials \> API keys
4.  Note your API keys

## C. Generate OPENAI API keys ##

1.  Access OPENAI>API and Sign up or Log in.
2.  Click settings (Nut icon on top right, beside profile).
3.  Left Column, under organisation >API Keys> + Create New Secret Key.
4.  Select Key owned by you> Type in Name>Select Default project > Click Create Secret Key.
5.  Click Copy to copy the secret key. Store it somewhere safe to be used in Algebraic Equation GPT for log in.

## D. Download Code IDE and installations  ##

1.  Install VS code and all its relevant extensions. Extensions : Python, node
2.  In VS Code, run a copy of this project from GitHub repository.
3.  To enable text detection capabilities, key in your Cloud Vision API keys.

## E. Procedure to running a local version of Algebriac Equation GPT ##

1.  In VS code, ensure Node, NPM are updated extensions.
2.  In VS code project tab, click on index.html, close all other terminals and nodes.
2.  Call up a new terminal.
3.  In your working directory prompt, type node.
4.  In your working directory prompt, install the http-server package by typing : npm install http-server
5.  In your working directory prompt, start a web server: npx http-server -p 8000
6.  In your browser, navigate to http://localhost:8000, or click on one of the 2 generated URL, app will load.
7.  Key in your name.
8.  Key in your OPENAI API key and click confirmed. (Ensure both name and API keys are entered.)
9.  In the Upload window, click "Choose file" to select a picture (JPEG or PNG) containing a Math equation.
10. In the Extract Equation Window, Click "Read" to extract equation, "Clear" to clear the window. 
11. In the Solution and Explanation window, Click "Solve, Analyse and Explain" to seek solution.
12. If solution is cryptic or unclear, repeating Step 11 will regenerate another output.
13. Click "Exit" to end the app.
14. AR device function are not developed.

## F. Procedure to use a hosted version of Algebriac Equation GPT ##

1.  Key in your name.
2.  Key in your OPENAI API key and click confirmed. (Ensure both name and API keys are entered.)
3.  In the Extract Equation Window, type in the Equation you would like Algebraic Equation GPT to be solved, analysed and explained.
4.  In the Solution and Explanation window, Click "Solve, Analyse and Explain" to seek solution.
5.  If solution is cryptic or unclear, repeating Step 11 will regenerate another output.
6.  Click "Exit" to end the app.

## G. Credits/Acknowledgement ##

This project is built with the inspiration of offering student algebra self-help.
Educators can also generate quick notes on equation solving explanation notes as they deem suitable. 
Educators can scale this repository accordingly.

If you are interested in my other projects, please search google: Github ironmanfpv. 

For collaboration interests, email me @ akitaishi@gmail.com 👋

Linkedin: www.linkedin.com/in/jason-n-b515a89a  🌍

21/3/2025 (Friday)