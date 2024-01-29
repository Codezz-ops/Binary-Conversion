function binaryToDecimalIP(binaryIP: string): string {
    const binaryOctets = binaryIP.split('.')
    const decimalOctets = binaryOctets.map(binaryOctet => parseInt(binaryOctet, 2))
    const decimalIP = decimalOctets.join('.')
    return decimalIP
}

const binaryIP = "11000000.10101000.00011000.00001111"
const decimalIP = binaryToDecimalIP(binaryIP)

console.log(`Binary IP: ${binaryIP}`)
console.log(`Decimal IP: ${decimalIP}`)