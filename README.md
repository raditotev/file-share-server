# Local File Share Server

Share files from your computer directly with anyone without the use of cloud service providers.

**Requirements:**  
NodeJS, NPM | YARN

**Instructions:**

1. Find what is your internet IP - [What Is My IP Address](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiUk_Gm08WBAxWjXfEDHbgpDZoQFnoECBEQAQ&url=https%3A%2F%2Fwhatismyipaddress.com%2F&usg=AOvVaw1BHx-i6y1Lmm8bhF4Kzm6U&opi=89978449), or just Google
2. Assign IP address to `IP` variable in `index.js`
3. Find what is your machine's IP on the the local network:  
   Linux | Mac: from the console `ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d " " -f 2 | head -n 1`  
   Windows: Settings > Network & Internet > Ethernet > IPv4 / IPv6 address
4. Open your router settings and set forwarding on port 8008 to your machine local IP
5. Install dependencies: `npm i`
6. Paste files you want to share in `files` folder in the root of the project
7. Start server: `npm start`
8. Share link printed in the console

**Important**  
When you finish with file share ensure you disable port forwarding in your router settings.
