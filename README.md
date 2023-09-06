# Deploy Nodejs project to Amazon EC2 with Github Actions

## After successfully connecting github to remote server follow this commands

### Step 1: Update Package Repositories

Run the following command to update your package repositories:

```bash
sudo apt update
```

### Step 2: Install Node.js

Install Node.js using the following command:

```bash
sudo apt-get install -y nodejs
```

### Step 3: Install Nginx

Install Nginx to act as a reverse proxy for your Node.js application:

```bash
sudo apt-get install -y nginx
```

### Step 4: Install PM2

Install PM2 globally to manage your Node.js application:

```bash
sudo npm i -g pm2
```

### Step 5: Configure Nginx

Navigate to the Nginx sites-available directory and open the default configuration file for editing:

```bash
cd /etc/nginx/sites-available
sudo nano default
```

Inside the Nginx configuration file, add the following block to configure the reverse proxy for your API:

```nginx
location /api {
    rewrite ^\/api\/(.*)$ /api/$1 break;
    proxy_pass http://localhost:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### Step 6: Restart Nginx

After making changes to the Nginx configuration, restart Nginx to apply the changes:

```bash
sudo systemctl restart nginx
```

### Step 7: Start Your Node.js Application with PM2

Navigate to your project directory and start your Node.js application using PM2. Replace `server.js` with the actual filename of your Node.js application:

```bash
cd /path/to/your/app
pm2 start server.js --name=Backend
```

### Step 8: Restart Your Node.js Application with PM2 (Optional)

If you need to restart your Node.js application managed by PM2, you can use the following command:

```bash
pm2 restart Backend
```

These steps should help you set up a Node.js backend API with Nginx and PM2 on your Debian-based Linux system. Make sure to customize the paths and filenames according to your specific project.
