export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) 
}

export const getInitails = (name) => {
    if (!name) return ''

    const words = name.split(' ')
    let initails = ''

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initails += words[i][0];
    }

    return initails.toUpperCase()
}