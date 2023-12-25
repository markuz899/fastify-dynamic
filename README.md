# SERVER API

## Installation

```sh
npm install
npm start
```

## Config

Creates the .env file containing the variables

```sh
PORT=3020
DEFAULT_EMAIL=llamawayinfo@gmail.com
DEFAULT_PASSWORD=kvreypvsihhhkyzf
DEFAULT_FROM=LLAMA-INFO

NODE_ENV=develop
DATE_FORMAT=DD/MM/YYYY

LOG_ACTIVE=true
LOG_LEVEL=debug
```

Send body example

```sh
{
    "from": "LLAMAWAY - INFO",
    "to": "markuz.89@hotmail.it",
    "subject": "Welcome",
    "html": "<p style='color:red'>html body</p>",
    "template": "welcome"
}
```

Possible template email

- welcome
- information
