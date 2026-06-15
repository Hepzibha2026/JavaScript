let msg;
let code = 403;

switch (code) {
    case 401:
        msg = 'unauthorized';
        console.log(msg);
        break;
    case 403:
        msg = 'forbidden';
        console.log(msg);
        break;
    case 404:
        msg = 'not found';
        console.log(msg);
        break;

}

// object instead of switch
const messages = {
    401: 'unauthorized',
    403: 'forbidden',
    404: 'not found'
};

const msg1 = messages[code];
console.log(msg1);