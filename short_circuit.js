let status = 'param';
if (!status) {
    status = 'unknown';
    console.log(status);
}

const status1 = 'param' || console.log('unknown');