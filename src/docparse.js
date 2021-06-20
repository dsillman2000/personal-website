export const loadFromFile = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result));
    reader.onerror = (event) => {
        switch (event.target.error.code) {
            case event.target.error.NOT_FOUND_ERR:
                return reject(new Error('Error while reading a file: File not found.'));
            case event.target.error.NOT_READABLE_ERROR:
                return reject(new Error('Error while reading a file: File not readable'));
            case event.target.error.SECURITY_ERR:
                return reject(new Error('Error while reading a file: Security error.'));
            case event.target.error.ABORT_ERROR:
                return reject(new Error('Error while reading a file: Aborted.'));
            default: 
                return reject(new Error('Error while reading a file.'));
        }
    }
    reader.readAsArrayBuffer(file);

    return null;
});